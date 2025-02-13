import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddGame from "./pages/AddGame";
import AddGenre from "./pages/AddGenre";
import AddCadastrarDev from "./pages/AddCadastrarDev";
import MostrarDev from "./pages/MostrarDev";


export default function App() {
  return (
    <div>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/add-game">Adicionar Jogo</Link>
        <Link to="/add-genre">Adicionar Gênero</Link>
        <Link to="/add-cadastrar-dev">Cadastrar Desenvolvedor</Link>
        <Link to="/mostrar-dev">Mostrar Desenvolvedor</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-cadastrar-dev" element={<AddCadastrarDev />} />
        <Route path="/mostrar-dev" element={<MostrarDev />} />
        <Route path="/add-game" element={<AddGame />} />
        <Route path="/add-genre" element={<AddGenre />} />
      </Routes>
    </div>
  );
}
