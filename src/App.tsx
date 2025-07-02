// src/App.tsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import DeletarCategoria from "./pages/categorias/deletarcategoria/DeletarCategoria";
import FormCategoria from "./pages/categorias/formcategoria/FormCategoria";
import ListarCategorias from "./pages/categorias/listarcategoria/ListarCategorias";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;