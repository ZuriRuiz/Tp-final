import Navbar from "./components/Navbar";
import Buscar from "./components/Buscar";
import Populares from "./components/Populares";
import UltimosL from "./components/UltimosL";
import Home from "./components/Home";
import Footer from "./components/Footer";
import DetallePelicula from "./components/DetallePelicula";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ultimoslanzamientos/" element={<UltimosL />} />
          <Route path="populares" element={<Populares />} />
          <Route path="buscar" element={<Buscar />} />
          <Route path="detalle-pelicula/:idPelicula" element={<DetallePelicula />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
    
  );
};
export default App;
