import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddGame = () => {
  const [jogo, setJogo] = useState({ titulo: "", descricao: "", imagem_url: "", video_url: "", genero_id: "" });
  const [generos, setGeneros] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/generos")
      .then(response => setGeneros(response.data))
      .catch(error => console.error("Erro ao buscar gêneros:", error));
  }, []);

  const handleChange = (e) => setJogo({ ...jogo, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/jogos", jogo)
      .then(() => {
        alert("Jogo cadastrado com sucesso!");
        navigate("/");
      })
      .catch(error => console.error("Erro ao adicionar jogo:", error));
  };

  return (
    <div className="container">
      <h1>Adicionar Novo Jogo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="titulo" placeholder="Título" onChange={handleChange} required />
        <input type="text" name="descricao" placeholder="Descrição" onChange={handleChange} required />
        <input type="text" name="imagem_url" placeholder="URL da Imagem" onChange={handleChange} required />
        <input type="text" name="video_url" placeholder="URL do Vídeo" onChange={handleChange} required />
        
        <select name="genero_id" onChange={handleChange} required>
          <option value="">Selecione um Gênero</option>
          {generos.map((genero) => (
            <option key={genero.id} value={genero.id}>{genero.nome}</option>
          ))}
        </select>

        <button type="submit">Adicionar</button>
      </form>

      <button className="btn-add" onClick={() => navigate("/add-genre")}>
        ➕ Criar Novo Gênero
      </button>
    </div>
  );
};

export default AddGame;
