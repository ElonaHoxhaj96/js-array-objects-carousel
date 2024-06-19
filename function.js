// for (let i = 0; i < 5; i++){
//     //funzione con numeri casuali
//     function numeroRandomico (){
//         numeroGenerico =  Math.floor( Math.random() * 100);
//         return numeroGenerico;
//     }
//     console.log(numeroRandomico(i));
// }
/// Funzione che genera un nn numero random 
function generaNumRand(min, max){
    let numGenerato = Math.floor(Math.random() * (max - min + 1) + min);
    return numGenerato;
}

// Funzione genera numeri random all'inrerno di un range prestabilito 
function randomicoDentroRage (min , max, nrLenght){
    const numeriArray = [];
    // creo un ciclo che mi generi i numeri in base a quanti ne ho bisogno 
    while(numeriArray.length < nrLenght){
        let funzGeneraRandom = generaNumRand(min, max);
        // se all'interno del mio array è present il numero generato non lo includo, altrimewnti lo pusho all'interno dell' array
        if(!numeriArray.includes(funzGeneraRandom));
        numeriArray.push(funzGeneraRandom);
    }
    return numeriArray
}

