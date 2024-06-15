const readline = require('readline');

// Cria a interface para ler a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para ler a entrada do usuário
function lerEntrada(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

// Função para determinar o ranking do jogador com base no número de vitórias
function rankingPlayer(vitorias, derrotas) {
    let ranking;

    if (vitorias <= 10) { ranking = "Ferro"; } 
    else if (vitorias <= 20) { ranking = "Bronze"; }
    else if (vitorias <= 50) { ranking = "Prata"; }
    else if (vitorias <= 80) { ranking = "Ouro"; }
    else if (vitorias <= 90) { ranking = "Diamante"; }
    else if (vitorias <= 100) { ranking = "Lendário"; }
    else { ranking = "Imortal"; }

    console.log("O Herói tem de saldo " + (vitorias - derrotas) + " e está no nível de " + ranking);
}

// Função para inserir e verificar se a entrada é um número válido
async function inserirVerificarNumero(pergunta) {
    let numero;
    while (true) {
        const input = await lerEntrada("Digite a quantidade de " + pergunta + " do herói: ");
        numero = parseInt(input);

        if (!isNaN(numero)) {
            return numero; // Retorna o número se for válido
        } else {
            console.log("Por favor, digite um valor numérico válido para a quantidade de " + pergunta + ".");
        }
    }
}

// Função principal para executar o programa
async function main() {
    // Lê o número de vitórias
    const vitorias = await inserirVerificarNumero("vitória(s)");

    // Lê o número de derrotas
    const derrotas = await inserirVerificarNumero("derrota(s)");

    // Chama a função rankingPlayer para determinar o ranking do herói
    rankingPlayer(vitorias, derrotas);

    // Fecha a interface de leitura
    rl.close();
}

// Executa a função principal
main();
