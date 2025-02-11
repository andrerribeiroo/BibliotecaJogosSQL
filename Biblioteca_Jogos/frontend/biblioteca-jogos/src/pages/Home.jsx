import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [jogos, setJogos] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [generoSelecionado, setGeneroSelecionado] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/jogos").then(response => setJogos(response.data));
    axios.get("http://localhost:5000/generos").then(response => setGeneros(response.data));
  }, []);

  const handleFiltrarPorGenero = () => {
    if (generoSelecionado) {
      axios.get(`http://localhost:5000/jogos/genero/${generoSelecionado}`)
        .then(response => setJogos(response.data));
    }
  };

  return (
    <div className="container">
      <h1>Biblioteca de Jogos</h1>
      <button onClick={() => navigate("/add-game")}>➕ Adicionar Jogo</button>

      <select onChange={(e) => setGeneroSelecionado(e.target.value)} value={generoSelecionado}>
        <option value="">Todos os Gêneros</option>
        {generos.map((genero) => (
          <option key={genero.id} value={genero.id}>{genero.nome}</option>
        ))}
      </select>
      <button onClick={handleFiltrarPorGenero}>Filtrar</button>

      {jogos.map((jogo) => (
        <div key={jogo.id}>
          <h2>{jogo.titulo}</h2>
          <p>{jogo.descricao}</p>
          <p><strong>Gênero:</strong> {generos.find(g => g.id === jogo.genero_id)?.nome || "Desconhecido"}</p>
          <img src={jogo.imagem_url} alt={jogo.titulo} style={{ width: "100%" }} />
          <a href={jogo.video_url} target="_blank">Assistir no YouTube</a>
        </div>
      ))}
    </div>
  );
};

export default Home;
