//Enviado ao HackerRank


let precos = [30, 10, 54, 76, 1, 4, 35];
let valor1 = 0, valor2 = 0, valor3 = []
let anoCompra = []
let valores = []

for (let i = 0; i < precos.length; i++) {
    {
        for (let j = i + 1; j < precos.length; j++) {

            if (precos[i] < precos[j]) {

            } else if (precos[i] == precos[j]) {

            } else if (precos[i] > precos[j]) {

                valor3[i] = precos[i] - precos[j]
                anoCompra.push(precos[i]);
                anoCompra.push(precos[j]);
                valores.push(precos[i] - precos[j]);
            }
        }
    }
}

let menor = valor3[0];
for (let i = 0; i < valor3.length; i++) {
    if (valor3[i] < menor) {
        menor = valor3[i];
    }
}

console.log(menor)

console.log(valor3)