require ("colors");
var http = require("http");
var express = require("express");
var mongodb = require("mongodb");

var app = express();
app.use(express.static('./public'))

var server = http.createServer(app);
server.listen(3000);

console.log("Servidor rodando ...".rainbow);

const MongoClient = mongodb.MongoClient;
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true });

// métodos e actions

app.get("/inicio", function(requisicao, resposta){
    resposta.redirect("Aula_1/index.html")
})

app.post("/inicio", function(requisicao, resposta){
    resposta.redirect("Aula_1/index.html")
})

app.post("/cadastrar", function(requisicao, resposta){
    let nome = requisicao.body.nome;
    let login = requisicao.body.login;
    let senha = requisicao.body.senha;
    let nasc = requisicao.body.nascimento;

    console.log(nome, login, senha, nasc)

    resposta.render("resposta",{nome, login, senha, nascimento});
})