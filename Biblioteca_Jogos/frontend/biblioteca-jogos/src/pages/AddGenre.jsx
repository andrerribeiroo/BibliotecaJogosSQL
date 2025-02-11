import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddGenre = () => {
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/generos", { nome })
      .then(() => {
        alert("Gênero cadastrado com sucesso!");
        navigate("/add-game"); // Redireciona para adicionar jogo após criar o gênero
      })
      .catch(error => console.error("Erro ao adicionar gênero:", error));
  };

  return (
    <div className="container">
      <h1>Adicionar Gênero</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome do Gênero" value={nome} onChange={(e) => setNome(e.target.value)} required />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddGenre;
