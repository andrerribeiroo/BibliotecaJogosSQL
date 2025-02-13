import React, { useState } from 'react';
import axios from 'axios';

export default function AddCadastrarDev() {
  const [formData, setFormData] = useState({
    nome: '',
    ano: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/desenvolvedores", formData)
      .then(() => {
        console.log("Desenvolvedor cadastrado com sucesso!");
        alert('Desenvolvedor cadastrado com sucesso!');
      })
      .catch(error => console.error("Erro ao adicionar desenvolvedor:", error));
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    background: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px'
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer'
  };

  const buttonHoverStyle = {
    background: '#0056b3'
  };

  return (
    <div style={containerStyle}>
      <h1>Adicionar Novo Desenvolvedor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do Desenvolvedor"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="date"
          name="ano"
          placeholder="Ano do Desenvolvedor"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <button 
          type="submit" 
          style={buttonStyle} 
          onMouseOver={(e) => (e.target.style.background = buttonHoverStyle.background)}
          onMouseOut={(e) => (e.target.style.background = buttonStyle.background)}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
