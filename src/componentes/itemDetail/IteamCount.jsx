import { useState } from "react"
import "./itemCount.css"

  const ItemCount = ({max, setCantidad, cantidad, onAdd}) => {
    const [total, setTotal] = useState()
    
    const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleSumar = () => {
      cantidad < max && setCantidad(cantidad + 1)
    }
    return (
      <div className="buttons-itemcount">
        <div>
        <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
        <span className="mx-3">{cantidad} </span>
        <button onClick={handleSumar} className="btn btn-outline-primary">+</button>        
        </div>
        <button onClick={onAdd} className="btn btn-success my-3">Agregar al carrito</button>
      </div>
    )
  }

  export default ItemCount;