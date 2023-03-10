import { Link, useNavigate } from "react-router-dom";
import ItemCount from "./IteamCount";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import "./itemDetail.css";

const ItemDetail = ({
  id,
  genero,
  imagen,
  nombre,
  precio,
  color,
  stock,
  detalle,
}) => {
  const navigate = useNavigate();
  const handleVolver = () => {
    navigate(-1);
  };
  const [cantidad, setCantidad] = useState(1);

  const { addCart, isInCart } = useContext(CartContext);

  const handleAdd = () => {
    const item = {
      id,
      nombre,
      genero,
      color,
      imagen,
      precio,
      stock,
      cantidad,
    };
    if(item.stock === 0){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No hay stock en estos momentos"  ,
      });
      return
    }else{addCart(item);}    
  };
 

  return (     
      <div className="detail-container">
      <div className="img-detalle-container">
        <div className="img-container">
          <img className="img-detail" src={imagen} alt={nombre} />
        </div>
        <div className="detalle-detail">
          <div className="titulo-container">
            <h2>{nombre}</h2>
          </div>
          <p className="txt-detalle">{detalle}</p>
          <p className="color-detalle">Color: {color} </p>
          <p className="stock-detalle">Unidades disponible: {stock}</p>
          <p className="precio-detalle">${precio}</p> 
          <div className="visible">Total:${cantidad*precio}</div>
          <div className="buttons-detail">
            {!isInCart(id) ? (
              <ItemCount
                max={stock}                
                setCantidad={setCantidad}
                cantidad={cantidad}
                onAdd={handleAdd}
              />
            ) : (
              <Link to="/cart" className="btn btn-success">
                Terminar Compra
              </Link>
            )}

            <button className="btn btn-primary" onClick={handleVolver}>
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>    
  );
};

export default ItemDetail;
