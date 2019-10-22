var mapa = new Array(14);
for (let i = 0; i < mapa.length; i++) {
    mapa[i] = new Array(21);
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
                if (i == 0) {
                    newDiv.classList.add("muro_inicio");
                }else{
                    newDiv.classList.add("muro");

                }
               
            }
            document.getElementById("mapa").appendChild(newDiv);
            mapa[i][j] = newDiv;
        }

    }

    console.table(mapa);
}

function objetosMapa(){
    var Objetos = new Array("Llave", "Urna", "Pergamino", "Momia", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada");



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
   


}
/*
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
*/



function  marcarCamino() {
    
    if (X+1 < mapa.length && mapa[X+1][Y].classList.contains("muro"))  {
        mapa[X+1][Y].classList.add("borde_Pisado");
        cambiarMuro(X+1,Y);
    }
        
    if (X-1 > 0 && mapa[X-1][Y].classList.contains("muro") ){
        mapa[X-1][Y].classList.add("borde_Pisado");
        cambiarMuro(X-1,Y);
    }
    if (Y+1 < 20 && mapa[X][Y+1].classList.contains("muro") ) {
        mapa[X][Y+1].classList.add("borde_Pisado");
        cambiarMuro(X,Y+1);
    }
    if (Y-1 >= 0 && mapa[X][Y-1].classList.contains("muro") ) {
        mapa[X][Y-1].classList.add("borde_Pisado");
        cambiarMuro(X,Y-1);
    }
}

function cambiarMuro(x,y) {
    //Pasamos la posición del muro
    inicialX = x;
    inicialY = y;
    console.log(" [ X : " +x+"] [ Y: "+y+"]" );
   
    


       if( mapa[inicialX][inicialY].classList.contains("muro")){

            if(mapa[inicialX][inicialY-1].classList.contains("muro")){

                if (mapa[inicialX][inicialY-2].classList.contains("muro")) {

                    if(mapa[inicialX-1][inicialY-2].classList.contains("muro")){

                        pintarMuro(inicialX-1,inicialY-2);

                    }else{

                        pintarMuro(inicialX,inicialY-2);

                    }   
                }else{
                    if (mapa[inicialX-1][inicialY-1].classList.contains("muro")) {
                        pintarMuro(inicialX-1,inicialY-1);
                    }else{
                        pintarMuro(inicialX,inicialY-1);

                    }
                }

            }else{

                if (mapa[inicialX-1][inicialY].classList.contains("muro")) {

                    pintarMuro(inicialX-1,inicialY);

                 }else{

                    pintarMuro(inicialX,inicialY);

                 }
                

            }
        }


    }

    



function pintarMuro(x,y) {
    
    iniX = x-1;
    iniY = y-1;

    contador = 0;
    for (let x = 0; x <= 3; x++) {
        for (let y = 0; y <= 4; y++){
            if (mapa[iniX+x][iniY+y].classList.contains("pisada")) contador++;
        }
    }


    if(contador == 14) {
        for (let index = 0; index < 2; index++) {
            for (let jindex = 0; jindex < 3; jindex++) {
                mapa[x + index][y + jindex].classList.add("pintado");
            }
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
           

            X++;
            if (X != 0) {
                mapa[X][Y].classList.add("pisada");

            }

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
            
            X--;
            mapa[X][Y].classList.add("pisada");
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

            Y++;
            mapa[X][Y].classList.add("pisada");

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

            Y--;
            mapa[X][Y].classList.add("pisada");

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
    objetosMapa();
    cargarPersonaje();
    document.addEventListener("keydown", moverPersonaje);
    setInterval(moverEnemigo, 300);
    console.log("La momia se mueve");
}
