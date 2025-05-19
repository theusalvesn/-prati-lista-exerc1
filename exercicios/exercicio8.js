const prompt = require('prompt-sync')();

let a = parseInt(prompt("Digite o primeiro número: "));
let b = parseInt(prompt("Digite o segundo número: "));

if (a < b) {
    console.log(a, b);
} else {
    console.log(b, a);
}
