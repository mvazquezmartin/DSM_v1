import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";   */ 
import ProdCard from "./ProdCard";
import "./RenderProd.css";

const RenderProd = () => {
  const [load, setLoad] = useState(true);
  const [productos, setProductos] = useState([]);
  const { genero } = useParams();

  useEffect(() => {
    setLoad(true);
    /* const productosRef = collection(db, "productos");     
    getDocs(productosRef).then((resp) => {
      console.log(resp.docChanges.map((doc) => doc.data()));
    }); */
  }, [genero]);

  return (
    <div>
      {
        load 
        ? <h2 style={ {margin: '5rem'} }>Cargando...</h2>
        :
        <div className="container-main-prod">
          <h1 className="titulo-productos">Productos</h1>
          <div className="container-producto">
            <ProdCard productos={productos} />
          </div>
        </div>
      }
    </div>
  );
};

export default RenderProd;
