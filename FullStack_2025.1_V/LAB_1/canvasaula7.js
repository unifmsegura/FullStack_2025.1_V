const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

function quadrado(x, y, size, cor) {
ctx.fillStyle = cor;
ctx.fillRect(x, y, size, size);
}

function circulo(x, y, r, cor) {
ctx.beginPath();
ctx.arc(x, y, r, 0, 2 * Math.PI);
ctx.fillStyle = cor;
ctx.fill();
}

function arco(x, y, r, start, end, cor) {
ctx.beginPath();
ctx.arc(x, y, r, start, end);
ctx.strokeStyle = cor;
ctx.stroke();
}  

function linha(x1, y1, x2, y2, cor, largura = 1) {
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.strokeStyle = cor;
ctx.lineWidth = largura;
ctx.stroke();
}

function texto(txt, x, y) {
ctx.fillStyle = "black";
ctx.font = "16px Arial";
ctx.fillText(txt, x, y);
}

// Fundo branco
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 300, 300);

// Quadrados coloridos nos cantos
quadrado(0, 0, 30, "blue");
quadrado(270, 0, 30, "red");
quadrado(0, 270, 30, "yellow");
quadrado(270, 270, 30, "black");

// Linhas diagonais
linha(0, 0, 150, 150, "blue");
linha(300, 0, 150, 150, "red");

// Linhas verticais e horizontais
linha(150, 0, 150, 300, "black");
linha(0, 150, 300, 150, "green");

// Texto
texto("Canvas", 115, 50);

// Quadrados vermelhos e cianos
quadrado(135, 135, 30, "red"); // centro
quadrado(50, 120, 20, "cyan");
quadrado(230, 120, 20, "cyan");

// Círculo central azul
circulo(150, 150, 10, "cyan");

// Círculos amarelos
circulo(90, 180, 12, "yellow");
circulo(210, 180, 12, "yellow");

// Arcos verdes
arco(150, 150, 30, Math.PI, 0, "green");
arco(150, 150, 50, Math.PI, 0, "green");
arco(150, 300, 40, Math.PI, 0, "cyan");
arco(150, 300, 60, Math.PI, 0, "green");

    // ===== CANVAS 2 - CASA, ÁRVORES E LAGO =====
const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

// CÉU
ctx2.fillStyle = "#aefcf1";
ctx2.fillRect(0, 0, 300, 300);

// SOL
ctx2.beginPath();
ctx2.arc(240, 60, 30, 0, 2 * Math.PI);
ctx2.fillStyle = "yellow";
ctx2.fill();

// CHÃO 
ctx2.fillStyle = "gray";
ctx2.fillRect(0, 200, 300, 100);

// LAGO
ctx2.fillStyle = "royalblue";
ctx2.beginPath();
ctx2.moveTo(0, 200);
ctx2.lineTo(60, 200);
ctx2.arc(60, 230, 30, 1.5 * Math.PI, 0.5 * Math.PI);
ctx2.lineTo(0, 260);
ctx2.closePath();
ctx2.fill();

// FUNÇÃO ÁRVORE
function desenharArvore(ctx, x, y) {
  // Tronco
  ctx.fillStyle = "saddlebrown";
  ctx.fillRect(x + 10, y + 20, 10, 20);
  // Copa
  ctx.beginPath();
  ctx.arc(x + 15, y + 15, 15, 0, 2 * Math.PI);
  ctx.fillStyle = "green";
  ctx.fill();
}
desenharArvore(ctx2, 40, 180);
desenharArvore(ctx2, 230, 180);

// CASA
ctx2.fillStyle = "sienna";
ctx2.fillRect(120, 150, 60, 60); // corpo da casa

// TELHADO
ctx2.beginPath();
ctx2.moveTo(120, 150);
ctx2.lineTo(180, 150);
ctx2.lineTo(150, 120);
ctx2.closePath();
ctx2.fillStyle = "tomato";
ctx2.fill();

// JANELAS
ctx2.fillStyle = "skyblue";
ctx2.fillRect(130, 160, 15, 15);
ctx2.fillRect(155, 160, 15, 15);
