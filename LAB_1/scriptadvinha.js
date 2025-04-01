let numeroAleatorio = Math.floor(Math.random() * 100);
let tentativas = 0;

function verificarNumero() {
    let entradaUsuario = document.getElementById("advinhe").value;
    let mensagem = document.getElementById("mensagem");
    let contador = document.getElementById("contador");

    if (entradaUsuario === "") {
        mensagem.innerText = "Digite um número!";
        mensagem.className = "mensagem-erro";
        return;
    }

    tentativas++;
    contador.innerText = tentativas;

    entradaUsuario = parseInt(entradaUsuario);

    if (entradaUsuario < 0 || entradaUsuario > 99) {
        mensagem.innerText = "Número fora do intervalo! Digite entre 0 e 99.";
        mensagem.className = "mensagem-erro";
    } else if (entradaUsuario > numeroAleatorio) {
        mensagem.innerText = "Tente um número menor!";
        mensagem.className = "mensagem-erro";
        document.body.style.setProperty("background-color", "red")
    } else if (entradaUsuario < numeroAleatorio) {
        mensagem.innerText = "Tente um número maior!";
        mensagem.className = "mensagem-erro";
        document.body.style.setProperty("background-color", "red")
    } else {
        mensagem.innerText = `Parabéns! Você acertou em ${tentativas} tentativas!`;
        mensagem.className = "mensagem-sucesso";
        document.body.style.setProperty("background-color", "purple")
    }
}
