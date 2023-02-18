import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Loading from "../loading/Loading";
import "./ItemDetailContainer.css";
import ErrorRoute from "../errorRoute/ErrorRoute";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(false);  
  const { itemId } = useParams();

  useEffect(() => {
    setLoad(true);
    const docRef = doc(db, "productos", itemId);
    getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          setItem({ ...doc.data(), id: doc.id });                    
        }else{
          throw new Error("Producto no encontrado");          
        }
      })
      .catch((error) => {
        setError(true);        
      })
      .finally(() => {
        setLoad(false);
      });
  }, [itemId]);

  return (
    <>
    {load ? (
      <Loading />
    ) : (
      <>
        {error ? (
          <ErrorRoute />
        ) : (
          <div className="item-detail-container">
            {item && <ItemDetail {...item} />}
          </div>
        )}
      </>
    )}
    </>
  );
};

export default ItemDetailContainer;
