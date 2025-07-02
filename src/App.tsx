// src/App.tsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import DeletarCategoria from "./pages/categorias/deletarcategoria/DeletarCategoria";
import FormCategoria from "./pages/categorias/formcategoria/FormCategoria";
import ListarCategorias from "./pages/categorias/listarcategoria/ListarCategorias";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <ToastContainer />
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;