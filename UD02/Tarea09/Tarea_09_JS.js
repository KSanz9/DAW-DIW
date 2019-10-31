    const keys = document.querySelectorAll(".key");

    keys.forEach( key => key.addEventListener('transitionend', removeTransition));

function playSound(key){
    console.log(key);
    let audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);
    
    if (!audio) {
        return;
    }

    audio.currentTime = 0;
    audio.play();

    let Sound = document.querySelector(`.key[data-key="${key.keyCode}"]`);
    Sound.classList.add("Transmisionado");
}

function removeTransition(e){
    console.log("HOLA");
    this.classList.remove("Transmisionado");
}


window.onload = function () {
    document.onkeypress = playSound;

}
