const prompt = require('prompt-sync')();

let soma = 0;
let count = 0;

while (true) {
    let num = parseFloat(prompt("Digite um número decimal (0 para sair): "));
    if (num === 0) break;
    soma += num;
    count++;
}

if (count > 0) {
    console.log(`Média: ${(soma / count).toFixed(2)}`);
} else {
    console.log("Nenhum número foi digitado.");
}
