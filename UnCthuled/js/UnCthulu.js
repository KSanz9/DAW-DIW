var mapa = new Array(14);
for (let i = 0; i < mapa.length; i++) {
    mapa[i] = new Array(21);
}
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
    mapa[X][Y].classList.add("jugador");
    var chtulhu = false;


  

    while(!chtulhu){
        var XRandom = Math.floor(Math.random() * 13) + 1;
        var YRandom = Math.floor(Math.random() * 20);

        XRandom=1;
        YRandom=1;
    
        if(mapa[XRandom][YRandom].classList.contains("camino")){
            mapa[XRandom][YRandom].classList.add("chtulu");
            momiaX = XRandom;
            momiaY = YRandom;
            chtulhu = true;
        }
    }
    //while (mapa[XRandom][YRandom] != document.getElementByClassName("muro")) {
   
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
    if (X != 13) {

        if (! mapa[X+1][Y].classList.contains("muro")){
            if (mapa[X+1][Y].classList.contains("pisada") && mapa[X+1][Y].classList.contains("chtulu")) {
                mapa[X+1][Y].classList.remove("pisada");
                mapa[X+1][Y].classList.remove("chtulu");

                
            }else if(mapa[X +1][Y].classList.contains("pisada")){
                mapa[X +1][Y].classList.remove("pisada");

            }
        mapa[X][Y].classList.remove("jugador");
        mapa[X][Y].classList.remove("jugador_Derecha");
        mapa[X][Y].classList.remove("jugador_Izquierda");
        if (X !=0) {
            mapa[X][Y].classList.add("pisada");

        }
       
        X++;
       
        mapa[X][Y].classList.add("jugador");

        }
    }
}

function MoverArriba() {
    if (X - 1 != 0) {
        if (! mapa[X-1][Y].classList.contains("muro")){
            if (mapa[X -1][Y].classList.contains("pisada") && mapa[X-1][Y].classList.contains("chtulu")) {
                mapa[X -1][Y].classList.remove("pisada");
                mapa[X -1][Y].classList.remove("chtulu");

                
            }else if(mapa[X -1][Y].classList.contains("pisada")){
                mapa[X -1][Y].classList.remove("pisada");

            }
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
        if (! mapa[X][Y+1].classList.contains("muro")){
            if (mapa[X][Y +1].classList.contains("pisada") && mapa[X][Y+1].classList.contains("chtulu")) {
                mapa[X][Y +1].classList.remove("pisada");
                mapa[X][Y +1].classList.remove("chtulu");

                
            }else if(mapa[X][Y +1].classList.contains("pisada")){
                mapa[X][Y +1].classList.remove("pisada");

            }
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

        if (! mapa[X][Y-1].classList.contains("muro")){
            if (mapa[X][Y -1].classList.contains("pisada") && mapa[X][Y -1].classList.contains("chtulu")) {
                mapa[X][Y -1].classList.remove("pisada");
                mapa[X][Y -1].classList.remove("chtulu");
   
            }else if(mapa[X][Y -1].classList.contains("pisada")){
                mapa[X][Y -1].classList.remove("pisada");

            }

         mapa[X][Y].classList.remove("jugador");
         mapa[X][Y].classList.remove("jugador_Derecha");
         mapa[X][Y].classList.remove("jugador_Izquierda");
         mapa[X][Y].classList.add("pisada");
       
         Y--;
       
         mapa[X][Y].classList.add("jugador_Izquierda");
        }
    }
}



function moverEnemigo(){
   
    movimientoHecho = false;
    while(!movimientoHecho){
        movimientoRandom = Math.floor(Math.random() * 4);
        switch (movimientoRandom) {
            case 0:
                //arriba
                if (momiaX - 1 != 0) {
                if (! mapa[momiaX - 1][momiaY].classList.contains("muro")) {
                    
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
                if (! mapa[momiaX + 1][momiaY].classList.contains("muro")) {
                    
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
                if (! mapa[momiaX][momiaY + 1].classList.contains("muro")) {
                    
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
 
                if (! mapa[momiaX][momiaY - 1].classList.contains("muro")) {
                    
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

window.onload = function() {

    matrizMapa();
    cargarPersonaje();
    document.addEventListener("keydown", moverPersonaje);
    setInterval(moverEnemigo,300);
}