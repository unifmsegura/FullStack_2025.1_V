let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// retângulos
ctx.beginPath();
ctx.lineWidh = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(0,0,70,70);
ctx.strokeRect(70,70,50,50);
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidh = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.moveTo(200,150);
ctx.lineTo(120,120);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidh = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.arc(200,100,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidh = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.strokeRect("Olá",200,350);
ctx.fillRect("Olá",200,350);
ctx.closePath();