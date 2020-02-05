window.onload = init;

function init() {

    jsonGOT = obtenerJson();
    var conprobar = document.getElementById("comprobar");
    comprobar.addEventListener('click', comprobarCasas);
}


function obtenerJson() {

    var requestURL = './got.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {

        var gotjson = request.response;

        [casas, casasConImagenes] = obtenerCasas(gotjson);
        imprimirCasas(casas, casasConImagenes);
    }

}


function comprobarCasas() {

    var contenedores = document.querySelectorAll(".contenedorJuego");

    var todoOK = false;
    

    for (let index = 0; index < contenedores.length; index++) {

        if (contenedores[index].childNodes[0].getAttribute("familia") == contenedores[index].childNodes[1].value) {

            todoOK = true;
        } else {

            todoOK = false;
            break;
        }
    }

    
    if (todoOK) {
    
        alert("has acertado todo");
    } else {
        alert("has fallado en alguna piensa bien");
    }





    /*
    
        if (imagen1 && imagen2 && imagen3 && imagen4 && imagen5 && imagen6 && imagen7) {
                alert("has acertado todo");
        }else{
            alert("alguna casa no coincide");
        }
    
                var imagen1 = false;
                var imagen2 = false;
                var imagen3 = false;
                var imagen4 = false;
                var imagen5 = false;
                var imagen6 = false;
                var imagen7 = false;
    
    
                contenedores.forEach(element => {
                    console.log(element);
                    //var id = element.childNodes[0].id;
                    //console.log(element.childNodes[0].familia);
                    console.log(element.childNodes[1].value);
                    console.log(element.childNodes[0].getAttribute("familia"));
                    if (element.childNodes[0].getAttribute("familia") == element.childNodes[1].value) {
                        comprobarImagen(true,element.childNodes[0].id);
                    } else {
                        comprobarImagen(false,element.childNodes[0].id);
                    }
    
    
                });
    
                function comprobarImagen(boleano, id) {
                    switch (id) {
    
                        case "imagen1": imagen1 = boleano; break;
                        case "imagen2": imagen2 = boleano; break;
                        case "imagen3": imagen3 = boleano; break;
                        case "imagen4": imagen4 = boleano; break;
                        case "imagen5": imagen5 = boleano; break;
                        case "imagen6": imagen6 = boleano; break;
                        case "imagen7": imagen7 = boleano; break;
    
                        default: break;
                    }
                }
    
    
    */



}

function imprimirCasas(casas, casasConImagenes) {

    var contenedorFotos = document.getElementById("contenedorFotos");
    contenedorFotos.innerHTML = "";
    console.log(casas);

    for (let index = 0; index < casasConImagenes.length; index++) {


        var html =
            "<div class='col-xs-6 col-sm-3 contenedorJuego'>" +
            "<img class='img-thumbnail' id='imagen" + (index + 1) + "' familia='" + casasConImagenes[index].casa + "' src='" + casasConImagenes[index].imagen + "'>" +
            "<select class='form-control'>" +
            "<option>Selecciona familia...</option>"
            ;

        for (let b = 0; b < casas.length; b++) {

            html +=
                "<option value='" + casas[b] + "'>" + casas[b] + "</option>";

        }
        html +=
            "</select>";
        contenedorFotos.innerHTML += html;

    }



}


function obtenerCasas(gotjson) {

    var casas = [];
    var casasConImagenes = [];

    gotjson.got.forEach(personaje => {
        if (!casas.includes(personaje.familia)) {
            casas.push(personaje.familia);
        }

        var personajeObject = new Object();
        personajeObject.casa = personaje.familia;
        personajeObject.imagen = personaje.imagen;
        casasConImagenes.push(personajeObject);
    });



    return [casas, casasConImagenes];


}