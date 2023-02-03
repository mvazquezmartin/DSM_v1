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

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<RenderProd />} />
          <Route path="/productos/:genero" element={<RenderProd />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
