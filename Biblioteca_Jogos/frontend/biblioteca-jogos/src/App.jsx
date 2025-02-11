import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddGame from "./pages/AddGame";
import AddGenre from "./pages/AddGenre";

export default function App() {
  return (
    <div>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/add-game">Adicionar Jogo</Link>
        <Link to="/add-genre">Adicionar Gênero</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-game" element={<AddGame />} />
        <Route path="/add-genre" element={<AddGenre />} />
      </Routes>
    </div>
  );
}
