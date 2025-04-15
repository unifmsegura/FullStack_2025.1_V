const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");

let image = new Image();
image.src = "Imagens/red_soul.png";

let posX = 150;
let posY = 150;
const imageSize = 40;

canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    posX = event.clientX - rect.left;
    posY = event.clientY - rect.top;
    draw();
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let drawX = Math.max(0, Math.min(posX - imageSize / 2, canvas.width - imageSize));
    let drawY = Math.max(0, Math.min(posY - imageSize / 2, canvas.height - imageSize));

    ctx.drawImage(image, drawX, drawY, imageSize, imageSize);
}

image.onload = draw;