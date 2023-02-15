import { Link } from "react-router-dom";
import './cartVacio.css'

const CartVacio = () =>{
  return(
    <div className="cart-vacio-container">
      <h2>No hay nada en su carrito, <br /> VISITE NUESTRO CATALOGO</h2>
      <Link to='/productos' className="my-btc">CATALOGO</Link>
    </div>
  )
}

export default CartVacio;