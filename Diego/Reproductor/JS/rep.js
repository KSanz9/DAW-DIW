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
    var boton;
    for (let i = 0; i < arrayBotones.length; i++) {
        

        switch (i) {
            case 0://Replay
                boton = document.getElementById("stop");
                boton.addEventListener("click", replayVideo);

                break;
            case 1://-10 s video
                boton = document.getElementById("prev");
                boton.addEventListener("click", prev);

                break;
            case 2://play
                boton = document.getElementById("play");
                boton.addEventListener("click", playVideo);
            
                break;
            case 3:
                boton = document.getElementById("next");
                boton.addEventListener("click", next);
    
                break;
            case 4:
                boton = document.getElementById("volUp");
                boton.addEventListener("click", vol);
                break;
            case 5:
                boton = document.getElementById("volDown");
                boton.addEventListener("click", vol);
                break;
            case 6:
                boton = document.getElementById("muteVol");
                boton.addEventListener("click", vol);
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

function replayVideo(){
    var video = document.getElementById("video");
    video.currentTime = 0;
}

function prev(){
    var video = document.getElementById("video");
    video.currentTime -= 10;
}


function next(){
    var video = document.getElementById("video");
    video.currentTime += 10;
}

function vol(event){
    var video = document.getElementById("video");

   //console.log(event.target);
   //console.log(this.attributes[0]);
    if(this.attributes[0].nodeValue == "volUp" && video.volume < 1){
        video.volume += 0.1;
    }
    if(this.attributes[0].nodeValue == "volDown" && video.volume > 0){
        video.volume -= 0.1;
    }
    if(this.attributes[0].nodeValue == "muteVol"){
        video.muted = !video.muted;
    }

}