import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase/config";

const NuevaColeccion = ()=>{
  const [producto, setProducto] = useState([]);
  const { nuevacoleccion } = useParams();
  useEffect(()=>{
      const productosRef = collection(db, 'productos')
      const queryNuevaColeccion = query(productosRef, where("nueva_coleccion", "==", true))        
      getDocs(queryNuevaColeccion)
          .then((resp)=>{
              console.log( resp.docs.map((doc)=> doc.data()))
              setProducto(
                  resp.docs.map((doc)=>{
                      return {
                          ...doc.data(),
                          id: doc.id,
                      }
                  })
              )
          })
  }, [nuevacoleccion])
  return(
    <>    
    </>
  )
}