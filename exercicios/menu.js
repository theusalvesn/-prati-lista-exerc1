const prompt = require('prompt-sync')();
const { execSync } = require('child_process');

while (true) {
    console.log("\n===== MENU DE EXERCÍCIOS =====");
    console.log('\n=== MENU DE OPÇÕES ===');
    console.log('1. Verificar se um número é par ou ímpar');
    console.log('2. Classificar idade');
    console.log('3. Avaliar nota (Aprovado, Recuperação, Reprovado)');
    console.log('4. Calcular IMC');
    console.log('5. Sair');
    console.log("6. Verificar tipo de triângulo");
    console.log("7. Valor total das maçãs");
    console.log("8. Ordem crescente de dois números");
    console.log("9. Contagem regressiva");
    console.log("10. Repetir número 10 vezes");
    console.log("11. Soma de 5 números");
    console.log("12. Tabuada de um número");
    console.log("13. Média de números até 0");
    console.log("14. Fatorial de um número");
    console.log("15. Sequência de Fibonacci");
    console.log("0. Sair");

    const opcao = prompt("Escolha uma opção: ");

    if (opcao === '0') {
        console.log("Encerrando o programa...");
        break;
    }

    try {
        execSync(`node exercicio${opcao}.js`, { stdio: 'inherit' });
    } catch (error) {
        console.log("Erro: opção inválida ou arquivo não encontrado.");
    }
}
