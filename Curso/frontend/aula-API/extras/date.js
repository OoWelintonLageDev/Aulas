const agora = new Date().getMonth() + 1;
const hoje = new Date();
const mesPorExtenso = hoje.toLocaleString(`pt-BR`, {month: 'long'});
const diaDaSemana = hoje.toLocaleString(`pt-BR`, {weekday: 'long'});

console.log(`Mês por extenso: ${mesPorExtenso}`);
console.log(`Mês atual: ${agora}`);
console.log(`Dia da semana por extenso: ${diaDaSemana}`);
console.log(hoje.getHours());
console.log(hoje.getMinutes());
console.log(hoje.getSeconds());
console.log(hoje.getDate());
console.log(hoje.getFullYear());

