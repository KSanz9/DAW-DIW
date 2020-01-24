window.onload = init;


function init(){
    registro();    
    noticasActual();

}


function eventoRegistro(){

}

function noticasActual(){
    
}

function registro(){
   botonRegistro = document.getElementsByClassName("registro")[0];
    console.log(botonRegistro);
   botonRegistro.addEventListener("click", function(){

       document.getElementById("registro").style.display="none";
       document.querySelector("formulario").style.display="inline";

   });


}