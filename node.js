const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const uri = 'mongodb+srv://matheusbesegura_db_user:V2FG7HH2212@matheus.vwzcain.mongodb.net/?appName=Matheus'; 
const dbName = 'blogdb';
let db;

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


const lab1 = path.join(__dirname, 'FullStack_2025.1_V', 'LAB_1');

 
app.use(express.static(lab1));


MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName);
    
    db.collection('posts').createIndex({ titulo: 1 }).catch(()=>{});
    db.collection('usuarios').createIndex({ db_login: 1 }, { unique: true }).catch(()=>{});

    app.listen(80, () => {
      console.log('Servidor rodando: http://localhost:80/index_Aula_2.html');
      
      try { exec('start http://localhost:80/index_Aula_2.html'); } catch(e) {}
    });
  })
  .catch(err => {
    console.error('Erro ao conectar no MongoDB:', err);
    process.exit(1);
  });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'projects.html'));
});
app.get('/index_Aula_2.html', (req, res) => res.sendFile(path.join(lab1, 'index_Aula_2.html')));

app.get('/blog', async (req, res) => {
  try {
    const posts = await db.collection('posts').find({}).toArray();
    res.render('blog', { posts });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar posts');
  }
});

app.get('/cadastrar_post', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cadastrar_post.html'));
});

app.post('/cadastrar_post', async (req, res) => {
  try {
    const { titulo, resumo, conteudo } = req.body;
    await db.collection('posts').insertOne({ titulo, resumo, conteudo, createdAt: new Date() });
    res.redirect('/blog');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao cadastrar post');
  }
});

app.post('/cadastrar_usuario', async (req, res) => {
  try {
    const usuarios = db.collection('usuarios');
    const data = { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha };
    await usuarios.insertOne(data);
    res.render('resposta_usuario', { resposta: 'Usuário cadastrado com sucesso!' });
  } catch (err) {
    console.error(err);
    res.render('resposta_usuario', { resposta: 'Erro ao cadastrar usuário!' });
  }
});

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