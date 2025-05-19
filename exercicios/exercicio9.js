const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número: "));

for (let i = 0; i < 10; i++) {
    console.log(numero);
}
