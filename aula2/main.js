// | = Ou - Pode ser usado tanto em grupos quanto fora deles
const texto = require('./texto');

const regex = /Lorem|Ipsum/gi;

console.log(texto.match(regex));
console.log();
console.log(texto.replace(/(Lorem|Ipsum)/gi, '|$1|'));
console.log();
console.log(texto.replace(/(Lorem|Ipsum)/gi, (input) => input.toUpperCase()));
