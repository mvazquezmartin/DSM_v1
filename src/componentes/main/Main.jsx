import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import Banner from "./bannerMain/BannerMain";
import BannerProd from "./bannerProd/BannerProd";

const Main = () => {
  const [item, setItem] = useState;
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
      <BannerProd id="001" nombre="The Parka" />
      <BannerProd id="002" nombre="The Canoe" invert="invert" />
      <BannerProd id="003" nombre="The Mukluk" />
      <BannerProd id="004" nombre="The Group of 7" invert="invert" />
    </>
  );
};

export default Main;
