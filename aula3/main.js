/*
Quantificadores:
  *  (Opcional) 0 ou mais vezes {0,}
  +  (Obrigatório) 1 ou mais vezes {1,}
  ?  (Opcional) 0 ou uma vez {0,1}
  \  Caractere de Escape
{n,m}  Mínimo e Máximo
 {n}  valor especifico
*/
const { texto, arquivos } = require('./texto');

const regex1 = /Lo+re+m/gi;
const valor1 = texto.match(regex1);
console.log(valor1);

const regex2 = /\.jpe?g/gi;
for (const arquivo of arquivos) {
  console.log(arquivo.match(regex2));
}
