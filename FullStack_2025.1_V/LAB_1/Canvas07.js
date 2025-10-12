const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

function quadrado(x, y, size, cor) {
ctx.fillStyle = cor;
ctx.fillRect(x, y, size, size)
}

function circulo(x, y, r, cor, contorno) {
ctx.beginPath();
ctx.arc(x, y, r, 0, 2 * Math.PI);
ctx.fillStyle = cor;
ctx.strokeStyle = contorno;
ctx.fill();
}
function arco(x, y, r, start, end, cor) {
ctx.beginPath();
ctx.arc(x, y, r, start, end);
ctx.strokeStyle = cor;
ctx.stroke();
}

function linha (x1, y1, x2, y2, cor, largura = 1) {
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.strokeStyle = cor;
ctx.lineWidth = largura;
ctx.stroke();
}

function texto (txt, x, y) {
ctx.fillStyle = "black";
ctx.font = "16px Arial";
ctx.fillText(txt, x, y);
}

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 300, 300);

quadrado(0, 0, 50, "blue");
quadrado(250, 0, 50, "red");
quadrado(0, 270, 30, "yellow");
quadrado(0, 240, 30, "yellow");
quadrado(30, 270, 30, "yellow");
quadrado(270, 270, 30, "black");
quadrado(240, 270, 30, "black");
quadrado(270, 240, 30, "black");

linha(0, 0, 150, 150, "blue");
linha(300, 0, 150, 150, "red");

linha(150, 150, 150, 260, "black");
linha(0, 150, 300, 150, "green");

texto("Canvas", 120, 50);

quadrado(109, 150, 40, "red");
quadrado(0, 119, 30, "cyan");
quadrado(0, 151, 30, "cyan");
quadrado(275, 132, 17, "cyan");
quadrado(285, 132, 17, "cyan");
quadrado(275, 151, 17, "cyan");
quadrado(285, 151, 17, "cyan");


circulo(150, 115, 15, "blue");
circulo(150, 115, 14, "cyan");

circulo(70, 220, 15, "green");
circulo(70, 220, 14, "yellow");
circulo(230, 220, 15, "green");
circulo(230, 220, 14, "yellow");

arco(150, 150, 60, Math.PI, 0, "green")
arco(150, 150, 80, 1.75*Math.PI, 0, "green");
arco(150, 150, 80, 1*Math.PI, 3.93, "green");
circulo(150, 300, 40, "cyan");
arco(150, 300, 40, Math.PI, 0, "green");
arco(150, 300, 80, 1*Math.PI, 4.7, "green");
arco(150, 300, 60, 1.5*Math.PI, 0, "green");

// canvas 2
const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

// CÉU
ctx2.fillStyle = "#aefcf1";
ctx2.fillRect(0, 0, 300, 300);

// SOL
ctx2.beginPath();
ctx2.arc(230, 75, 35, 0, 2 * Math.PI);
ctx2.fillStyle = "yellow";
ctx2.fill();

// CHÃO 
ctx2.fillStyle = "gray";
ctx2.fillRect(0, 217, 300, 100);

// LAGO CIRCULO
function quadrado(x, y, size, cor) {
ctx.fillStyle = cor;
ctx.fillRect(x, y, size, size)
}
ctx2.fillStyle = "royalblue";
ctx2.beginPath();
ctx2.moveTo(0, 218);
ctx2.lineTo(60, 200);
ctx2.arc(5, 230, 45, 1 * Math.PI, 0 * Math.PI);
ctx2.lineTo(0, 300);
ctx2.closePath();
ctx2.fill();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'royalblue';
ctx2.arc(108,310,50,1.5*Math.PI,2.5*Math.PI);
ctx2.fill();
ctx2.closePath();

// FUNÇÃO ÁRVORE
function desenharArvore(ctx, x, y) {
// Tronco
ctx.fillStyle = "saddlebrown";
ctx.fillRect(x + 10, y + 2, 15, 55);
// Copa
ctx.beginPath();
ctx.arc(x + 17.5, y + 10, 23, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();
}
desenharArvore(ctx2, 40, 160);
desenharArvore(ctx2, 250, 190);

// CASA
ctx2.fillStyle = "sienna";
ctx2.fillRect(115.5, 150, 69, 67); 

// PORTA
// RETÂNGULO
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'maroon';
ctx2.fillRect(143.7,181,13,36);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 50;
ctx2.fillStyle = 'royalblue';
ctx2.fillRect(1,230,49,100);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 50;
ctx2.fillStyle = 'royalblue';
ctx2.fillRect(1,260,110,70);
ctx2.closePath();

// TELHADO
ctx2.beginPath();
ctx2.moveTo(115, 150);
ctx2.lineTo(185, 150);
ctx2.lineTo(150, 110);
ctx2.closePath();
ctx2.fillStyle = "tomato";
ctx2.fill();

// JANELAS
ctx2.fillStyle = "skyblue";
ctx2.fillRect(122, 161, 21, 20);
ctx2.fillRect(157, 161, 21, 20);