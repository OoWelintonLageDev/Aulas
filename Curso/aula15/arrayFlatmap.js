let numeros = [1, 2, 3, ];
let resultado = numeros.flatMap(num => [`${num} * 2 = ${num * 2}`]);
console.log(resultado); // [1, 2, 3, 4, 5, 6]


//let numeros = [1, 2, 3, ];
//let resultado = numeros.flatMap(num => [num, num * 2]);
//console.log(resultado); // [1, 2, 3, 4, 5, 6]