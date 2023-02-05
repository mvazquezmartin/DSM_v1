import "./ProdCard.css";
import { Link } from "react-router-dom";

const ProdCard = ({ productos }) => {
  return (
    <>
      {productos.map((prod) => (
        <div key={prod.id} className="container-prod-card">
          <div className="img-card-container">
            <img className="img-card" src={prod.imagen} alt={prod.nombre} />
          </div>
          <div className="nombre-card">
            <h5>{prod.nombre}</h5>
          </div>
          <div className="color-card">Color:{prod.color}</div>
          <div className="precio-card">${prod.precio}</div>          
          <Link to={`/detail/${prod.id}`} className="btn-card">
            Ver Más
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProdCard;
