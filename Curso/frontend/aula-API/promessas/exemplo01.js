const p = new Promise (resolverPromessa => {
  resolverPromessa([
    {
      id: 1, 
     nome: 'Welinton',
     idade: 40
    },
    {
      id: 2, 
     nome: 'Adriana',
     idade: 25
    },
    {
      id: 3, 
     nome: 'Leonardo',
     idade: 15
    },
  ]);
});

p.then(JSON.stringify)
  .then(JSON.parse)
    .then(valor => valor.forEach(el => {
      console.log(el.nome, el.idade);
    }));