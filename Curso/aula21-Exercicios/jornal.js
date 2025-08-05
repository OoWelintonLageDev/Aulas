// Classe JornalEsportivo representa um jornal esportivo com nome, manchete e número de páginas.
class JornalEsportivo {
    constructor(nome, manchete, numPaginas) {
        this._nome = nome;
        this._manchete = manchete;
        this._numPaginas = numPaginas > 0 ? numPaginas : 1;
    }

    // Getter para manchete
    get manchete() {
        return this._manchete;
    }

    // Setter para manchete
    set manchete(novaManchete) {
        if (novaManchete && novaManchete.length > 0) {
            this._manchete = novaManchete;
        } else {
            console.log("Manchete inválida!");
        }
    }

    // Método para mostrar detalhes do jornal
    mostrarDetalhes() {
        console.log(`Jornal: ${this._nome}\nManchete: ${this._manchete}\nPáginas: ${this._numPaginas}`);
    }

    // Método personalizado para atualizar a manchete do jornal
    atualizarManchete(novaManchete) {
        this.manchete = novaManchete;
        console.log(`Manchete atualizada para: "${this._manchete}"`);
    }
}

// Testando a classe JornalEsportivo
const jornal1 = new JornalEsportivo(
    "Esporte Total",
    "Cristiano Ronaldo é anunciado como novo jogador do Botafogo!",
    24
);
const jornal2 = new JornalEsportivo(
    "Futebol News",
    "Craque marca três gols!",
    16
);

jornal1.mostrarDetalhes();
jornal1.atualizarManchete("Cristiano Ronaldo faz estreia brilhante pelo Botafogo!");
jornal1.mostrarDetalhes();

jornal2.mostrarDetalhes();
jornal2.atualizarManchete(""); // Testando validação
jornal2.atualizarManchete("Final emocionante no estádio!");
jornal2.mostrarDetalhes();