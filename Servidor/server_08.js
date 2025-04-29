const express = require('express'); //framework, cria servidor http e rotas
const path    = require('path'); //módulo do node p construir caminhos
const { exec }= require('child_process'); //abrir site quando rodar servidor
const app     = express(); //inicializar a aplicação, gerando o objeto app p configurar as rotas

// caminho para a pasta LAB_1, lab1 guarda o caminho absoluto para LAB_1 onde está meu html, css e scripts estáticos
const lab1 = path.join(__dirname, '..', 'LAB_1');

// torna tudo dentro de LAB_1 acessível em URLs, ajuda a procurar arquivos do LAB_1
app.use(express.static(lab1));

// configuração do EJS 
app.set('view engine','ejs'); //ejs para templates dinâmicos
app.set('views', path.join(__dirname, 'views')); //informa onde estão os .ejs (pasta views ao lado de server_08.ejs)
app.use(express.urlencoded({ extended: true })); //lê o formulário e preenche req.body para POSTs

// rotas explícitas, executa a função
app.get('/',        (req, res) => res.sendFile(path.join(lab1, 'Projects.html')));
app.get('/login',   (req, res) => res.sendFile(path.join(lab1, 'Login.html')));
app.get('/cadastra',(req, res) => res.sendFile(path.join(lab1, 'Cadastro.html')));

// banco em memória, array para armazenar temporariamente os usuários
const users = [];

// POST /register e /auth 
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  users.push({ username,password });
  res.render('resposta_08',{
    title:   'Cadastro',
    message: 'Cadastro realizado com sucesso!',
    status:  'success'
  });
});
app.post('/auth', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u=>u.username===username&&u.password===password);
  res.render('resposta_08',{
    title:   'Login',
    message: user ? 'Login bem-sucedido!' : 'Usuário ou senha incorretos!',
    status:  user ? 'success' : 'error'
  });
});

// sobe servidor
const PORT = 80;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
  // abre automaticamente a página de cadastro
  exec(`start http://localhost:${PORT}/cadastra`);
});
