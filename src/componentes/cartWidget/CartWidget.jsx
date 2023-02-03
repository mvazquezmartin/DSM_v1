import { Link } from "react-router-dom"
import { BsCart } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


const CartWidget = () =>{  
  const { totalCantidad } = useContext(CartContext)
  return(
    <Link to="/cart" className="icono-cart" >
      <BsCart />
      <span>{ totalCantidad() } </span>
    </Link>
  )
}

export default CartWidget;