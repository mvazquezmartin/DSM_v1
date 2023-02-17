import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/navbar/Navbar";
import Nosotros from "./componentes/nosotros/Nosotros";
import Main from "./componentes/main/Main.jsx";
import Footer from "./componentes/footer/Footer";
import RenderProd from "./componentes/productos/RenderProd";
import Contacto from "./componentes/contacto/Contacto";
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./componentes/cart/Cart";
import Checkout from "./componentes/checkout/Checkout";
import ErrorRoute from "./componentes/errorRoute/ErrorRoute";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/productos" element={<RenderProd />} />
          <Route path="/productos/:categoria" element={<RenderProd />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/productos/:nuevacoleccion" element={<RenderProd />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="*" element={<ErrorRoute />} />          
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
