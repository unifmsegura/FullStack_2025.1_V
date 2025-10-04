let p1 = document.getElementById('p1').innerHTML;
console.log(p1);

document.getElementById('p1').innerHTML = "Olá Mundo"

// Exemplo 1 (comentário para não aparecer esse pop-up toda hora)
// let nome = prompt("Qual o seu nome?");
// let idade = prompt("Qual sua idade?");
// let ano_atual = 2025;
// let ano_nascimento = ano_atual - idade; 

// let resposta = "Olá " + nome + ", seu ano de nascimento é " + ano_nascimento + "!";
// document.getElementById('ex1').innerHTML = resposta;

// Exemplo de Função
function imprimeMensagem(msg){
    console.log(msg);
}

imprimeMensagem('mensagem 1');
imprimeMensagem('mensagem 2');
imprimeMensagem('mensagem 3');

// Exemplo de função soma
function soma(a, b){
    let c = a + b;
    console.log("A soma de " + a + " e " + b + " é igual a " + c);
    return c;
}
let result = soma(3, 4);

function mult(a, b){
    let c = a * b;
    console.log("O produto de " + a + " e " + b + " é igual a " + c);
    return c;
}

function ex2(){
    let num = parseInt(document.getElementById('ex2_in').value);
    console.log("Incrementos até " + num);
    for(let i = 0; i <= num; i++){
        console.log(i);
    }
}

function ex3(){
    let num1 = parseInt(document.getElementById('ex3_1').value);
    let num2 = parseInt(document.getElementById('ex3_2').value);
    let result = soma(num1, num2);
    console.log(result);
    document.getElementById('ex3_resp').innerHTML = "A soma de " + num1 + " e " + num2 + " é " + result; 
}

function ex4(){
    let num1 = parseInt(document.getElementById('ex4_1').value);
    let num2 = parseInt(document.getElementById('ex4_2').value);
    
    let result = 0;
    if(num1 < 0 || num2 < 0){
        result = soma(num1, num2);
    }else{
        result = mult(num1, num2);
    }
    document.getElementById('ex4_resp').innerHTML = "O resultado é " + result; 
}