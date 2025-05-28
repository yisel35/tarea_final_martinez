import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a mi-tienda!" />} />
        <Route path="/productos" element={<ItemListContainer greeting="Nuestros productos" />} />
        <Route path="/carrito" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
