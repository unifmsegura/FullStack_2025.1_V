let carro = {
    cor: 'green',
    modelo: 'SUV',
    marca: 'Toyota',
    buzina: function(){
        return 'bii bii';
    }
};

let carro2 = {
    cor: 'Black',
    modelo: 'SUV',
    marca: 'Ford',
    buzina: function(){
        return 'fom fom';
    }
};

class Carro {
    constructor(cor, modelo, marca){
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
    }
    buzina(){
        return 'bii bii'
    }

}

let carro1 = new Carro('green','SUV','Toyota');
let carro2 = new Carro('Black','SUV','Ford');


console.log(carro1);
console.log(carro2)

// console.log(carro);
// console.log(carro.cor)

// console.log(carro.buzina())
// console.log(carro2.buzina())

let carros = []
carros.push(carro)
carros.push(carro2)
for(let i = 0; i < carros.length; i++){
    console.log(carros[i].buzina())
}





class Retangulo{
    constructor(cor_linha, cor_preenchimento, espessura_linha, x, y, largura, altura){
        this.cor_linha = cor_linha;
        this.cor_preenchimento = cor_preenchimento;
        this.espessura_linha = espessura_linha;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
    }
    desenhe(){
        ctx.beginPath();
        ctx.lineWidth = this.espessura_linha;
        ctx.fillStyle = this.cor_preenchimento;
        ctx.strokeStyle = this.cor_linha;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.strokeRect(this.x,this.y,this.largura,this.altura)
        ctx.closePath()
    }
}


let canvas = document.getElementById('canvas1');
let ctx1 = canvas.getContext('2d');

let retangulo_1 = new  Retangulo('blue', 'red', 3, 200, 200, 20, 20);
retangulo_1.desenhe(ctx1)
retangulo_1.x = 100;
retangulo_1.desenhe(ctx1)