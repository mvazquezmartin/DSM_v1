import { useEffect, useState } from "react";
import { pedirDatos } from "../../helper/pedirData";
import ProdCard from "./ProdCard";
import { useParams } from "react-router-dom";
import "./RenderProd.css";

const RenderProd = () => {
  const [productos, setProductos] = useState([]);
  const { genero } = useParams();

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if (genero) {
          setProductos(res.filter((prod) => prod.genero === genero));
        } else {
          setProductos(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [genero]);

  return (
    <div>
      <h1 className="titulo-productos">Productos</h1>
      <div className="container-producto">
        <ProdCard productos={productos} />
      </div>
    </div>
  );
};

export default RenderProd;
