const containerGriglia = document.getElementById("container-griglia");

function generateRandomNumbers(min, max){
    //controlli sugli argomenti che ricevo
    if (min === undefined || min === null || min < 0) {
        // min = 0;
        return; // vuoto senza niente
    }

    if (max === undefined || max < min + 1) {
        max = min + 1;
        // return; // vuoto senza niente
    }

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

/* function generateUniqueRandomNumbers(min, max, listaNumeriGiaGenerati){
    let numeroRandom;

    do{
        numeroRandom = generateRandomNumbers(min, max);
    } while (listaNumeriGiaGenerati.incluedes(numeroRandom));

    return numeroRandom;
} */

function creaCella (xCella, yCella){
    const numeroCelle = xCella * yCella;
    containerGriglia.style.width = `calc(var(--cell-size) * ${xCella})`;
    //const numeriGenerati =[];

    for (let i = 0; i < numeroCelle; i++){
        const numeroRandom = generateRandomNumbers(1, 100);
        //numeriGenerati.push(numeroRandom);

        const cella = document.createElement("div");

        cella.classList.add("cella");
        //cella.append(numeroRandom.toString());
        cella.innerHTML = `<span>${numeroRandom}</span>`

        containerGriglia.append(cella);        
    }
}

creaCella(10, 10)