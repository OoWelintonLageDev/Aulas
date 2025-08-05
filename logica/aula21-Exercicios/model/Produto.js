class NoticiaEsportiva {
    constructor(titulo, esporte, conteudo) {
        this.titulo = titulo;
        this.esporte = esporte;
        this.conteudo = conteudo;
    }

    exibirInfo() {
        return `Título: ${this.titulo} | Esporte: ${this.esporte} | Conteúdo: ${this.conteudo}`;
    }

    atualizarConteudo(novoConteudo) {
        this.conteudo = novoConteudo;
    }
}

const listaNoticias = [];

function adicionarNoticia() {
    const titulo = prompt("Digite o título da notícia:");
    const esporte = prompt("Digite o esporte relacionado:");
    const conteudo = prompt("Digite o conteúdo da notícia:");

    if (titulo && esporte && conteudo) {
        const noticia = new NoticiaEsportiva(titulo, esporte, conteudo);
        listaNoticias.push(noticia);
        alert("Notícia adicionada com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
}

function listarNoticias() {
    document.open();
    if (listaNoticias.length === 0) {
        document.write("Nenhuma notícia cadastrada.<br>");
        document.close();
        return;
    }
    document.write("Lista de notícias esportivas:<br>");
    listaNoticias.forEach((noticia, index) => {
        document.write(`${index + 1}. ${noticia.exibirInfo()}<br>`);
        console.log(`${index + 1}. ${noticia.exibirInfo()}`);
    });
    document.close();
}

function editarConteudoNoticia() {
    const index = parseInt(prompt("Digite o número da notícia para editar o conteúdo:")) - 1;
    if (index >= 0 && index < listaNoticias.length) {
        const novoConteudo = prompt("Digite o novo conteúdo da notícia:");
        if (novoConteudo) {
            listaNoticias[index].atualizarConteudo(novoConteudo);
            alert("Conteúdo atualizado com sucesso!");
        } else {
            alert("Conteúdo inválido.");
        }
    } else {
        alert("Notícia não encontrada.");
    }
}

function deletarNoticia() {
    const index = parseInt(prompt("Digite o número da notícia para deletar:")) - 1;
    if (index >= 0 && index < listaNoticias.length) {
        const noticiaRemovida = listaNoticias.splice(index, 1)[0];
        alert(`Notícia '${noticiaRemovida.titulo}' deletada com sucesso!`);
    } else {
        alert("Notícia não encontrada.");
    }
}

function menu() {
    while (true) {
        const opcao = prompt(
            "Escolha uma opção:\n1. Adicionar notícia\n2. Listar notícias\n3. Editar conteúdo da notícia\n4. Deletar notícia\n5. Sair"
        );
        if (opcao === null) {
            alert('Operação cancelada.');
            return;
        }

        switch (opcao) {
            case "1":
                adicionarNoticia();
                break;
            case "2":
                listarNoticias();
                break;
            case "3":
                editarConteudoNoticia();
                break;
            case "4":
                deletarNoticia();
                break;
            case "5":
                alert("Saindo...");
                return;
            default:
                alert("Opção Inválida.");
                break;
        }
    }
}

menu();