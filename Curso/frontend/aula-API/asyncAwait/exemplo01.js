function primeiraFuncao() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Esperou isso aqui");
      resolve();
    }, 1000);
  });
}

function primeiraFuncao02() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Esperou isso aqui tambem");
      resolve();
    }, 1000);
  });
}

async function segundaFuncao() {
  console.log("Iniciou a segunda funcao");
  await primeiraFuncao();
  await primeiraFuncao02();
  console.log("Terminou a segunda funcao");
  
}

segundaFuncao();

