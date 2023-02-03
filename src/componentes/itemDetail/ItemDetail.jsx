import { Link, useNavigate } from "react-router-dom";
import ItemCount from "./IteamCount";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({
  id,
  genero,
  imagen,
  nombre,
  precio,
  color,
  talle,
  stock,
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
    addCart(item);
  };

  return (
    <div>
      <img src={imagen} alt={nombre} />
      <h5>{nombre}</h5>
      <p>{precio}</p>
      <p>{color} </p>
      <p>{talle}</p>
      
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
  );
};

export default ItemDetail;
