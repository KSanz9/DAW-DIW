//posición inicial muñeco

var mapa = new Array(14);
for (let i = 0; i < mapa.length; i++) {
    mapa[i] = new Array(21);
}

function matrizMapa() {




    for (let i = 0; i < mapa.length; i++) {
        for (let j = 0; j < mapa[i].length; j++) {

            var newDiv = document.createElement("div");

            if (i == 0 && j != 8) {
                newDiv.classList.add("inicio");

            }

            if (i == 1 || j == 0 || i == 5 || j == 4 || i == 9 || j == 8 || i == 13 || j == 12 || i == 17 || j == 16 || i == 21 || j == 20) {
                console.log("se");
                newDiv.classList.add("camino");

            } else {

                newDiv.classList.add("muro");

            }
            document.getElementById("mapa").appendChild(newDiv);
            mapa[i][j] = newDiv;
        }

    }

    console.table(mapa);
}

function cargarPersonaje() {
    //Random del enemigo
    var XRandom = Math.floor(Math.random() * 14) + 1;
    var YRandom = Math.floor(Math.random() * 21);
    //Inicio del personaje
    var horizontal = 0;
    var vertical = 8;

    mapa[horizontal][vertical].classList.add("jugador");
    //while (mapa[XRandom][YRandom] != document.getElementByClassName("muro")) {
    mapa[XRandom][YRandom].classList.add("chtulu");
    //}


}

function moverPersonaje(evento) {
    if (evento.key == "ArrowDown") {
        MoverAbajo();
    }
    if (evento.key == "ArrowUp") {
        MoverArriba();
    }
    if (evento.key == "ArrowRigth") {
        MoverDerecha();
    }
    if (evento.key == "ArrowLefth") {
        MoverIzquierda();
    }
}

function MoverAbajo() {

}
window.onload = function() {

    matrizMapa();
    cargarPersonaje();
    moverPersonaje();
}