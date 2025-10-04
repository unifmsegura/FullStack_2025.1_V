// window.alert("hello world!")
console.log("hello world!");

// let nome = prompt("Qual e o seu nome?");
// console.log(nome);

console.log("while");
let i = 0;
while (i < 10){
    console.log(i);
    // i++;
    // i = i + 1;
    i += 1
}

console.log("for");
for(let i = 0; i < 10; i++){
    console.log(i);
}

console.log('Exercício 1');
for(let i = 1; i < 100; i += 2){
    console.log(i);
}

console.log('Exercício 2');
for(let i = 5; i < 500; i += 5){
    console.log(i);
}

console.log('Exercício 3');
let x = parseInt(prompt("Digite um número inteiro"));
if(x < 0){
    console.log("Número inválido!");
}
for (let i = x; i >= 0; i--){
    console.log(i);
}

console.log('Exercício 4');
let num = parseInt(prompt("Digite um número inteiro"));
if(num < 0){
    console.log("Número inválido!");
}

let mult = 1;
for(let i = num; i > 0; i--){
    mult *= i;
    console.log(i, mult)
}