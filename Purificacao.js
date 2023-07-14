let valorFixo = "*Canis %lupus )familiaris";
let valorFixo1 = "$Ailuropoda@ melanoleuca!";
let valorFixo2 = "Felis) silvestris *catus&";

let valorSujo = ["!", "@", "#", "$", "%", "&", "*", "(", ")"]
let valorFixoSeparado = []
let valorSujofixo = "!@#$%&*()";
let resultado = "";


for (let variavel of valorFixo) {
    valorFixoSeparado.push(variavel);
}

console.log(valorFixoSeparado);

for (let i = 0; i < valorFixoSeparado.length; i++) {
    for (let j = 0; j < valorSujo.length; j++) {
        if (valorFixoSeparado[i] == valorSujo[j]) {

        } else { resultado = valorFixoSeparado[i] }
    }

}

console.log(valorFixo.replace("*", ""))
console.log(valorFixo.replace(valorSujo[8], ""))
console.log(valorFixo);

/*for (let i = 0; i < valorFixo.length; i++) {

    valorFixo = valorFixo.replace(valorSujo[i], "");

}*/

for (let variavel of valorSujo) {
    valorFixo = valorFixo.replace(variavel, "");
}
console.log(valorFixo);


/* Resultado Purificação

function solucao(stringCorrompida) {
    // seu codigo aqui
    let valorSujo = ["!", "@", "#", "$", "%", "&", "*", "(", ")"]
    
    for (let i = 0; i < stringCorrompida.length; i++) {

    stringCorrompida = stringCorrompida.replace(valorSujo[i], "");
    }
    console.log(stringCorrompida);



}*/

