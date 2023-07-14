let array = [0, 50, 90, 80, 100, 80, 40]
let contador = 0;
for (let variavel of array) {
    if (variavel > 70) {
        contador++;
    }
}

if (contador >= 3) {
    console.log(contador);
} else {
    console.log("ELIMINADO");
}


//Enviado ao HackerRank
/*
function solucao(disparos) {
    //seu codigo aqui
    
    let contador = 0;
for (let variavel of disparos) {
    if (variavel > 70) {
        contador++;
    }
}

if (contador >= 3) {
    console.log(contador);
} else {
    console.log("ELIMINADO");
}
    

}
*/