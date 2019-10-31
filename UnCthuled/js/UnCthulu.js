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

class Explorador{
    posicionX = 0;
    posicionY = 0;

    constructor(x,y,Numero) {
        this.posicionX = x;
        this.posicionY = y;
        var setMomia = Numero;
    }
}

var velocidad=300;
var malos = new Array();


//
//Inicio del personaje
var X = 0;
var Y = 8;

j1 = new Explorador(X,Y);


var nivel = 1;

//vidas
var vidas = 4;


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
                M1 = new Malote(XRandom,YRandom, 0);
                var momia = malos.push(M1);
                chtulhu = true;
            }
        }
        Momia = true;
        

        M1.setMomia=setInterval(moverEnemigo, velocidad, M1);

    }else{


        console.log()
        mapa[xenemigo][yenemigo].classList.add("chtulu");
        M2 = new Malote(xenemigo,yenemigo, 0);
        var momia2 = malos.push(M2);
        M2.setMomia=setInterval(moverEnemigo, velocidad, M2);
    }
}

function matarPersonaje(M) {
    if (j1.posicionX == M.posicionX && j1.posicionY == M.posicionY) {
            console.log("coinciden");
        if (Pergamino) {
            clearInterval(M.setMomia);
            mapa[M.posicionX][M.posicionY].classList.remove("chtulu");
            delete M;

            actualizarScore(100);

        } else {
            vidas--;
            clearInterval(M.setMomia);
            mapa[M.posicionX][M.posicionY].classList.remove("chtulu");
            delete M;
            perderVida();
        }
    }

    if (vidas == 0) {
        delete j1;
        loseGame();
    }

}
function perderVida(){
    document.getElementById("Vidas").removeChild(document.getElementsByClassName("life")[0]);
}
function loseGame() {
    alert("Has sucumbido a Chtulu");
}
function  marcarCamino() {
    
    if (j1.posicionX+1 < mapa.length && mapa[j1.posicionX+1][j1.posicionY].classList.contains("muro"))  {
        mapa[j1.posicionX+1][j1.posicionY].classList.add("borde_Pisado");
        cambiarMuro(j1.posicionX+1,j1.posicionY);
    }
        
    if (j1.posicionX-1 > 0 && mapa[j1.posicionX-1][j1.posicionY].classList.contains("muro") ){
        mapa[j1.posicionX-1][j1.posicionY].classList.add("borde_Pisado");
        cambiarMuro(j1.posicionX-1,j1.posicionY);
    }
    if (j1.posicionY+1 < 20 && mapa[j1.posicionX][j1.posicionY+1].classList.contains("muro") ) {
        mapa[j1.posicionX][j1.posicionY+1].classList.add("borde_Pisado");
        cambiarMuro(j1.posicionX,j1.posicionY+1);
    }
    if (j1.posicionY-1 >= 0 && mapa[j1.posicionX][j1.posicionY-1].classList.contains("muro") ) {
        mapa[j1.posicionX][j1.posicionY-1].classList.add("borde_Pisado");
        cambiarMuro(j1.posicionX,j1.posicionY-1);
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
                    actualizarScore(50);
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
        MoverAbajo(j1);
    }
    if (evento.key == "ArrowUp") {
        MoverArriba(j1);
    }
    if (evento.key == "ArrowRight") {
        MoverDerecha(j1);
    }
    if (evento.key == "ArrowLeft") {
        MoverIzquierda(j1);
    }
    marcarCamino();
}

function MoverAbajo(j1) {
    if (j1.posicionX != 13) {

        if (!mapa[j1.posicionX + 1][j1.posicionY].classList.contains("muro")) {

            mapa[j1.posicionX][j1.posicionY].classList.remove("jugador");
            mapa[j1.posicionX][j1.posicionY].classList.remove("jugador_Derecha");
            mapa[j1.posicionX][j1.posicionY].classList.remove("jugador_Izquierda");
           

            j1.posicionX++;
            if (j1.posicionX != 0) {
                mapa[j1.posicionX][j1.posicionY].classList.add("pisada");

            }

            mapa[j1.posicionX][j1.posicionY].classList.add("jugador");

        }
    }
}

function MoverArriba(j1) {
    if (Llave == true && Urna == true ) {
        if (j1.posicionX- 1 == 0 && j1.posicionY == 8) {
            if (!mapa[j1.posicionX - 1][j1.posicionY].classList.contains("muro")) {

                mapa[j1.posicionX][j1.posicionY].classList.remove("jugador");
                mapa[j1.posicionX][j1.posicionY].classList.remove("jugador_Derecha");
                mapa[j1.posicionX][j1.posicionY].classList.remove("jugador_Izquierda");
                
                j1.posicionX--;
                mapa[j1.posicionX][j1.posicionY].classList.add("pisada");
                mapa[j1.posicionX][j1.posicionY].classList.add("jugador");
                terminarPartida();
    
            }
        }else{
            if (j1.posicionX - 1 != 0) {
                if (!mapa[j1.posicionX - 1][j1.posicionY].classList.contains("muro")) {
        
                    mapa[j1.posicionX][j1.posicionY].classList.remove("jugador");
                    mapa[j1.posicionX][j1.posicionY].classList.remove("jugador_Derecha");
                    mapa[j1.posicionX][j1.posicionY].classList.remove("jugador_Izquierda");
                    
                    j1.posicionX--;
                    mapa[j1.posicionX][j1.posicionY].classList.add("pisada");
                    mapa[j1.posicionX][j1.posicionY].classList.add("jugador");
        
                }
            }
        }

       
    } else { 
    if (j1.posicionX - 1 != 0) {
        if (!mapa[j1.posicionX - 1][j1.posicionY].classList.contains("muro")) {

            mapa[j1.posicionX][j1.posicionY].classList.remove("jugador");
            mapa[j1.posicionX][j1.posicionY].classList.remove("jugador_Derecha");
            mapa[j1.posicionX][j1.posicionY].classList.remove("jugador_Izquierda");
            
            j1.posicionX--;
            mapa[j1.posicionX][j1.posicionY].classList.add("pisada");
            mapa[j1.posicionX][j1.posicionY].classList.add("jugador");

        }
    }
}
}

function MoverDerecha(j1) {
    if(j1.posicionX != 0){ 
    if (Y != 20) {
        if (!mapa[j1.posicionX][j1.posicionY + 1].classList.contains("muro")) {

            mapa[j1.posicionX][j1.posicionY].classList.remove("jugador");
            mapa[j1.posicionX][j1.posicionY].classList.remove("jugador_Derecha");
            mapa[j1.posicionX][j1.posicionY].classList.remove("jugador_Izquierda");

            j1.posicionY++;
            mapa[j1.posicionX][j1.posicionY].classList.add("pisada");

            mapa[j1.posicionX][j1.posicionY].classList.add("jugador_Derecha");
        }
    }
}
}

function MoverIzquierda(j1) {
    if(j1.posicionX != 0){ 
    if (j1.posicionY != 0) {

        if (!mapa[j1.posicionX][j1.posicionY - 1].classList.contains("muro")) {


            mapa[j1.posicionX][j1.posicionY].classList.remove("jugador");
            mapa[j1.posicionX][j1.posicionY].classList.remove("jugador_Derecha");
            mapa[j1.posicionX][j1.posicionY].classList.remove("jugador_Izquierda");

            j1.posicionY--;
            mapa[j1.posicionX][j1.posicionY].classList.add("pisada");

            mapa[j1.posicionX][j1.posicionY].classList.add("jugador_Izquierda");
            
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
                        M.posicionY--;
                        mapa[M.posicionX][M.posicionY].classList.add("chtulu");
                       
                        movimientoHecho = true;
                    }
                }
                break;
        }
    }
    matarPersonaje(M);

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
    velocidad-=50;
    mapa = new Array(14);
    for (let i = 0; i < mapa.length; i++) {
        mapa[i] = new Array(21);
    }  
    malos = new Array(); 
    //
    //Inicio del personaje
    j1 = new Explorador(X,Y);
    //Objetos de los pilares
    Objetos = new Array("Llave", "Urna", "Pergamino", "Momia", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada", "Nada");
    Llave = false;
    Urna = false;
    Pergamino = false;
    Momia = false;

}

var puntosactuales =0;
function actualizarScore(puntos) {
    puntosactuales+=puntos;
    document.getElementById("Score").innerText = "SCORE: "+puntosactuales;
}

window.onload = function () {
    matrizMapa();
    cargarPersonaje();
    cargarChtulhu(0, 0);
    actualizarScore(0000);
    document.addEventListener("keydown", moverPersonaje);
    document.getElementById('Level').innerHTML='Nivel '+ this.nivel;
}
