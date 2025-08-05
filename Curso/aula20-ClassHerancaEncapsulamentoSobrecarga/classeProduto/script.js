import Produto from "./models/Produto.js";
const listaProdutos = [];
function adicionarProduto() {
  const nome = prompt("Digite o nome do produto:");
  const preco = parseFloat(prompt("Digite o preço do produto:"));
  const quantidade = parseInt(prompt("Digite a quantidade do produto:")) - 1;

  if (nome && !isNaN(preco) && !isNaN(quantidade)) {
    const produto = new Produto(nome, preco, quantidade);
    listaProdutos.push(produto);
    alert("Produto adicionado com sucesso");
  } else {
    alert("Por favor, preencha todos os campos corretamente");
  }
}

/*function listarProdutos() {
  if (listaProdutos.length === 0) {
    alert("Nenhum produto cadastrado");
    return;
  }
  let mensagem = "Lista de produtos:\n";
  listaProdutos.forEach((produto, index) => {
    mensagem += `${index + 1}. ${produto.exibirInfo()}\n`;
  });
  alert(mensagem);
}*/

function listarProdutos() {
  document.open();
  if (listaProdutos.length === 0) {
    document.write("Nenhum produto cadastrado<br>");
    document.close();
    return;
  }
  document.write("Lista de produto:<br>");
  listaProdutos.forEach((produto, index) => {
    document.write(`${index + 1}. ${produto.exibirInfo()}<br>`);
    console.log(`${index + 1}. ${produto.exibirInfo()}<br>`);
  });
  document.close();
}

function editarQuantidade() {
  const index = parseInt(
    prompt("Digite o número do produto para editar a quantidade")
  );
  if (index >= 0 && index < listaProdutos.length) {
    const novaQuantidade = parseInt(prompt("Digite a nova quantidade:"));

    if (!isNaN(novaQuantidade)) {
      listaProdutos[index].atualizarQuantidade(novaQuantidade);
      alert("Quantidade atualizada com sucesso!");
    } else {
      alert("Quantidade inválida.");
    }
  } else {
    alert("Produto não encontrado");
  }
}

function deletarProduto() {
  const index =
    parseInt(prompt("Digite o número do produto para deletar:")) - 1;
  if (index >= 0 && index < listaProdutos.length) {
    const produtoRemovido = listaProdutos.splice(index, 1)[0];
    alert(`Produto '${produtoRemovido.nome}'deletado com sucesso!`);
  } else {
    alert("Produto não encontrado.");
  }
}

function menu() {
  while (true) {
    const opcao = prompt(
      "Escolha uma opção:\n1. Adcionar produto\n2. Listar produtos\n3. Editar quantidade\n4. Deletar produto\n5. Sair"
    );
    if (opcao === null) {
      alert('Operação cancelada.')
    };

    switch (opcao) {
      case "1":
        adicionarProduto();
        break;
      case "2":
        listarProdutos();
        break;
      case "3":
        editarQuantidade();
        break;
      case "4":
        deletarProduto();
        break;
      case "5":
        alert("Saindo...");
        return
        //break;

      default:
        alert("Opção Inválida.");
        break;
    }
  }
}

menu();
