// src/App.tsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      {/* Container principal que organiza tudo */}
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* O 'recheio' da página que vai crescer */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* Suas outras rotas virão aqui */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;