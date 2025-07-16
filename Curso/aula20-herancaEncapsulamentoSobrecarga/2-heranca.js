class Veiculo {
  constructor(tipo, cor, velocidade) {
    this.tipo = tipo;
    this.cor = cor;
    this.velocidade = velocidade;
  }
  mostrarInfo() {
    console.log(
      `Este é um ${this.tipo}, de cor ${this.cor}, e sua velocidade máxima é de ${this.velocidade} km/h.`);
  }
}
class Carro extends Veiculo {
constructor(cor, modelo, velocidade) {
super("carro", cor, velocidade);
this.modelo = modelo;
}
mostrarInfo() {
console.log(`Este é um ${this.modelo}, de cor ${this.cor}, e
sua velocidade máxima é de ${this.velocidade} km/h.`);
}
}
const porsche = new Carro("vermelho", "Porsche 911 Turbo", 320);
const fiat = new Carro("azul", "Fiat 500", 160);
const ferrari = new Carro("amarelo", "Ferrari F450", 340);
porsche.mostrarInfo();
fiat.mostrarInfo()
ferrari.mostrarInfo();

class Aviao extends Veiculo {
constructor(cor, modelo, velocidade) {
super("avião", cor, velocidade);
this.modelo = modelo;
}
mostrarInfo() {
console.log(`Este é um ${this.modelo}, de cor ${this.cor}, e
sua velocidade máxima é de ${this.velocidade} km/h.`);
}
}
class Barco extends Veiculo {
constructor(cor, modelo, velocidade) {
super("barco", cor, velocidade);
this.modelo = modelo;
}
mostrarInfo() {
console.log(`Este é um ${this.modelo}, de cor ${this.cor}, e
sua velocidade máxima é de ${this.velocidade} km/h.`);
}
}
const boeing = new Aviao("branco", "Boeing 747", 900);
const iate = new Barco("branco", "Iate de Luxo", 50);
boeing.mostrarInfo();
iate.mostrarInfo();