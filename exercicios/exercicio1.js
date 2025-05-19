const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Digite um número: '));

const resultado = numero % 2 === 0 ? 'par' : 'ímpar';

console.log(`O número ${numero} é ${resultado}.`);

