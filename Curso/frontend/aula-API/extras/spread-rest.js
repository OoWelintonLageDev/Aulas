const numeros = [1, 2, 3, 4, 5];

const [n1, n2, n3, n4, n5] = numeros;
console.log(n1, n2, n3, n4, n5);

const [a1, ...a2] = numeros;
console.log(a1);

const numeros2 = [...numeros, 7, 8, 9, 10];
console.log(numeros2);