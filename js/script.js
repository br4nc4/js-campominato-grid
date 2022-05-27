const containerGriglia = document.getElementById("container-griglia");

function creaCella (xCella, yCella){
    const numeroCelle = xCella * yCella;
    containerGriglia.style.width = `calc(var(--cell-size) * ${xCella})`;

    for (let i = 0; i < numeroCelle; i++){
        const cella = document.createElement("div");
        cella.classList.add("cella");
        containerGriglia.append(cella);
    }
}

creaCella(10, 10)