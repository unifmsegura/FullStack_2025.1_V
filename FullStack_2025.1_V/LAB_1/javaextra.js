// 1 e 2. cálculo de média ponderada e conceito

function exercicio1_2() {
    let trab = parseFloat(prompt("Nota do Trabalho de Laboratório:"));
    let avaliacao = parseFloat(prompt("Nota da Avaliação Semestral:"));
    let exame = parseFloat(prompt("Nota do Exame Final:"));

    let media = (trab * 2 + avaliacao * 3 + exame * 5) / 10;

    let conceito;
    if (media >= 8) conceito = "A";
    else if (media >= 7) conceito = "B";
    else if (media >= 6) conceito = "C";
    else if (media >= 5) conceito = "D";
    else conceito = "E";

    console.log(`Média ponderada: ${media.toFixed(2)} - Conceito: ${conceito}`);
}


// 3. ordenação e comparação de três valores

function exercicio3() {
    let I = parseInt(prompt("Digite o valor de I (1, 2 ou 3):"));
    let A = parseFloat(prompt("Digite o valor de A:"));
    let B = parseFloat(prompt("Digite o valor de B:"));
    let C = parseFloat(prompt("Digite o valor de C:"));

    if (I === 1) {
        let crescente = [A, B, C].sort((x, y) => x - y);
        console.log("Ordem crescente:", crescente);
    } else if (I === 2) {
        let decrescente = [A, B, C].sort((x, y) => y - x);
        console.log("Ordem decrescente:", decrescente);
    } else if (I === 3) {
        let maior = Math.max(A, B, C);
        let outros = [A, B, C].filter(x => x !== maior);
        console.log("Maior no meio:", [outros[0], maior, outros[1]]);
    } else {
        console.log("Valor de I inválido!");
    }
}

// 4. classificação por altura e peso

function exercicio4() {
    let altura = parseFloat(prompt("Digite a altura (m):"));
    let peso = parseFloat(prompt("Digite o peso (kg):"));
    let classificacao;

    if (altura < 1.20) {
        if (peso <= 60) classificacao = "A";
        else if (peso <= 90) classificacao = "D";
        else classificacao = "G";
    } else if (altura <= 1.70) {
        if (peso <= 60) classificacao = "B";
        else if (peso <= 90) classificacao = "E";
        else classificacao = "H";
    } else {
        if (peso <= 60) classificacao = "C";
        else if (peso <= 90) classificacao = "F";
        else classificacao = "I";
    }

    console.log(`Classificação: ${classificacao}`);
}


// 5. média de duas notas de 6 alunos

function exercicio5() {
    for (let i = 1; i <= 6; i++) {
        let n1 = parseFloat(prompt(`Aluno ${i} - Nota 1:`));
        let n2 = parseFloat(prompt(`Aluno ${i} - Nota 2:`));
        let media = (n1 + n2) / 2;
        let msg;

    if (media <= 3) msg = "Reprovado";
        else if (media < 7) msg = "Exame";
        else msg = "Aprovado";

        console.log(`Aluno ${i} - Média: ${media.toFixed(2)} - ${msg}`);
    }
}

// 6. área de triângulo 

function exercicio6() {
    let base = parseFloat(prompt("Digite a base do triângulo:"));
    let altura = parseFloat(prompt("Digite a altura do triângulo:"));

    if (base > 0 && altura > 0) {
        let area = (base * altura) / 2;
        console.log(`Área do triângulo: ${area}`);
    } else {
        console.log("Erro: valores inválidos (devem ser maiores que zero).");
    }
}


// 7. vários números - estatísticas

function exercicio7() {
    let numeros = [];
    while (true) {
        let entrada = prompt("Digite um número ou 'sair' para finalizar:");
        if (entrada.toLowerCase() === "sair") break;
        let num = parseFloat(entrada);
        if (!isNaN(num)) numeros.push(num);
    }

    if (numeros.length === 0) {
        console.log("Nenhum número digitado.");
        return;
    }

    let soma = numeros.reduce((a, b) => a + b, 0);
    let qtd = numeros.length;
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);
    let pares = numeros.filter(n => n % 2 === 0);
    let impares = numeros.filter(n => n % 2 !== 0);

    console.log("Soma dos números:", soma);
    console.log("Quantidade de números:", qtd);
    console.log("Maior número:", maior);
    console.log("Menor número:", menor);
    console.log("Média dos pares:", pares.length ? (pares.reduce((a,b)=>a+b,0)/pares.length).toFixed(2) : "Nenhum par");
    console.log("Percentual de ímpares:", ((impares.length / qtd) * 100).toFixed(2) + "%");
}


// escolha do exercício para testar

let opcao = parseInt(prompt("Digite o número do exercício (1 a 7):"));
    switch (opcao) {
      case 1:
      case 2:
        exercicio1_2(); break;
      case 3:
        exercicio3(); break;
      case 4:
        exercicio4(); break;
      case 5:
        exercicio5(); break;
      case 6:
        exercicio6(); break;
      case 7:
        exercicio7(); break;
      default:
        console.log("Opção inválida!");
}