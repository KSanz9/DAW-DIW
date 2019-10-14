function matrizMapa() {
    mapa = [];

    for (let i = 0; i < 13; i++) {
        mapa[i] = [];
        for (let j = 0; j < 21; j++) {

            var newDiv = document.createElement("div");

            if (i == 0 || j == 0 || i == 4 || j == 4 || i == 8 || j == 8 || i == 12 || j == 12 || i == 16 || j == 16 || i == 20 || j == 20) {
                console.log("se");
                newDiv.classList.add("camino");

            } else {

                newDiv.classList.add("muro");

            }
            document.getElementById("mapa").appendChild(newDiv);

        }

    }
}



window.onload = function() {

    matrizMapa();

}
8