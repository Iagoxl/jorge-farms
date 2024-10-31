const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Configurar o middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Criar ou abrir o banco de dados SQLite
const db = new sqlite3.Database('database.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Conectado ao banco de dados SQLite.');
});

// Criar a tabela de usuários se não existir
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    fullname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);`);

// Rota para cadastrar usuários
app.post('/api/cadastro', (req, res) => {
    const { username, fullname, email, password } = req.body;
    const sql = `INSERT INTO users (username, fullname, email, password) VALUES (?, ?, ?, ?)`;
    
    db.run(sql, [username, fullname, email, password], function(err) {
        if (err) {
            return res.status(400).json({ message: 'Erro ao cadastrar usuário.', error: err.message });
        }
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!', id: this.lastID });
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/api/usuarios', (req, res) => {
    const sql = `SELECT * FROM users`;
    
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(400).json({ message: 'Erro ao buscar usuários.', error: err.message });
        }
        res.json(rows);
    });
});
