import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import {
  collection,
  addDoc,
  doc,
  documentId,
  where,
  updateDoc,
  getDoc,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import "./checkout.css";
import { async } from "@firebase/util";

const Checkout = () => {
  const { cart, totalCart, emptyCart } = useCartContext();
  const [orderId, setOrderId] = useState(null);
  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      });
    } else {
      alert("no hay stock de algun producto");
    }
  };
  if (orderId) {
    return (
        <div className="container my-5">
            <h2>Tu compra ha sido exitosa</h2>
            <hr/>
            <p>Tu código de orden es: {orderId}</p>

            <Link to="/">Volver</Link>
        </div>
    )
}

  if (cart.length === 0) {
    return <Navigate to="/" />;
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
          name="direccion"
          value={values.direccion}
          placeholder="Domicilio"
        />
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          value={values.email}
          placeholder="E-mail"
        />
        <button className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;