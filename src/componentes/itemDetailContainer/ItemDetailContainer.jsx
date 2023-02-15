import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Loading from "../loading/Loading";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [load, setLoad] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoad(true);
    const docRef = doc(db, "productos", itemId);
    getDoc(docRef)
      .then((doc) => {
        setItem({ ...doc.data(), id: doc.id });
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
        <div className="item-detail-container">
          {item && <ItemDetail {...item} />}
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
