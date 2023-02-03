import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsTrashFill } from 'react-icons/bs';

const Cart = () => {
  const { cart, emptyCart, totalCart, removeItem } = useContext(CartContext)
  return(
    <div className="container my-5">
      <h2>Tu Compra</h2>
      <hr />
      {
        cart.map(item =>(
          <div key={item.id}>
            <h4>{item.nombre} </h4>
            <p>cantidad: {item.cantidad} </p>
            <p>precio: $ {item.precio * item.cantidad} </p>
            <button className="btn btn-outline-danger" onClick={() => removeItem(item.id)}> <BsTrashFill/> </button>
            <hr />
          </div>
        ))
      }
      <h4>Total: ${totalCart()}</h4>

      <button className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito</button>
    </div>
  )

}

export default Cart;