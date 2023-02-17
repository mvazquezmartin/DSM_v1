import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import Swal from "sweetalert2";
import {
  collection,
  addDoc,
  documentId,
  where,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import BoldText from "../bold/BoldText";
import "./checkout.css";
import  alertError from "../alertsError/AlertError";

const Checkout = () => {
  const { cart, totalCart, emptyCart } = useCartContext();
  const [orderId, setOrderId] = useState(null);
  const [values, setValues] = useState({
    nombre: "",
    domicilio: "",
    email: "",
    repeatEmail: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    const emailValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    e.preventDefault();

    if (values.nombre.length < 2) {
      alertError("Esto es una prueba")  
      return 
    }

    if (values.domicilio.length < 2) {
      alertError("Es obligatorio el campo Domicilio")
      return;
    }

    if (!emailValido.test(values.email)) {
      alertError("No es un e-mail valido")
      return;
    }

    if (values.email !== values.repeatEmail) {
      alertError("No coincide el e-mail")
      return;
    }

    const order = {
      cliente: values,
      items: cart,
      total: totalCart(),
    };

    const batch = writeBatch(db);
    const ordersRef = collection(db, "orders");
    const productosRef = collection(db, "productos");
    const outOfStock = [];
    const itemsRef = query(
      productosRef,
      where(
        documentId(),
        "in",
        cart.map((prod) => prod.id)
      )
    );
    const productos = await getDocs(itemsRef);
    productos.docs.forEach((doc) => {
      const item = cart.find((item) => item.id === doc.id);
      if (doc.data().stock >= item.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - item.cantidad,
        });
      } else {
        outOfStock.push(item);
      }
    });
    if (outOfStock.length === 0) {
      batch.commit().then(() => {
        addDoc(ordersRef, order).then((doc) => {
          setOrderId(doc.id);
          emptyCart();
        });
        Swal.fire({
          title: "Gracias por su compra",
          text: `Proximamente nos pondremos en contacto.`,
          icon: "success",
          buttons: true,
        });
      });
    }
  };
  if (orderId) {
    const dateId = new Date();
    const day = dateId.getDate();
    const hour = dateId.getHours();
    const minute = dateId.getMinutes();
    const second = dateId.getSeconds();

    return (
      <div className="fin-compra-container">
        <h2>Tu compra ha sido exitosa</h2>
        <hr />
        <p>
          Fecha de la compra:{" "}
          <BoldText>
            {" "}
            {day}/{dateId.getMonth() + 1}/{dateId.getFullYear()} {hour}:{minute}
            :{second}{" "}
          </BoldText>
        </p>
        <p>
          Tu código de orden es: <BoldText> {orderId} </BoldText>
        </p>

        <Link to="/" className="my-btc">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Finalizar Compra</h1>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          name="nombre"
          value={values.nombre}
          placeholder="Nombre"
        />
        <input
          onChange={handleInputChange}
          type="text"
          name="domicilio"
          value={values.domicilio}
          placeholder="Domicilio"
        />
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          value={values.email}
          placeholder="E-mail"
        />
        <input
          onChange={handleInputChange}
          type="email"
          name="repeatEmail"
          value={values.repeatEmail}
          placeholder="Repita el E-mail"
        />
        <button className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
