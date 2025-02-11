require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao MySQL:", err.message);
        return;
    }
    console.log("Conectado ao MySQL!");
});

// Rota para obter todos os gêneros
app.get("/generos", (req, res) => {
    const sql = "SELECT * FROM generos";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Rota para obter todos os jogos
app.get("/jogos", (req, res) => {
    const sql = "SELECT * FROM jogos";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Rota para adicionar um novo jogo com gênero
app.post("/jogos", (req, res) => {
    const { titulo, descricao, imagem_url, video_url, genero_id } = req.body;
    const sql = "INSERT INTO jogos (titulo, descricao, imagem_url, video_url, genero_id) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [titulo, descricao, imagem_url, video_url, genero_id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, titulo, descricao, imagem_url, video_url, genero_id });
    });
});

// Rota para buscar jogos por gênero
app.get("/jogos/genero/:genero_id", (req, res) => {
    const sql = "SELECT * FROM jogos WHERE genero_id = ?";
    db.query(sql, [req.params.genero_id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});
// Rota para adicionar um novo gênero
app.post("/generos", (req, res) => {
    const { nome } = req.body;
    const sql = "INSERT INTO generos (nome) VALUES (?)";
    db.query(sql, [nome], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: result.insertId, nome });
    });
});

app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000");
});
