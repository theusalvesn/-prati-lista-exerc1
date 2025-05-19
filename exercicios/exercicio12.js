const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número para ver sua tabuada: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
