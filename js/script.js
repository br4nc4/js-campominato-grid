const containerGriglia = document.getElementById("container-griglia");

//funzione che genera un aray di numeri da 1 a 100 
//in ordine crescente senza doppioni
//NON HO TOVATO IL MODO DI AGGIUNGERE I NUMERI ALLE CELLE
//CON QUESTA FUNZIONE.
/* function generateOrdinatedNumbers(){ 
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
} */


function creaCella (xCella, yCella){
    const numeroCelle = xCella * yCella;
    containerGriglia.style.width = `calc(var(--cell-size) * ${xCella})`;

    for (let i = 1; i < numeroCelle + 1; i++){
        
        const cella = document.createElement("div");

        cella.classList.add("cella");
        
        cella.innerText = `${i}`

        containerGriglia.append(cella);        
    }
}

creaCella(10, 10)



