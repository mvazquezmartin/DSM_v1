import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

const init = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(init);

  const addCart = (item) => {
    const newCart = cart.slice();
    newCart.push(item);
    setCart(newCart);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const totalCart = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  };

  const totalCantidad = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        isInCart,
        emptyCart,
        totalCart,
        removeItem,
        totalCantidad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
