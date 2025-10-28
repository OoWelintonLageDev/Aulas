// const  estrutura = document.getElementById('estrutura').textContent = 'Olá Mundo!';
// estrutura.textContent = 'Olá Mundo!';
// estrutura.style.fontWeight = 'bold';
// estrutura.style.fontSize = '24px';

const estrutura = document.querySelectorAll('.quadrado');
//estrutura.style.backgroundColor = 'aqua';
estrutura.forEach((el) => {
  //el.style.backgroundColor = 'Lightblue';
el.addEventListener('click', (event) => {;
el.style.width = parseInt(getComputedStyle(el).width) + 100 + 'px';
});

});