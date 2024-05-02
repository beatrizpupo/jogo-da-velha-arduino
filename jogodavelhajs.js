function main() {
    // Criar o tabuleiro e os jogadores, zerar as variaveis
    // 
    // 0: Posição vazia
    // 1: jogada Posição do jogador 1
    // 2: jogada Posição do jogador 2
    var resultadovalidaTabuleiro;
    var velha;
    var haVencedor;

    haVencedor = false;
    var tabuleiro = createArray(9);
    var linha;
    var coluna;
    var jogada;

    // Limpara/Zerar o tabuleiro
    var iNDEX;

    for (iNDEX = 0; iNDEX <= 8; iNDEX++) {
        tabuleiro[iNDEX] = 0;
    }
    var jogadorDaVez;

    jogadorDaVez = 1;
    velha = 1;

    // Iniciar o jogo, definir quem joga primeiro
    // Anotar/Registrar a jogada, do primeiro jogador
    do {
        console.log(tabuleiro[0].ToString() + tabuleiro[1] + tabuleiro[2]);
        console.log(tabuleiro[3].ToString() + tabuleiro[4] + tabuleiro[5]);
        console.log(tabuleiro[6].ToString() + tabuleiro[7] + tabuleiro[8]);
        jogada = "";
        console.log("Digite a posição da sua peça JOGADOR" + jogadorDaVez);
        jogada = window.prompt('Enter a value for jogada');

        // Simula a função Serial.parseltn()do Arduino
        linha = parseInt(jogada.charAt(0));
        coluna = parseInt(jogada.charAt(2));
        console.log("Linha: " + linha + "; Coluna: " + coluna);

        // Verificae se a posição "jogada" é válida
        // Converter a jogada texto em dois inteiros linha e coluna
        if (tabuleiro[3 * linha + coluna] == 0) {
            tabuleiro[3 * linha + coluna] = jogadorDaVez;
            if (resultadovalidoTabuleiro != 2) {
                resultadovalidaTabuleiro = validaTabuleiro(tabuleiro, jogadorDaVez);
                if (jogadorDaVez == 1) {
                    jogadorDaVez = 2;
                } else {
                    jogadorDaVez = 1;
                }
            }
            velha = velha + 1;
        } else {
            console.log("Posição ocupada, jogue novamente!!!");

            // Informar ao Jogador 1 que a posição está preenchida, é inválida e ela precisa informar um posição válida
        }

        // Verificar o tabuleiro, se houve ganhador ou empate, finalizar o jogo
        // Verificar a jogada nas linhas
        // Verificar a jogada vencedora nas colunas
        // Verificar a jogada vencedora nas diagonais
        // Anotar e registrar a jogada do segundo jogador
        // Verificar o tabuleiro, se houve ganhador ou empate, finalizar o jogo
    } while (!haVencedor && velha < 9);
    validaTabaleiro();
}

function válidaPosicao(entrada) {
    var entradaValida;

    entradaValida = false;
    if (entrada.length() == 3) {
        if (entrada.charAt(0) == "0" || entrada.charAt(0) == "1" || entrada.charAt(0) == "2") {
            if (entrada.charAt(2) == "0" || entrada.charAt(2) == "1" || entrada.charAt(2) == "2") {
                entradaValida = true;
            }
        }
    }
    
    return entradaValida;
}

function validaTabuleiro(tabuleiro, jogadorDaVez) {
    var retorno;
    var jogadorDaVez;

    if (tabuleiro[0] == jogadorDaVez && tabuleiro[1] == jogadorDaVez && tabuleiro[2] == jogadorDaVez || tabuleiro[3] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[5] == jogadorDaVez || tabuleiro[6] == jogadorDaVez && tabuleiro[7] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) {
        retorno = 2;
    } else {
        if (tabuleiro[0] == jogadorDaVez && tabuleiro[3] == jogadorDaVez && tabuleiro[6] == jogadorDaVez || tabuleiro[1] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[7] == jogadorDaVez || tabuleiro[2] == jogadorDaVez && tabuleiro[5] == jogadorDaVez && tabuleiro[8] == jogadorDaVez) {
            retorno = 2;
        } else {
            if (tabuleiro[0] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[8] == jogadorDaVez || tabuleiro[2] == jogadorDaVez && tabuleiro[4] == jogadorDaVez && tabuleiro[6] == jogadorDaVez) {
                retorno = 2;
                console.log("VOCE GANHOU");
            }
        }
    }
    
    return retorno;
}
