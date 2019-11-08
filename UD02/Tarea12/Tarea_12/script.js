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

    var evolucion = false;

    hijo.addEventListener('click', digievolucion)

    contadorCajas++
}

}

function digievolucion(event){
    if(this.classList.contains("desevoluciona")){
        this.classList.add("ultimate");
    }else{
        if (this.classList.contains("evoluciona")) {
            this.classList.add("desevoluciona");
            this.classList.remove("evoluciona");
           
        }else{
            this.classList.add("evoluciona");
        }
    }
    


}