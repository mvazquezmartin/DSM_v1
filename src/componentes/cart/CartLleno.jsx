import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import BoldText from "../bold/BoldText";

const CartLLeno = () => {
  const { cart, emptyCart, totalCart, removeItem, totalCantidad } = useContext(CartContext);
  console.log(cart)
  return (
    <div className="cart-container">
      <div className="titulo-cart">
        <h2>Tu Compra</h2>
      </div>
      {cart.map((item) => (
        <div key={item.id} className="item-container">
          <div className="detalle-item">
            <h4 className="nombre-item">{item.nombre} </h4>
            <p>
              Color: <BoldText> {item.color} </BoldText>{" "}
            </p>
            <p>
              Cantidad: <BoldText>{item.cantidad}</BoldText>
            </p>
            <p>
              Precio: <BoldText>${item.precio * item.cantidad}</BoldText>
            </p>
          </div>
          <div className="img-btn-cart">
            <img src={item.imagen} alt={item.nombre} />
            <button
              className="btn btn-outline-danger"
              onClick={() => removeItem(item.id)}
            >
              {" "}
              <BsTrashFill />{" "}
            </button>
          </div>
        </div>
      ))}
      <h4 className="total-cart">Total: ${totalCart()}</h4>
      <div className="cart-btn">
        <button className="btn btn-danger" onClick={emptyCart}>
          Vaciar Carrito
        </button>
        <Link className="btn btn-success" to="/checkout">
          Comprar
        </Link>
      </div>
    </div>
  );
};

export default CartLLeno;
