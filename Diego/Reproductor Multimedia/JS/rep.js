window.onload=init;



function init(){

    funcionalidadesMenu();

    opacidadMenu();

/*cambiar opacidad desde js sobre el atributo style desde el elemento 
    elemento.style.opacity = "1";
*/
}

function opacidadMenu(){
    var seccion = document.getElementById("reproduciendo");
    var menu = document.getElementById("botones");

    seccion.addEventListener("mouseover")
}


function funcionalidadesMenu(){
    var arrayBotones = document.getElementsByClassName("botonMenu");

    for (let i = 0; i < arrayBotones.length; i++) {
        

        switch (i) {
            case 0://Replay

                break;
        
            default:
                break;
        }


    }

}