window.onload = init;


var OkNombre = false;
var Okapellidos = false;
var Okcasa = false;
var Okpadres = false;
var Oktitulo = false;
var Okimagen = false;



function init() {

    jsonGOT = obtenerJson();

    var submit = document.querySelector("button");
    submit.addEventListener('click', comprobarCamposOk);

    var inputes = document.querySelectorAll("input");

    inputes.forEach(element => {
        element.addEventListener('blur', comprobarCampos);
    });
}


function comprobarCamposOk() {

    if (OkNombre && Okapellidos && Okcasa && Okpadres && Oktitulo && Okimagen) {

        var contenedor = document.getElementById("contenedorFichas");
        contenedor.innerHTML = "";

        //creamos papa para meter todos los divs
        var padre = document.createElement("div");
        padre.classList.add("datos");

        var inputes = document.querySelectorAll("input");

        var htmlimg = "<div><img src='"+inputes[5].value+"'></img></div>";

        contenedor.innerHTML+=htmlimg;

        var html =
            "<div class='small cabecera'>Nombre</div>" +
            "<div class='medium cabecera'>Apellidos</div>" +
            "<div class='small dato'>"+inputes[0].value+"</div>" +
            "<div class='medium dato'>"+inputes[1].value+"</div>" +
            "<div class='medium cabecera'>Padres</div>" +
            "<div class='small cabecera'>Casa</div>" +
            "<div class='medium dato'>"+inputes[3].value+"</div>" +
            "<div class='small dato'>"+inputes[2].value+"</div>" +
            "<div class='big cabecera'>Titulo</div>" +
            "<div class='+big dato'>"+inputes[4].value+"</div>";
        }

        
        padre.innerHTML+=html;
        contenedor.appendChild(padre);

        var form = document.getElementById("contenedorForm");
        form.innerHTML="";




    }




 

function comprobarCampos() {
    console.log(this.id);

    var error = document.getElementById("e" + this.id);

    if (this.value == "") {
        error.style.visibility = "visible";
        this.style.padding = "4px";
        this.style.border = "1px solid red";
        comprobarIDCampo(this, false);

    } else {
        this.style.border = "1px solid black";
        this.style.padding = "4px";
        error.style.visibility = "hidden";
        comprobarIDCampo(this, true);

    }

}



function comprobarIDCampo(id, bollean) {

    console.log(id);


    switch (id.id) {
        case "nombre": OkNombre = bollean;
            break;
        case "apellidos": Okapellidos = bollean;
            break;
        case "casa": Okcasa = bollean;
            break;
        case "padres": Okpadres = bollean;
            break;
        case "titulo": Oktitulo = bollean;
            break;
        case "imagen": Okimagen = bollean;
            break;
        default:
            break;
    }

}


function obtenerJson() {

    var requestURL = 'http://localhost:8000/DAW-DWEC/SegundaEval/examenGOT/got/got.json';

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {

        var gotjson = request.response;

        //verPersonajes(gotjson);

    }


}