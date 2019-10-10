var arrayBotones;

window.onload = function() {
    alert("entra");
    arrayBotones = document.getElementsByClassName("boton");
    for (let index = 0; index < arrayBotones.length; index++) {
        arrayBotones[index].addEventListener("click", insertarElemento);
    }

    console.log(pantalla);
}

function insertarElemento(evento) {
    alert("entra2");
    document.getElementById("pantalla").innerText = "Mierda";
}