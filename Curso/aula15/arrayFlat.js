// .flat => Elimina os colchetes, onde o número dentro dos() determina quantos colchetes serão eliminados...sem nada são 2, com 2 serão 3 colchetes eliminados e assim por diante.... com (Infinity) todos os colchetes serão eliminados.
let arr = [1, 2, [3, 4, [20, 30,[40]]], [5, 6]];
let arrFlat = arr.flat(Infinity);
console.log(arrFlat);