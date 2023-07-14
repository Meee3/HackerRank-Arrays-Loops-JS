let letra = "m";
let palavras = [
    "mamao",
    "maca",
    "melao",
    "melancia",
    "laranja"
]
// Resultado abecedário
let resultado = 0;
letra = letra.toLowerCase();
console.log(letra === palavras[0].charAt(0))

for (let variavel of palavras) {
    if (variavel.charAt(0) != letra) {
        resultado++
    }
}

console.log(resultado);
