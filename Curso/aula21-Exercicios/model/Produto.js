class JornalEsportivo {
    constructor(nome, manchete, numPaginas) {
        this._nome = nome;
        this._manchete = manchete;
        this._numPaginas = numPaginas > 0 ? numPaginas : 1;
    };

get manchete () {
    return this._manchete
};

set manchete(novaManchete) {
        if (novaManchete && novaManchete.length > 0) {
            this._manchete = novaManchete;
        } else {
            console.log("Manchete inválida!");
        }
    };

    mostrarDetalhes() {
        console.log(`Jornal: ${this._nome}\nManchete: ${this._manchete}\nPáginas: ${this._numPaginas}`);
    }
}
