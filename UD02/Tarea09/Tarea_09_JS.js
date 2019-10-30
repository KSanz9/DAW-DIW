


function playSound(key){
    console.log(key);
    let audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);
    audio.play();
}



window.onload = function () {
    document.onkeypress = playSound;

}
