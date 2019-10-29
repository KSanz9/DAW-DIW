var mapa = new Array(14);
for (let i = 0; i < mapa.length; i++) {
    mapa[i] = new Array(21);
}

class Malote{
    posicionX = 0;
    posicionY = 0;

    constructor(x,y) {
        this.posicionX = x;
        this.posicionY = y;
    }
}

var malos = new Array();


//
//Inicio del personaje
var X = 0;
var Y = 8;



var nivel = 1;

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

function  cargarChtulhu(xenemigo, yenemigo) {
    var chtulhu = false;

    if (!Momia) {
        while (!chtulhu) {
            var XRandom = Math.floor(Math.random() * 13) + 1;
            var YRandom = Math.floor(Math.random() * 20);

            if (mapa[XRandom][YRandom].classList.contains("camino")) {
                mapa[XRandom][YRandom].classList.add("chtulu");
                M1 = new Malote(XRandom,YRandom);
                // M1.posicionX = XRandom;
                // M1.posicionY = YRandom
                var momia = malos.push(M1);
                setInterval(matarPersonaje, 100,M1);
                chtulhu = true;
            }
        }
        Momia = true;
        

        //setInterval(moverEnemigo, 300, M1);

    }else{


        console.log()
        mapa[xenemigo][yenemigo].classList.add("chtulu");
        M2 = new Malote(xenemigo,yenemigo);
        M2.posicionX = xenemigo;
        M2.posicionY = yenemigo;

        console.log(M2.posicionX + " : " + M2.posicionY);
        var momia2 = malos.push(M2);
       setInterval(matarPersonaje, 100,M2);
        //setInterval(moverEnemigo, 300, M2);
    }
}

function matarPersonaje(M) {
    for (let index = 0; index < mapa.length; index++) {
    for (let jindex = 0; jindex < mapa[index].length; jindex++) {

        if (mapa[index][jindex].classList.contains("judador") ||
        mapa[index][jindex].classList.contains("judador_Derecha") ||
        mapa[index][jindex].classList.contains("judador_Izquierda") &&
        mapa[index][jindex].classList.contains("chtulu")) {

            console.log("pene");
            if (Pergamino) {
                delete M;
            } else {
                vidas--;
                console.log(vidas);
                perderVida();

        }
        }        
    
}
    }

    if (vidas == 0) {
        loseGame();
    }

}
function perderVida(){
    var quitar = vida.pop();    
}
function loseGame() {
    alert("Has sucumbido a Chtulu");
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
                if (index ==1 && jindex == 1 && !mapa[x + index][y + jindex].classList.contains("Nada") && 
                !mapa[x + index][y + jindex].classList.contains("Llave") && 
                !mapa[x + index][y + jindex].classList.contains("Urna") && 
                !mapa[x + index][y + jindex].classList.contains("Pergamino")&&
                !mapa[x + index][y + jindex].classList.contains("Momia")) {
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


function moverEnemigo(M) {
       
    movimientoHecho = false;
    while (!movimientoHecho) {
        movimientoRandom = Math.floor(Math.random() * 4);
        switch (movimientoRandom) {
            case 0:
              //  console.log("arriba" + arribaveces++)
                //arriba
                if (M.posicionX - 1 != 0) {
                    if (!mapa[M.posicionX - 1][M.posicionY].classList.contains("muro")) {

                        mapa[M.posicionX][M.posicionY].classList.remove("chtulu");
                        M.posicionX--;

                        mapa[M.posicionX][M.posicionY].classList.add("chtulu");
                     
                        movimientoHecho = true;
                    }
                }
                break;
            case 1:
                //abajo
                if (M.posicionX != 13) {
                    if (!mapa[M.posicionX + 1][M.posicionY].classList.contains("muro")) {

                        mapa[M.posicionX][M.posicionY].classList.remove("chtulu");
                        M.posicionX++;

                        mapa[M.posicionX][M.posicionY].classList.add("chtulu");
                       
                        movimientoHecho = true;
                    }
                }

                break;
            case 2:
                //derecha
                if (M.posicionY != 20) {
                    if (!mapa[M.posicionX][M.posicionY + 1].classList.contains("muro")) {

                        mapa[M.posicionX][M.posicionY].classList.remove("chtulu");
                        M.posicionY++;

                        mapa[M.posicionX][M.posicionY].classList.add("chtulu");
                       
                        movimientoHecho = true;
                    }
                }

                break;
            case 3:
                //izquierda   
                if (M.posicionY != 0) {

                    if (!mapa[M.posicionX][M.posicionY - 1].classList.contains("muro")) {

                        mapa[M.posicionX][M.posicionY].classList.remove("chtulu");
                        Malote.posicionY--;

                        mapa[M.posicionX][M.posicionY].classList.add("chtulu");
                       
                        movimientoHecho = true;
                    }
                }
                break;
        }
    }

}



function terminarPartida(){
    alert("Has sobrevivido a Chtulhu");
    nivel++;
    alert("Cargando nivel "+nivel);
    reiniciarJuego();
}

function reiniciarJuego(){

    document.getElementById("mapa").innerHTML = "";

    reiniciarVariables();
    matrizMapa();
    cargarPersonaje();
    cargarChtulhu(0, 0);
    document.addEventListener("keydown", moverPersonaje);
    document.getElementById('Level').innerHTML='Nivel '+ this.nivel;

}
function reiniciarVariables(){
     
    mapa = new Array(14);
    for (let i = 0; i < mapa.length; i++) {
        mapa[i] = new Array(21);
    }  
    malos = new Array(); 
    //
    //Inicio del personaje
    X = 0;
    Y = 8;
    //Objetos de los pilares
    Objetos = new Array("Llave", "Urna", "Pergamino", "Momia", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada");
    Llave = false;
    Urna = false;
    Pergamino = false;
    Momia = false;

}


window.onload = function () {
    matrizMapa();
    cargarPersonaje();
    cargarChtulhu(0, 0);
    document.addEventListener("keydown", moverPersonaje);
    document.getElementById('Level').innerHTML='Nivel '+ this.nivel;
}
