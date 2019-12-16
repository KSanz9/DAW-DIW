window.onload=init;


function init(){

    verFichas();
}


function verFichas(){
    fetch("got.json")
    .then(response => {
        // la pasamos a JSON
        return response.json();
        // Y entonces
        }).then(respuesta =>{
    let contenedor = document.getElementById("contenedorFichas");

    array.forEach(element => {
        
    });




}



