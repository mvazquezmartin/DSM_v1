import "./ItemDetailContainer.css";
import { useEffect } from "react";
import { useState } from "react";
import { pedirItemId } from "../../helper/pedirData";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    pedirItemId(Number(itemId)).then((data) => {
      setItem(data);
    });
  }, [itemId]);

  return (
    <div className="item-detail-container">
      {item && <ItemDetail {...item} />}
    </div>
  );
};

export default ItemDetailContainer;
