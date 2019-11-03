const keys = document.querySelectorAll(".key");

keys.forEach( element => element.addEventListener("transitionend", removeTransition));

function playSound(key){
const audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);

if (!audio) {
    return;
}

audio.currentTime = 0;
audio.play();

const Sound = document.querySelector(`.key[data-key="${key.keyCode}"]`);
Sound.classList.add("Transmisionado");
}

function removeTransition(e){
e.target.classList.remove("Transmisionado");
}
//Por alguna razon no me quita la Transition, preguntar a angel.


window.onload = function () {
document.onkeypress = playSound;

}
