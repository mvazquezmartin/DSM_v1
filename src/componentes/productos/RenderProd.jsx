import { useEffect, useState } from "react";
import ProdCard from "./ProdCard";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import Loading from "../loading/Loading";
import ErrorRoute from "../errorRoute/ErrorRoute";
import "./RenderProd.css";

const RenderProd = () => {
  const [productos, setProductos] = useState([]);
  const [load, setLoad] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    setLoad(true);
    const productosRef = collection(db, "productos");
    let queryFinal;
    if (categoria == "nuevacoleccion") {
      queryFinal = query(productosRef, where("nueva_coleccion", "==", true));
    } else if (categoria) {
      queryFinal = query(productosRef, where("genero", "==", categoria));
    } else {
      queryFinal = productosRef;
    }
    getDocs(queryFinal)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          })
        );
      })
      .finally(() => {
        setLoad(false);
      });
  }, [categoria]);

  let renderProductos;
  if (["hombre", "mujer", "nuevacoleccion"].includes(categoria)) {
    renderProductos = (
      <div className="container-main-prod">
          <h1 className="titulo-productos">
            {categoria
              ? categoria === "nuevacoleccion"
                ? categoria.replace("nuevacoleccion", "nueva colección")
                : categoria
              : "productos"}
          </h1>
          <div className="container-producto">
            <ProdCard productos={productos} />
          </div>
        </div>
    );
  } else if (categoria === undefined) {
    renderProductos = (
      <div className="container-main-prod">
        <h1 className="titulo-productos">productos</h1>
        <div className="container-producto">
          <ProdCard productos={productos} />
        </div>
      </div>
    );
  } else {
    renderProductos = <ErrorRoute />;
  }
  
  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <div>
          {renderProductos}
        </div>
      )}
    </>
  );
}
export default RenderProd;
