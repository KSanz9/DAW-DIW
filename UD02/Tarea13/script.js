var contadorCajas = 0;
var orden;

window.onload=init;

function init(){
    document.querySelector('button').addEventListener('click', crearCaja);
    document.querySelector('.ordenMovimientoGirar').addEventListener('click', ordenGirar);
    document.querySelector('.ordenMovimientoV').addEventListener('click', ordenV);
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


function ordenGirar() {
    let elemento = document.querySelectorAll('.ultimate');
    orden = "movimientoGiro";
    elemento.forEach(box => box.addEventListener('click', ordenar));

    
}

function ordenV() {
    let elemento = document.querySelectorAll('.ultimate');
    orden = "movimientoV";
    elemento.forEach(box => box.addEventListener('click', ordenar));
}

function ordenar(event) {
    this.classList.toggle(orden);
}
