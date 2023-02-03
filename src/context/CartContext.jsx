import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) =>{
   
  const [cart, setCart] = useState([]);  

  const addCart = (item) => {
    const newCart = cart.slice();
    newCart.push(item);
    setCart(newCart);
  };
 
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const emptyCart = () => {
    setCart([])
  }

  const totalCart = () =>{
    return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
  }

  const totalCantidad = () =>{
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }

  const removeItem = (id) =>{
    setCart(cart.filter(item => item.id !== id))
  }

  return (
    <CartContext.Provider value={{
      cart,
      addCart,
      isInCart,
      emptyCart,
      totalCart,
      removeItem,
      totalCantidad
    }} >
      {children}
    </CartContext.Provider>
  )
}