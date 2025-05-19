
const prompt = require('prompt-sync')();
function calcularIMC(peso, altura) {

    const imc = peso / (altura * altura);

    let categoria;

    if (imc < 18.5) {
        categoria = "Baixo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade";
    }

    return { imc: imc.toFixed(2), categoria };
}

const peso = parseFloat(prompt("Digite seu peso em kg: "));
const altura = parseFloat(prompt("Digite sua altura em metros: "));

const resultado = calcularIMC(peso, altura);
console.log(`Seu IMC é ${resultado.imc} e você está na categoria: ${resultado.categoria}`);