import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import Banner from "./bannerMain/BannerMain";
import BannerProd from "./bannerProd/BannerProd";

const Main = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const itemRef = collection(db, "productos");
    const queryNuevaColeccion = query(
      itemRef,
      where("nueva_coleccion", "==", true)
    );
    getDocs(queryNuevaColeccion).then((resp) => {
      setItem(
        resp.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    });
  });
  return (
    <>
      <Banner />
      <BannerProd item={item.map((element, index)=>{
        if(index % 2 !== 0){
          return{...element, invert: true}
        }else{
          return element
        }
      })} />      
    </>
  );
};

export default Main;
