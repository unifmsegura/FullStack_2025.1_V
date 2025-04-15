const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let image = new Image();
image.src = "Imagens/red_soul.png";

// Posição inicial da imagem
let x_mouse = 150;
let y_mouse = 150;
imageSize = 40;

// Função para capturar posição do mouse
canvas.addEventListener("mousemove", (event) => {
    rect = canvas.getBoundingClientRect();
    x_mouse = event.clientX - rect.left;
    y_mouse = event.clientY - rect.top;
    draw();
});

// Função para não deixar a imagem sair do canvas (Math.max e Math.min) e que ela fique centralizada no mouse (imageSize / 2)
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let drawX = Math.max(0, Math.min(x_mouse - imageSize / 2, canvas.width - imageSize));
    let drawY = Math.max(0, Math.min(y_mouse - imageSize / 2, canvas.height - imageSize));

    ctx.drawImage(image, drawX, drawY, imageSize, imageSize);
}

image.onload = draw;
// image.onload = desenhar para que carregue antes de movimentar o mouse