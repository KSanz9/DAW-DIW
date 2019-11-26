window.onload=init;
let play = false;


function init(){

    opacidadMenu();
    funcionalidadesMenu();


/*cambiar opacidad desde js sobre el atributo style desde el elemento 
    elemento.style.opacity = "1";
*/
}

function opacidadMenu(){
    var seccion = document.getElementById("reproduciendo");
    seccion.addEventListener("mouseover", desplazarBotones);
    seccion.addEventListener("mouseout", quitarBotones);

}

function desplazarBotones(){
    var menu = document.getElementById("botones");
    menu.classList.replace("invisible","visible");
}

function quitarBotones(){
    var menu = document.getElementById("botones");
    menu.classList.replace("visible","invisible");
}

function funcionalidadesMenu(){
    var arrayBotones = document.getElementsByClassName("botonMenu");

    for (let i = 0; i < arrayBotones.length; i++) {
        

        switch (i) {
            case 0://Replay
                
                break;
            case 2://play
                var boton = document.getElementById("play");
                boton.addEventListener("click", playVideo);
            
                break;
            default:
                break;
        }


    }

}

function playVideo(){
    var video = document.getElementById("video");
    var boton = document.getElementById("play");
    if (!play) {
        video.play();
        play = true;
    } else {
        video.pause();
        play = false; 
    }
    boton.classList.toggle("pause")
}