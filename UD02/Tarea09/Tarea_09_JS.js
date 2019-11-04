
function playSound(key){
    const audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);
        
    if (!audio) {
        return;
    }

    audio.currentTime = 0;
    audio.play();

    const Sound = document.querySelector(`.key[data-key="${key.keyCode}"]`);
    Sound.classList.add("transmisionado");
}

function removeTransition(e){
    console.log("angel");
    e.target.classList.remove("transmisionado");
}
//Por alguna razon no me quita la Transition, preguntar a angel.


window.onload = function () {
document.onkeypress = playSound;
const Ourkeys = document.querySelectorAll('.key');

Ourkeys.forEach(element => element.addEventListener("transitionend", removeTransition));
}


