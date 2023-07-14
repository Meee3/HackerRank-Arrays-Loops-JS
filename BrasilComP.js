let primeiraLetra = "a";
let segundaLetra = "sv";
primeiraLetra = primeiraLetra.toLowerCase();
segundaLetra = segundaLetra.toLowerCase();
let palavras = ["aveia", "manha", "ave"];
let resultado = []

for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].charAt(0) == primeiraLetra && palavras[i].charAt(1) == segundaLetra) {
        resultado.push(palavras[i])
    }
}

console.log(resultado.length)
if (resultado.length === 0) {
    console.log("vazio")
} else {
    console.log("não")
}


console.log(resultado);


//Enviado ao Hackerrank

/*

function solucao(primeiraLetra, segundaLetra, palavras) {
    //seu codigo aqui

    primeiraLetra = primeiraLetra.toLowerCase();
    segundaLetra = segundaLetra.toLowerCase();
    //let palavras = ["aveia", "manha", "ave"];
    let resultado = []

    for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].charAt(0) == primeiraLetra && palavras[i].charAt(1) == segundaLetra) {
        resultado.push(palavras[i])
        console.log(palavras[i])
    }
}
    
    if(resultado.length === 0){
         console.log("NENHUMA");
    }
    
}

*/