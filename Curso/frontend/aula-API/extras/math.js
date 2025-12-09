let raio = 10;
const area = Math.PI * Math.pow(raio, 2);

const min = 100;
const max = 1000;

console.log('Área do círculo:', area.toFixed(4));

const raizQuadrada = Math.sqrt(raio);
console.log('Raiz quadrada do raio:', raizQuadrada);

let y = Math.ceil(4.3);
console.log('Arredondamento para cima:', y);

let x = Math.floor(4.3);
console.log('Arredondamento para baixo:', x);

let z = Math.round(4.5);
console.log('Arredondamento padrão:', z);

let a = Math.random();
console.log('Número aleatório entre 0 e 1:', a);

let b = Math.ceil(Math.random() * 60);
console.log('Número aleatório entre 1 e 60:', b);

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}

console.log(`Número aleatório entre ${min} e ${max}: ${aleatorio(min, max)}`);

Math.abs(-10);
Math.pow(2, 10);
Math.sqrt(144);
Math.ceil(6.1);
Math.floor(6.9);
Math.round(6.5);
Math.max(5, 10, 2, 8, 3);
Math.min(5, 10, 2, 8, 3);
Math.random();
Math.log(10);
Math.log10(1000);
Math.sin(30 * Math.PI / 180); // Convertendo graus para radianos
Math.cos(60 * Math.PI / 180); // Convertendo graus para radianos
Math.tan(45 * Math.PI / 180); // Convertendo graus para radianos
Math.exp(2);
Math.cbrt(27);
Math.trunc(4.9);
Math.fround(5.5);
Math.hypot(3, 4);
Math.clz32(1);
Math.imul(2, 4);
Math.sign(-10);
Math.sinh(1);
Math.cosh(1);
Math.tanh(1);
Math.acos(0.5);
Math.asin(0.5);
Math.atan(1);
Math.atan2(1, 1);
Math.expm1(1);
Math.log1p(1);
Math.log2(8);
Math.cosh(0);
Math.sinh(0);
Math.tanh(0);
Math.trunc(-4.9);
Math.fround(-5.5);
Math.hypot(5, 12);
