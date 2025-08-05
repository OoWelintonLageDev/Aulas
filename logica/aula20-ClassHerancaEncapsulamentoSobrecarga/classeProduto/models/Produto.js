class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
  calcularTotal() {
    return this.preco * this.quantidade;
  }
  exibirInfo() {
    return `${this.nome} - Preço: R$${this.preco.toFixed(2)} - Quantidade: ${
      this.quantidade
    } - Total: R$${this.calcularTotal().toFixed(2)}`;
  }
  atualizarQuantidade(novaQuantidade) {
    if (novaQuantidade >= 0) {
      this.quantidade = novaQuantidade;
      return true;
    }
    return false;
  }
}
export default Produto;