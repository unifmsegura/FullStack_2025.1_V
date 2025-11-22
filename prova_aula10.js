const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static(path.join(__dirname, 'public')));


const lab1 = path.join(__dirname, 'FullStack_2025.1_V', 'LAB_1');


app.use(express.static(lab1));


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://matheusbesegura_db_user:V2FG7HH2212@matheus.vwzcain.mongodb.net/?appName=Matheus';
const DB_NAME = process.env.DB_NAME || 'carros_bd';
const PORT = process.env.PORT || 80; 

async function main() {
  const client = new MongoClient(MONGODB_URI);
  try {
    await client.connect();
    console.log('Conectado ao MongoDB');

    const dbo = client.db(DB_NAME);
    const usuarios = dbo.collection('usuarios');
    const carros = dbo.collection('carros');

    
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'projects.html'));
    });

    
    app.get('/cadastrar_usuario', (req, res) => {
      res.render('register', { mensagem: null });
    });

    app.post('/cadastrar_usuario', async (req, res) => {
      const data = { nome: req.body.nome, login: req.body.login, senha: req.body.senha };
      try {
        await usuarios.insertOne(data);
        res.render('resposta_usuario', { resposta: 'Usuário cadastrado com sucesso!' });
      } catch (err) {
        console.error(err);
        res.render('resposta_usuario', { resposta: 'Erro ao cadastrar usuário!' });
      }
    });

    
    app.get('/logar_usuario', (req, res) => {
      res.render('login', { mensagem: null });
    });

    app.post('/logar_usuario', async (req, res) => {
      const data = { login: req.body.login, senha: req.body.senha };
      try {
        const items = await usuarios.find(data).toArray();
        if (items.length === 0) {
          res.render('resposta_usuario', { resposta: 'Usuário/senha não encontrado!' });
        } else {
          res.render('resposta_usuario', { resposta: 'Usuário logado com sucesso!' });
        }
      } catch (err) {
        console.error(err);
        res.render('resposta_usuario', { resposta: 'Erro ao logar usuário!' });
      }
    });

    
    app.get('/api/usuarios', async (req, res) => {
      const objs = await usuarios.find().toArray();
      res.json(objs);
    });

    
    app.get('/carros', async (req, res) => {
      const lista = await carros.find().toArray();
      res.render('carros_list', { carros: lista });
    });

    
    app.get('/carros/gerencia', async (req, res) => {
      const lista = await carros.find().toArray();
      res.render('carros_gerencia', { carros: lista, msg: null });
    });

    
    app.post('/carros/cadastrar', async (req, res) => {
      const data = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: Number(req.body.ano),
        qtde_disponivel: Number(req.body.qtde_disponivel)
      };
      try {
        await carros.insertOne(data);
        const lista = await carros.find().toArray();
        res.render('carros_gerencia', { carros: lista, msg: 'Carro cadastrado com sucesso!' });
      } catch (err) {
        console.error(err);
        const lista = await carros.find().toArray();
        res.render('carros_gerencia', { carros: lista, msg: 'Erro ao cadastrar carro!' });
      }
    });

    
    app.post('/carros/:id/remover', async (req, res) => {
      const id = req.params.id;
      try {
        const result = await carros.deleteOne({ _id: new ObjectId(id) });
        const lista = await carros.find().toArray();
        if (result.deletedCount === 0) {
          res.render('carros_gerencia', { carros: lista, msg: 'Carro não encontrado!' });
        } else {
          res.render('carros_gerencia', { carros: lista, msg: 'Carro removido com sucesso!' });
        }
      } catch (err) {
        console.error(err);
        const lista = await carros.find().toArray();
        res.render('carros_gerencia', { carros: lista, msg: 'Erro ao remover carro!' });
      }
    });

    
    app.post('/carros/:id/atualizar', async (req, res) => {
      const id = req.params.id;
      const newData = {
        $set: {
          marca: req.body.marca,
          modelo: req.body.modelo,
          ano: Number(req.body.ano),
          qtde_disponivel: Number(req.body.qtde_disponivel)
        }
      };
      try {
        const result = await carros.updateOne({ _id: new ObjectId(id) }, newData);
        const lista = await carros.find().toArray();
        if (result.modifiedCount === 0) {
          res.render('carros_gerencia', { carros: lista, msg: 'Carro não encontrado ou sem alterações!' });
        } else {
          res.render('carros_gerencia', { carros: lista, msg: 'Carro atualizado com sucesso!' });
        }
      } catch (err) {
        console.error(err);
        const lista = await carros.find().toArray();
        res.render('carros_gerencia', { carros: lista, msg: 'Erro ao atualizar carro!' });
      }
    });

    
    app.post('/carros/:id/vender', async (req, res) => {
      const id = req.params.id;
      try {
        const carro = await carros.findOne({ _id: new ObjectId(id) });
        if (!carro) {
          const lista = await carros.find().toArray();
          return res.render('carros_gerencia', { carros: lista, msg: 'Carro não encontrado!' });
        }
        if ((carro.qtde_disponivel || 0) <= 0) {
          const lista = await carros.find().toArray();
          return res.render('carros_gerencia', { carros: lista, msg: 'Esgotado' });
        }
        await carros.updateOne({ _id: carro._id }, { $inc: { qtde_disponivel: -1 } });
        const lista = await carros.find().toArray();
        res.render('carros_gerencia', { carros: lista, msg: 'Venda realizada!' });
      } catch (err) {
        console.error(err);
        const lista = await carros.find().toArray();
        res.render('carros_gerencia', { carros: lista, msg: 'Erro ao processar venda!' });
      }
    });

    
    app.get('/api/carros', async (req, res) => {
      const objs = await carros.find().toArray();
      res.json(objs);
    });

    
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });

  } catch (err) {
    console.error('Erro na conexão com MongoDB:', err);
    process.exit(1);
  }
}

main();