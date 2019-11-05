
var mapa = new Array(3);
for (let i = 0; i < mapa.length; i++) {
    mapa[i] = new Array(3);
}




function matrizTresEnRaya(){
    for (let i = 0; i < mapa.length; i++) {
        for (let j = 0; j < mapa[i].length; j++) {
            var newDiv = document.createElement("div");

            newDiv.classList.add("play");

            document.getElementById("mapa").appendChild(newDiv);

            mapa[i][j] = newDiv;
            newDiv.dataset.pos = i.toString() + j.toString();
            mapa[i][j].addEventListener("click", jugar);
        }
        
    }


}

function jugar(evento){
    var circulo = "circulo";
if(!this.classList.contains("circulo") && !this.classList.contains("x")){
 this.classList.add("circulo");

    ganar(circulo);


var MovimientoOponente = false;

 while (!MovimientoOponente) {
    var XRandom = Math.floor(Math.random() * 3);
    var YRandom = Math.floor(Math.random() * 3);

    if (!mapa[XRandom][YRandom].classList.contains("circulo") && !mapa[XRandom][YRandom].classList.contains("x")) {
        mapa[XRandom][YRandom].classList.add("x");
        MovimientoOponente = true;
    }
}
}
}



function ganar(marca){
    var contador = 0;
    
    //linea
    for (let i = 0; index < mapa.length; i++) {
        if(mapa[i][i].classList.contains(marca)){
            contador++;
        }

    }
    if (contador == 3) {
        ganador();
    }

    var contador = 0;
    
    
    for (let i = 0; index < mapa.length; i++) {
        if(mapa[i][i].classList.contains(marca)){
            contador++;
        }

    }
    if (contador == 3) {
        ganador();
    }


    

    
}


function ganador(){

}

window.onload = function () {
    matrizTresEnRaya();
    }
