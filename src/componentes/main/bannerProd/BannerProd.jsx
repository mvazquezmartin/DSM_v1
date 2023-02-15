import { Link } from "react-router-dom";

import "./BannerProd.css";

const BannerProd = ({ id, nombre, invert }) => {
  return (
    <div className={`banner-producto-container ${invert ? "invert" : ""}`}>
      <div className="banner-izq">
        <p className="producto-id">Icon: {id} </p>
        <p className="producto-nombre"> {nombre} </p>
        <Link to="/productos/nuevacoleccion" className="my-btc">
          SABER MÁS
        </Link>
      </div>
      <div className="banner-der">
        <img className="prod-img" src={`/${id}.png`} alt={nombre} />
      </div>
    </div>
  );
};

export default BannerProd;
