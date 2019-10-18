var mapa = new Array(14);
for (let i = 0; i < mapa.length; i++) {
    mapa[i] = new Array(21);
}

//muros
var Pilar1 = new Array(4);
for (let i = 0; i < Pilar1.length; i++) {
    Pilar1[i] = new Array(5);

}
//
//Inicio del personaje
var X = 0;
var Y = 8;

var momiaX;
var momiaY;
function matrizMapa() {

    for (let i = 0; i < mapa.length; i++) {
        for (let j = 0; j < mapa[i].length; j++) {

            var newDiv = document.createElement("div");

            if (i == 0 && j != 8) {
                newDiv.classList.add("inicio");
            }

            if (i == 1 || j == 0 || i == 4 || j == 4 || i == 7 || j == 8 || i == 10 || j == 12 || i == 13 || j == 16 || i == 14 || j == 20) {
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
    mapa[X][Y].classList.add("jugador");
    var chtulhu = false;



    while (!chtulhu) {
        var XRandom = Math.floor(Math.random() * 13) + 1;
        var YRandom = Math.floor(Math.random() * 20);



        if (mapa[XRandom][YRandom].classList.contains("camino")) {
            mapa[XRandom][YRandom].classList.add("chtulu");
            momiaX = XRandom;
            momiaY = YRandom;
            chtulhu = true;
        }
    }
    //while (mapa[XRandom][YRandom] != document.getElementByClassName("muro")) {

    //}


}

function comprobarMuro() {
    rellenarPilar1();
    pintado1 = false;
        var contador1 = 0;
///////////////////////////////////////////////////////////////////////////////
        for (let index = 0; index < Pilar1.length; index++) {
            for (let jindex = 0; jindex < Pilar1[index].length; jindex++) {
                if (Pilar1[index][jindex].classList.contains("pisada")||Pilar1[index][jindex].classList.contains("pisada")|| Pilar1[index][jindex].classList.contains("pisada")||Pilar1[index][jindex].classList.contains("pisada")) {
                    contador1++;
                }
            }
        }
        if (contador1 == 13) {
            for (let index = 0; index < Pilar1.length; index++) {
                for (let jindex = 0; jindex < Pilar1[index].length; jindex++) {
                   if (Pilar1[index][jindex].classList.contains("muro")){
                    Pilar1[index][jindex].classList.add("pintado")
                    }
                }
            }              
        }
       
//////////////////////////////////////////////////////////////////////////////////
    
}

/*
function comprobarMuro(x,y) {
    for(let i = 0; i < 6; i++) {
        if (mapa[x][y].className.indexOf("muro") >= 0) {

        }
    }
}

*/


function  marcarCamino() {
    if (X+1 < mapa.length && mapa[X+1][Y].className.indexOf("muro") >= 0)  {
        mapa[X+1][Y].classList.add("x");
        cambiarMuro(X+1,Y);
    }
        
    if (X-1 >= 0 && mapa[X-1][Y].className.indexOf("muro") >= 0) {
        mapa[X-1][Y].classList.add("x");
        cambiarMuro(X-1,Y);
    }
    if (Y+1 < mapa[Y].length && mapa[X][Y+1].className.indexOf("muro") >= 0) {
        mapa[X][Y+1].classList.add("x");
        cambiarMuro(X,Y+1);
    }
    if (Y-1 >= 0 && mapa[X][Y-1].className.indexOf("muro") >= 0) {
        mapa[X][Y-1].classList.add("x");
        cambiarMuro(X,Y-1);
    }
}

function cambiarMuro(x,y) {
    //Pasamos la posición del muro
    inicialX = x;
    inicialY = y;
    contador = 0;
    fuera = false;

    for (let i = 0; i < 6 && !fuera; i++) {
        
        //comprobamos izquierda
        if (mapa[x][y-1].classList.contains("muro") && mapa[x][y-1].classList.contains("x")) {
            y--;
            contador++;
        }
        //comprobamos derecha
        //comprobamos arriba
        //comprobamos abajo
    }
    if (contador == 6) {
        pintarMuro(inicalX,inicialY);
    }
    
}


function pintarMuro(x,y) {

}


function rellenarPilar1() { 
   for (let i = 0; i < Pilar1.length; i++) {
       for (let j = 0; j < Pilar1[i].length; j++) {
           Pilar1[i][j] = mapa[i+1][j];
       }
   }
   
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
    marcarCamino();
}

function MoverAbajo() {
    if (X != 13) {

        if (!mapa[X + 1][Y].classList.contains("muro")) {

            mapa[X][Y].classList.remove("jugador");
            mapa[X][Y].classList.remove("jugador_Derecha");
            mapa[X][Y].classList.remove("jugador_Izquierda");
            if (X != 0) {
                mapa[X][Y].classList.add("pisada");

            }

            X++;

            mapa[X][Y].classList.add("jugador");

        }
    }
}

function MoverArriba() {
    if (X - 1 != 0) {
        if (!mapa[X - 1][Y].classList.contains("muro")) {

            mapa[X][Y].classList.remove("jugador");
            mapa[X][Y].classList.remove("jugador_Derecha");
            mapa[X][Y].classList.remove("jugador_Izquierda");
            mapa[X][Y].classList.add("pisada");
            X--;

            mapa[X][Y].classList.add("jugador");

        }
    }
}

function MoverDerecha() {
    if (Y != 20) {
        if (!mapa[X][Y + 1].classList.contains("muro")) {

            mapa[X][Y].classList.remove("jugador");
            mapa[X][Y].classList.remove("jugador_Derecha");
            mapa[X][Y].classList.remove("jugador_Izquierda");
            mapa[X][Y].classList.add("pisada");

            Y++;

            mapa[X][Y].classList.add("jugador_Derecha");
        }
    }
}

function MoverIzquierda() {
    if (Y != 0) {

        if (!mapa[X][Y - 1].classList.contains("muro")) {


            mapa[X][Y].classList.remove("jugador");
            mapa[X][Y].classList.remove("jugador_Derecha");
            mapa[X][Y].classList.remove("jugador_Izquierda");
            mapa[X][Y].classList.add("pisada");

            Y--;

            mapa[X][Y].classList.add("jugador_Izquierda");
        }
    }
}



function moverEnemigo() {

    movimientoHecho = false;
    while (!movimientoHecho) {
        movimientoRandom = Math.floor(Math.random() * 4);
        switch (movimientoRandom) {
            case 0:
                //arriba
                if (momiaX - 1 != 0) {
                    if (!mapa[momiaX - 1][momiaY].classList.contains("muro")) {

                        mapa[momiaX][momiaY].classList.remove("chtulu");
                        console.log("Arriba");
                        momiaX--;

                        mapa[momiaX][momiaY].classList.add("chtulu");

                        movimientoHecho = true;
                    }
                }
                break;
            case 1:
                //abajo
                if (momiaX != 13) {
                    if (!mapa[momiaX + 1][momiaY].classList.contains("muro")) {

                        mapa[momiaX][momiaY].classList.remove("chtulu");
                        console.log("Abajo");
                        momiaX++;

                        mapa[momiaX][momiaY].classList.add("chtulu");

                        movimientoHecho = true;
                    }
                }

                break;
            case 2:
                //derecha
                if (momiaY != 20) {
                    if (!mapa[momiaX][momiaY + 1].classList.contains("muro")) {

                        mapa[momiaX][momiaY].classList.remove("chtulu");
                        console.log("Derecha");
                        momiaY++;

                        mapa[momiaX][momiaY].classList.add("chtulu");

                        movimientoHecho = true;
                    }
                }

                break;
            case 3:
                //izquierda   
                if (momiaY != 0) {

                    if (!mapa[momiaX][momiaY - 1].classList.contains("muro")) {

                        mapa[momiaX][momiaY].classList.remove("chtulu");
                        console.log("Izquierda");
                        momiaY--;

                        mapa[momiaX][momiaY].classList.add("chtulu");

                        movimientoHecho = true;
                    }
                }
                break;
        }
    }
}



window.onload = function () {

    matrizMapa();
    cargarPersonaje();
    document.addEventListener("keydown", moverPersonaje);
   

     setInterval(comprobarMuro,100);
  //  setInterval(moverEnemigo, 300);
}