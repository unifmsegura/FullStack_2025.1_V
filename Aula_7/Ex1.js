let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// arcos
ctx.beginPath();
ctx.lineWidh = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(100,100,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidh = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(300,100,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidh = 5;
ctx.strokeStyle = 'green';
ctx.arc(200,100,50,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.arc(95, 50, 40, 0, Math.PI);
ctx.fillStyle = 'white';
ctx.strokeStyle = 'green';
ctx.fill();
ctx.stroke();

// retângulos
ctx.beginPath();
ctx.lineWidh = 5;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.fillRect(0,0,70,70);
ctx.strokeRect();
ctx.closePath();

ctx.beginPath();
ctx.lineWidh = 5;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(0,0,70,70);
ctx.strokeRect();
ctx.closePath();

ctx.beginPath();
ctx.lineWidh = 5;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'red';
ctx.fillRect(0,0,70,70);
ctx.strokeRect();
ctx.closePath();

ctx.beginPath();
ctx.lineWidh = 5;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'red';
ctx.fillRect(0,0,70,70);
ctx.strokeRect();
ctx.closePath();

// linhas
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(0,75);
ctx.lineTo(500,75);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, 0);
ctx.stroke();

// texto
ctx.beginPath();
ctx.lineWidh = 5;
ctx.fillStyle = 'black';
ctx.font = "90px Arial"
ctx.textAlign = "top";
ctx.strokeRect("Desenvolvimento Web",200,350);
ctx.fillRect("Desenvolvimento Web",200,350);
ctx.closePath();