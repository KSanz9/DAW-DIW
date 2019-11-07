/* 
 
    ^(;,;)^ : Fragmento perdido

*/

var contadorCajas = 0;

window.onload=init;

function init(){
    document.querySelector('button').addEventListener('click', crearCaja);

}

function crearCaja(event){
    if (contadorCajas < 20) {
        
    var padre = document.querySelector("container");

    var hijo = document.createElement("box");

    padre.appendChild(hijo);

    hijo.addEventListener('click', digievolucion)

    contadorCajas++
}

}

function digievolucion(event){

    


}