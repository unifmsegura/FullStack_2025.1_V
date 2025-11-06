console.log('Rodando servidor de:', __dirname);
const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const app = express();

// Caminhos base
const lab1 = path.join(__dirname, 'FullStack_2025.1_V', 'LAB_1');

// Configuração de arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(lab1));

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'FullStack_2025.1_V', 'LAB_1', 'views')); // ou troque por path.join(__dirname, 'FullStack_2025.1_V', 'LAB_1', 'views')
app.use(express.urlencoded({ extended: true }));

// Rotas HTML
app.get('/', (req, res) => res.sendFile(path.join(lab1, 'projects.html')));
app.get('/login', (req, res) => res.sendFile(path.join(lab1, 'Login.html')));
app.get('/cadastra', (req, res) => res.sendFile(path.join(lab1, 'Cadastro.html')));
app.get('/index_Aula_2.html', (req, res) => res.sendFile(path.join(lab1, 'index_Aula_2.html')));

// "Banco de dados" em memória
const users = [];

// Rotas POST
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.render('resposta_08', {
    title: 'Cadastro',
    message: 'Cadastro realizado com sucesso!',
    status: 'success'
  });
});

app.post('/auth', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  res.render('resposta_08', {
    title: 'Login',
    message: user ? 'Login bem-sucedido!' : 'Usuário ou senha incorretos!',
    status: user ? 'success' : 'error'
  });
});

// Inicialização do servidor
const PORT = 80;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando: http://localhost:${PORT}/index_Aula_2.html`);
  exec(`start http://localhost:${PORT}/index_Aula_2.html`);
});
