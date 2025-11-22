// index.js
const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const uri = 'mongodb+srv://matheusbesegura_db_user:<V2FG7HH2212>@matheus.2xdezty.mongodb.net/?appName=Matheus'; // ajuste para seu ambiente
const dbName = 'blogdb';
let db;

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Conexão MongoDB (e mantém referência global)
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName);
    // Criar índices simples se quiser (opcional)
    db.collection('posts').createIndex({ titulo: 1 }).catch(()=>{});
    db.collection('usuarios').createIndex({ db_login: 1 }, { unique: true }).catch(()=>{});

    app.listen(80, () => {
      console.log('Servidor rodando: http://localhost:80/index_Aula_2.html');
      // abre a página no Windows; em outros sistemas comente se der erro
      try { exec('start http://localhost:80/index_Aula_2.html'); } catch(e) {}
    });
  })
  .catch(err => {
    console.error('Erro ao conectar no MongoDB:', err);
    process.exit(1);
  });

// Rota principal (Projects.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'projects.html'));
});

// Blog - lista todos os posts (EJS dinâmico)
app.get('/blog', async (req, res) => {
  try {
    const posts = await db.collection('posts').find({}).toArray();
    res.render('blog', { posts });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar posts');
  }
});

// Página de cadastro de post (arquivo HTML conforme requisito)
app.get('/cadastrar_post', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cadastrar_post.html'));
});

// Recebe dados para novo post (POST)
app.post('/cadastrar_post', async (req, res) => {
  try {
    const { titulo, resumo, conteudo } = req.body;
    await db.collection('posts').insertOne({ titulo, resumo, conteudo, createdAt: new Date() });
    // Após cadastrar, volta para /blog (página inicial do blog)
    res.redirect('/blog');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao cadastrar post');
  }
});

// Cadastrar usuário (exemplo fornecido, adaptado para async/await)
app.post('/cadastrar_usuario', async (req, res) => {
  try {
    const usuarios = db.collection('usuarios');
    const data = { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha };
    await usuarios.insertOne(data);
    res.render('resposta_usuario', { resposta: 'Usuário cadastrado com sucesso!' });
  } catch (err) {
    console.error(err);
    // Pode ser erro de duplicidade de login, etc.
    res.render('resposta_usuario', { resposta: 'Erro ao cadastrar usuário!' });
  }
});

// Logar usuário (busca no banco)
app.post('/logar_usuario', async (req, res) => {
  try {
    const usuarios = db.collection('usuarios');
    const data = { db_login: req.body.login, db_senha: req.body.senha };
    const items = await usuarios.find(data).toArray();
    console.log(items);
    if (!items || items.length === 0) {
      res.render('resposta_usuario', { resposta: 'Usuário/senha não encontrado!' });
    } else {
      res.render('resposta_usuario', { resposta: 'Usuário logado com sucesso!' });
    }
  } catch (err) {
    console.error(err);
    res.render('resposta_usuario', { resposta: 'Erro ao logar usuário!' });
  }
});