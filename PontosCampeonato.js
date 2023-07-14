let resultados = ["V", "E", "V", "E"];
let placarFinal = [0, 0];

//Enviado HackerRank

let resultadoVitoria = 0;
let resultadoEmpate = 0;
let resultadoFinal = 0;

for (let variavel of resultados) {
    variavel = variavel.toLowerCase();
    if (variavel == "v") {
        resultadoVitoria++;
    } else if (variavel == "e") {
        resultadoEmpate++
    } else { }
}

resultadoFinal = resultadoVitoria * 3 + resultadoEmpate;
console.log(resultadoFinal);
