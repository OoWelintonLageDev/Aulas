// const  estrutura = document.getElementById('estrutura').textContent = 'Olá Mundo!';
// estrutura.textContent = 'Olá Mundo!';
// estrutura.style.fontWeight = 'bold';
// estrutura.style.fontSize = '24px';

// const estrutura = document.querySelectorAll('.quadrado');
// //estrutura.style.backgroundColor = 'aqua';
// estrutura.forEach((el) => {
//   //el.style.backgroundColor = 'Lightblue';
// el.addEventListener('click', (event) => {;
// el.style.width = parseInt(getComputedStyle(el).width) + 100 + 'px';
// });

// });

const quadrado = document.getElementById("estrutura");

if (!quadrado) {
  alert("Elemento não encontrado!");
} else {
  const estiloInicial = getComputedStyle(quadrado);
  const larguraOriginal = estiloInicial.width;
  const corOriginal = estiloInicial.backgroundColor;
  const htmlOriginal = quadrado.innerHTML;
  quadrado.style.transition = "all 1s";

  let revertTimeout = null;
  quadrado.addEventListener("mouseenter", () => {
    if (revertTimeout) {
      clearTimeout(revertTimeout);
      revertTimeout = null;
    }
    quadrado.style.width = "300px";
    quadrado.style.backgroundColor = "#00ff1eff";
    quadrado.innerHTML = '<h2>Modificado</h2>';
  });
  quadrado.addEventListener("mouseleave", () => {
    if (revertTimeout) {
      clearTimeout(revertTimeout);
    }    

    revertTimeout = setTimeout(() => {
      quadrado.style.width = larguraOriginal;
      quadrado.style.backgroundColor = corOriginal;
      // quadrado.innerHTML = '';
      quadrado.innerHTML = htmlOriginal;
      revertTimeout = null;
    }, 1000);
  });
}
