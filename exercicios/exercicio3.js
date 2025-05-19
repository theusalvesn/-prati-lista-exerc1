const prompt = require('prompt-sync')();

const nota = parseFloat(prompt('Digite a nota: '));

let resultado;

if (nota > 10 || nota < 0) {
    resultado = 'Nota inválida';
}

else if ( nota > 7) {
    resultado = 'Aprovado';
} else if (nota >=4 ){
    resultado = 'Recuperação';
}
else {
    resultado = 'Reprovado';
}

console.log(`Resultado: ${resultado}`);