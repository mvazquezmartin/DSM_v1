import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { totalCantidad } = useContext(CartContext);
  return (
    <Link to="/cart" className="icono-cart">
      <BsCart />
      <sup>{totalCantidad()} </sup>
    </Link>
  );
};

export default CartWidget;
