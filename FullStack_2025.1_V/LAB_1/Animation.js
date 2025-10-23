const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let image = new Image();
image.src = "Imagens/red_soul.png";

// Posição inicial da imagem
let x_mouse = 150;
let y_mouse = 150;
const imageSize = 40;

// Detectar movimento do mouse em todo o documento
document.addEventListener("mousemove", (event) => {
  const rect = canvas.getBoundingClientRect();
  x_mouse = event.clientX - rect.left;
  y_mouse = event.clientY - rect.top;
  draw();
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Impede que a imagem saia do canvas e mantém o centro do mouse
  const drawX = Math.max(0, Math.min(x_mouse - imageSize / 2, canvas.width - imageSize));
  const drawY = Math.max(0, Math.min(y_mouse - imageSize / 2, canvas.height - imageSize));

  ctx.drawImage(image, drawX, drawY, imageSize, imageSize);
}

image.onload = draw;
