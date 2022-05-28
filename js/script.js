const containerGriglia = document.getElementById("container-griglia");

/* function generateRandomNumbers(min, max){
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
} */

//funzione che genera un aray di numeri da 1 a 100 
//in ordine crescente senza doppioni
function generateOrdinatedNumbers(){ 
    const max = 100; 
    const random = []; 
    for(let i = 0;i<max ; i++){ 
        const calc = Math.floor(Math.random()*max)+1; 
        if(random.indexOf(calc) == -1){ 
            random.push(calc); 
        } else i--;
        random.sort(function(a, b){return a-b});
    }  
    return random;
}


function creaCella (xCella, yCella){
    const numeroCelle = xCella * yCella;
    containerGriglia.style.width = `calc(var(--cell-size) * ${xCella})`;

    for (let i = 0; i < numeroCelle; i++){
        const numeriCella = generateOrdinatedNumbers();
        
        const cella = document.createElement("div");

        cella.classList.add("cella");
        //cella.append(numeroRandom.toString());
        //cella.innerHTML = `<span>${numeri}</span>`

        //cerco di aggiungere ad ogni cella,
        //ogni singolo numero dell'array
        //creato nella funzione generateOrdinatedNumbers
        for (let i = 0; i<numeriCella.length; i++){
            cella.innerHTML = numeriCella[i];
        }

        containerGriglia.append(cella);        
    }
}

creaCella(10, 10)



