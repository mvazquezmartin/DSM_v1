import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/navbar/Navbar";
import Nosotros from "./componentes/nosotros/Nosotros";
import Main from "./componentes/main/Main.jsx";
import Footer from "./componentes/footer/Footer";
import RenderProd from "./componentes/productos/RenderProd";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<RenderProd />} />
        <Route path="/productos/:genero" element={<RenderProd />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
