function obterDadosDoServidor(id) {
  fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
  .then(resposta => resposta.json())
  .then(dados => {
    console.log('Nome Pokémon:', dados.name.toUpperCase());
});
}

obterDadosDoServidor(150)