//encontrar a maior nota e a menor
//somar o resto e dividir elas.

let notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

//Enviado ao HackerRank
let menor = notas[0];
let maior = notas[0];
let media = 0;

//encontrar o maior e o menor
for (let i = 0; i < notas.length; i++) {
    if (notas[i] < menor) {
        menor = notas[i];
    }
    if (notas[i] > maior) {
        maior = notas[i];
    }

}

for (let variavel of notas) {
    media += variavel;
}

media = (media - menor - maior) / (notas.length - 2);
console.log(menor);
console.log(maior);
console.log(media);

