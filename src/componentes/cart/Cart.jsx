import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cart.css";
import CartVacio from "./CartVacio";
import CartLLeno from "./CartLleno";

const Cart = () => {
  const{cart}=useContext(CartContext)
  return (
    <>
    { cart.length === 0?
    <CartVacio/>
    :
    <CartLLeno/>
    }
    </>          
  );
};

export default Cart;
