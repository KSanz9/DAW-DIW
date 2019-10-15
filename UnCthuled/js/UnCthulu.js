var mapa = new Array(14);
for (let i = 0; i < mapa.length; i++) {
    mapa[i] = new Array(21);
}
//Inicio del personaje
var horizontal = 8;
var vertical = 0;

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


    mapa[vertical][horizontal].classList.add("jugador");
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
    if (evento.key == "ArrowRight") {
        MoverDerecha();
    }
    if (evento.key == "ArrowLeft") {
        MoverIzquierda();
    }
}

function MoverAbajo() {
    mapa[vertical][horizontal].classList.remove("jugador");
    mapa[vertical][horizontal].classList.remove("jugador_Derecha");
    mapa[vertical][horizontal].classList.remove("jugador_Izquierda");
    vertical++;
    mapa[vertical][horizontal].classList.add("jugador");
}

function MoverArriba() {
    mapa[vertical][horizontal].classList.remove("jugador");
    mapa[vertical][horizontal].classList.remove("jugador_Derecha");
    mapa[vertical][horizontal].classList.remove("jugador_Izquierda");
    vertical--;
    mapa[vertical][horizontal].classList.add("jugador");
}

function MoverDerecha() {
    mapa[vertical][horizontal].classList.remove("jugador");
    mapa[vertical][horizontal].classList.remove("jugador_Derecha");
    mapa[vertical][horizontal].classList.remove("jugador_Izquierda");

    horizontal++;
    mapa[vertical][horizontal].classList.add("jugador_Derecha");
}

function MoverIzquierda() {
    mapa[vertical][horizontal].classList.remove("jugador");
    mapa[vertical][horizontal].classList.remove("jugador_Derecha");
    mapa[vertical][horizontal].classList.remove("jugador_Izquierda");
    horizontal--;
    mapa[vertical][horizontal].classList.add("jugador_Izquierda");
}

window.onload = function() {

    matrizMapa();
    cargarPersonaje();
    document.addEventListener("keydown", moverPersonaje);
}