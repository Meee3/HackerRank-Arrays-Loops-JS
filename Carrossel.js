//Enviado ao HackerRank
let entrada = ">>><>>>>";
const indice = [0, 1, 2, 3, 4, 5, 6];
let andaDireita = 0, andaEsquerda = 0;

let posicao = 0
for (let variavel of entrada) {
    if (variavel == ">") {
        andaDireita++;
        posicao++
    }
    if (variavel == "<") {
        andaEsquerda++;
        posicao--;
    }

    if (posicao > 6) {
        posicao = 0;
    } else if (posicao < 0) {
        posicao = 6;
    }

}

console.log(posicao)
