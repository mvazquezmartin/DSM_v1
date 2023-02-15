import { Link } from "react-router-dom";

import "./BannerProd.css";

const BannerProd = ({ item }) => {
  return (
    <>
      {item.map((prod) => (
        <div key={prod.id} className={`banner-producto-container ${item.invert ? "invert" : ""}`}>
          <div className="banner-izq">            
            <p className="producto-nombre"> {prod.nombre} </p>
            <Link to={`/detail/${prod.id}`} className="my-btc">
              SABER MÁS
            </Link>
          </div>
          <div className="banner-der">
            <img className="prod-img" src={prod.imagen} alt={prod.nombre} />
          </div>
        </div>
      ))}
    </>
  );
};

export default BannerProd;
