function matrizMapa {
    mapa = [];

    for (let i = 0; i < 13; i++) {
        for (let j = 0; j < 21; j++) {

            var newDiv = document.createElement("div");

            if (mapa[i][j] == 0) {

                newDiv.classList.add("camino");

            } else {

                newDiv.classList.add("muro");

            }
            document.querySelector("#mapa").appendChild(newDiv);

        }

    }
}


window.onload = function() {

    matrizMapa();

}