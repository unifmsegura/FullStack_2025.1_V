// server_08.js (dentro de Servidor/)
const express = require('express');
const path    = require('path');
const { exec }= require('child_process');
const app     = express();

// Caminho físico até a pasta LAB_1
const lab1 = path.join(__dirname, '..', 'LAB_1');

// Torna tudo dentro de LAB_1 acessível em URLs raiz: /arquivo.html, /estilo_08.css, etc.
app.use(express.static(lab1));

// Configuração do EJS (resposta dinâmica)
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

// Rotas explícitas (opcionais, mas mais claras)
app.get('/',        (req, res) => res.sendFile(path.join(lab1, 'Projects.html')));
app.get('/login',   (req, res) => res.sendFile(path.join(lab1, 'Login.html')));
app.get('/cadastra',(req, res) => res.sendFile(path.join(lab1, 'Cadastro.html')));

// "Banco" em memória
const users = [];

// POST /register e /auth continuam iguais...
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  users.push({ username,password });
  res.render('resposta',{
    title:   'Cadastro',
    message: 'Cadastro realizado com sucesso!',
    status:  'success'
  });
});
app.post('/auth', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u=>u.username===username&&u.password===password);
  res.render('resposta',{
    title:   'Login',
    message: user ? 'Login bem-sucedido!' : 'Usuário ou senha incorretos!',
    status:  user ? 'success' : 'error'
  });
});

// Sobe servidor
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
  // abre automaticamente a página de cadastro
  exec(`start http://localhost:${PORT}/cadastra`);
});
