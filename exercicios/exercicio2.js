const prompt = require('prompt-sync')();

const idade = parseInt(prompt('Digite sua idade: '));

let classificacao;

if (idade < 0) {
    classificacao = 'Idade inválida';
} else if (idade >= 60) {
    classificacao = 'Idoso';
} else if (idade >= 18) {
    classificacao = 'Adulto';
} else if (idade >= 12) {
    classificacao = 'Adolescente';
} else {
    classificacao = 'Criança';
}

console.log(`Classificação: ${classificacao}`);