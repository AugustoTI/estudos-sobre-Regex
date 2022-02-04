const texto = require('./texto');

// test = Testa sua Regex
// exex = Te retorna um "Array/Objeto" com infomrações como: os Grupos, o Index, o Dado de entrada (Input) e a Regex

// g = global - Vai fazer uma varredura total no texto encontrando todos os casos da regex
// i = insensitive - Vai fazer a verificação do texto independente se tem letra maiuscula ou minuscula
// () = groups - Separa o conteudo em grupos

const regex = /(Ipsum) (is simply)/gi;
const found = regex.test(texto);

console.log(found);

if (found) {
  console.log('Texto encotrando');
} else {
  console.log('Texto não encontrado');
}
