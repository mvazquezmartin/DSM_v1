import "./ProdCard.css";

const ProdCard = ({ productos }) => {
  return (
    <>
      {productos.map((prod => (
        <div key={prod.id} className="container-prod-card">
          <div className="img-card">
            <img src={prod.imagen} alt={prod.nombre} />
          </div>
          <div className="nombre-card"><h5>{prod.nombre}</h5></div>
          <div className="talle-card">Talle:{prod.talle}</div>
          <div className="color-card">Color:{prod.color}</div>
          <div className="precio-card">${prod.precio}</div>
          {/* <div>{prod.genero}</div> */}
          <button className="btn-card">Ver Más</button>
        </div>)
      ))}
    </>
  );
};

export default ProdCard;
