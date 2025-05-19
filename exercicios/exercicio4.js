const prompt = require('prompt-sync')();

console.log("Menu:");
console.log("====================")
console.log("1. Flamengo");
console.log("2. Grêmio");
console.log("3. Corinthians");

const escolha = prompt("Escolha um time (1-3): ");

switch (escolha) {
    case '1':
        console.log("Você escolheu o Flamengo.");
        break;
    case '2':
        console.log("Você escolheu o Grêmio.");
        break;
    case '3':
        console.log("Você escolheu o Corinthians.");
        break;
    default:
        console.log("Opção inválida. Por favor, escolha entre 1 e 3.");
}