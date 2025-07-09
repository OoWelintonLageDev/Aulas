const pessoa = {
    nome: 'Welinton',
    idade: 40,
    profissao: 'Vigilante Patrimonial => Futuro programador FullStack',
};
console.log(pessoa);

const carro = {
    roda: 'Aro15',
    cor: '#00000',
    velocidade: 300,
    motor: 'v8',
    pecas: ['cambio', 'retrovisor', 'volante', 'bancos', {velocimetro: 375, painelMultimidia: 'Som'}

    ],
    //acelerar: () => 'O carro acelerou!'
    acelerar () {
        return 'O carro acelerou!'
    }
};
carro.modelos = 'Ferrari',
delete carro.roda,
console.log(carro.velocidade + 'km/h');
console.log(carro.modelos);
console.log(carro);
console.log(carro.acelerar());
console.log(carro.pecas[4].painelMultimidia);
console.log(carro.pecas[4].velocimetro);
carro.pecas.forEach(peca => console.log(peca));

for (key in carro) {
    console.log(`${key}: ${carro[key]}`);
}