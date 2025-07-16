class Veiculo {
  constructor(tipo, cor, velocidade) {
    this.tipo = tipo;
    this.cor = cor;
    this.velocidade = velocidade;
  }
  mostrarinfo() {
    console.log(
      `Este é um ${this.tipo}, de cor ${this.cor},
      e sua velocidade maxima é de ${this.velocidade} km/h.`
    );
  }
}
class Carro extends Veiculo {
  constructor(cor, modelo, velocidade) {
    super("carro", cor, velocidade);
    this._modelo = modelo;
  }

  get modelo() {
    return this._modelo;
  }

  set modelo(novoModelo) {
    this._modelo = novoModelo;
  }

  mostrarinfo() {
    console.log(
      `Este é um ${this.modelo}, de cor ${this.cor},
      e sua velocidade maxima é de ${this.velocidade} km/h.`
    );
  }
  acelerar(velocidadeExtra = 10) {
    this.velocidade += velocidadeExtra;
    console.log(
      `O ${this.modelo} acelerou. Nova velocidade: ${this.velocidade} km/h.`
    );
  }
}

const barco = new Veiculo("Barco", "Branca", 80);
barco.mostrarinfo();

const porsche = new Carro("Vermelho", "Porshe 911 Turbo", 320);
porsche.modelo = "GTS";
console.log(porsche.modelo);
const fiat = new Carro("Azul", "Fiat 500", 160);
const ferrari = new Carro("Amarelo", "Ferrari F450", 340);

ferrari.acelerar(35);
porsche.mostrarinfo();
fiat.mostrarinfo();
ferrari.mostrarinfo();
