let numerosInteiros = [100, 100, 100, 50];
let numerosOrdemCrescente = [];

if (numerosInteiros.length >= 5) {
    let menor = numerosInteiros[0];
    let soma = 0;

    for (let somaGeral of numerosInteiros) {
        soma += somaGeral;
    }

    for (let i = 0; i < numerosInteiros.length; i++) {
        if (numerosInteiros[i] < menor) {
            menor = numerosInteiros[i];
            console.log(menor)
        }
    }
    console.log(`O Total será: ${soma - menor}`)

} else {
    let soma = 0;
    for (let somaAll of numerosInteiros) {
        soma += somaAll;
    }
    console.log(soma);
}

//Enviado ao Hackerrank

/*

function solucao(precos) {
    //seu codigo aqui
    
    
if (precos.length >= 5) {
    let menor = precos[0];
    let soma = 0;

    for (let somaGeral of precos) {
        soma += somaGeral;
    }

    for (let i = 0; i < precos.length; i++) {
        if (precos[i] < menor) {
            menor = precos[i];
        }
    }
    console.log(soma - menor)

} else {
    let soma = 0;
    for (let somaAll of precos) {
        soma += somaAll;
    }
    console.log(soma);
}
    
}

*/
