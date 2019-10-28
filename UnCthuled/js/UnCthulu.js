var mapa = new Array(14);
for (let i = 0; i < mapa.length; i++) {
    mapa[i] = new Array(21);
}

//
//Inicio del personaje
var X = 0;
var Y = 8;

//momia creada desde el principio
    var momiaX;
    var momiaY;
//momia que sale en pilar
    var momiaX2 = xenrmigo;
    var momiaY2 = yenemigo;



//vidas
var vidas = 4;

var vida = new Array()
vida = document.getElementsByClassName("life");

//Objetos de los pilares
    var Objetos = new Array("Llave", "Urna", "Pergamino", "Momia", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada");
    var Llave = false;
    var Urna = false;
    var Pergamino = false;
    var Momia = false;



function matrizMapa() {

    for (let i = 0; i < mapa.length; i++) {
        for (let j = 0; j < mapa[i].length; j++) {

            var newDiv = document.createElement("div");

            if (i == 0 && j != 8) {
                newDiv.classList.add("inicio");
            }

            if (i == 1 || j == 0 || i == 4 || j == 4 || i == 7 || j == 8 || i == 10 || j == 12 || i == 13 || j == 16 || i == 14 || j == 20) {
                if (i !=0 || j == 8) {
                    newDiv.classList.add("camino");
                }
                

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
    var aleatorio = Math.floor(Math.random()*(Objetos.length));
    return Objetos.splice(aleatorio, 1);
    
}

function cargarPersonaje() {
    //Random del enemigo
    mapa[X][Y].classList.add("jugador");
    
   


}

function  cargarChtulhu(xenrmigo, yenemigo) {
    var chtulhu = false;



if (Momia == false) {
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
    setInterval(moverEnemigo, 300, momiaX, momiaY);

}else{
    mapa[momiaX2][momiaY2].classList.add("chtulu");
    setInterval(moverEnemigo, 300, momiaX2, momiaY2);
}

}


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


    for (let index = 0; index < 2; index++) {
        for (let jindex = 0; jindex < 3; jindex++) {
            if(mapa[x + index][y + jindex].classList.contains("pintado")){
                if (index ==1 && jindex == 1 && !mapa[x + index][y + jindex].classList.contains("Nada") && !mapa[x + index][y + jindex].classList.contains("Llave") && !mapa[x + index][y + jindex].classList.contains("Urna") && !mapa[x + index][y + jindex].classList.contains("Pergamino")) {
                    var objeto = objetosMapa();
                    mapa[x + index][y + jindex].classList.add(objeto);

                    if (mapa[x + index][y + jindex].classList.contains("Llave")) {
                        Llave = true;
                    }

                    if (mapa[x + index][y + jindex].classList.contains("Urna")) {
                        Urna = true;
                    }

                    if (mapa[x + index][y + jindex].classList.contains("Pergamino")) {
                        Pergamino = true;
                    }

                    if (mapa[x + index][y + jindex].classList.contains("Momia")) {
                        var enemigoX = x+index +1;
                        var enemigoY = y + jindex;
                        cargarChtulhu(enemigoX, enemigoY);
                    }

                }
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
    if (Llave == true && Urna == true ) {
        if (X- 1 == 0 && Y == 8) {
            if (!mapa[X - 1][Y].classList.contains("muro")) {

                mapa[X][Y].classList.remove("jugador");
                mapa[X][Y].classList.remove("jugador_Derecha");
                mapa[X][Y].classList.remove("jugador_Izquierda");
                
                X--;
                mapa[X][Y].classList.add("pisada");
                mapa[X][Y].classList.add("jugador");
                terminarPartida();
    
            }
        }else{
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

       
    } else { 
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
}

function MoverDerecha() {
    if(X != 0){ 
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
}

function MoverIzquierda() {
    if(X != 0){ 
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
}


function moverEnemigo(momiaX, momiaY) {
console.log("Hola");
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
/*
function matarPersonaje(){
    for (let index = 0; index < mapa.length; index++) {
       for (let jindex = 0; jindex < mapa[index].length; jindex++) {
         if (mapa[index][jindex].contains("chtulu") && mapa[index][jindex].contains("jugador") || mapa[index][jindex].contains("jugador_Derecha") || mapa[index][jindex].contains("jugador_Izquierda")){
            if(Pergamino == true){
                remove.classList("chtulu");
            }else{
                quitarVida();
            }

         }
       }
        
    }
}
*/
function terminarPartida(){
    alert("Has sobrevivido a Chtulhu")
}

window.onload = function () {
    matrizMapa();
    cargarPersonaje();
    cargarChtulhu(0, 0);
    //matarPersonaje();
    document.addEventListener("keydown", moverPersonaje);
}
