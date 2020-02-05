window.onload = init;

function init() {

    jsonGOT = obtenerJson();

}


function obtenerJson() {

    var requestURL = './got.json';
    console.log("sdf");

    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        
        var gotjson = request.response;
        console.log(gotjson);
        verPersonajes(gotjson);

    }
    

}


function verPersonajes(gotjson) {

    var fichasJugadores = document.getElementById("contenedorFichas");


    gotjson.got.forEach(personaje => {

        //creamos papa para meter todos los divs
        var padre = document.createElement("div");
        padre.classList.add("datos");

        var fotoPerfil = document.createElement("img");
        fotoPerfil.src=personaje.imagen;
        fotoPerfil.style="float:left";//para las iamgenes esten a la derecha
    
        fichasJugadores.appendChild(fotoPerfil);

        //nombre apellido
        
        var nombre = document.createElement("div");
        nombre.classList.add("small");
        nombre.classList.add("cabecera");
        nombre.innerHTML = "Nombre";
        var apellidos = document.createElement("div");
        apellidos.classList.add("medium");
        apellidos.classList.add("cabecera");
        apellidos.innerHTML = "Apellidos";
        //nombre apellidod atos
       
        var nombreDato = document.createElement("div");
        nombreDato.classList.add("small");
        nombreDato.classList.add("dato");
        nombreDato.innerHTML = personaje.nombre;
        var apellidosDato = document.createElement("div");
        apellidosDato.classList.add("medium");
        apellidosDato.classList.add("dato");
        apellidosDato.innerHTML = personaje.apellidos;
        //padre casa 
     
        var padres = document.createElement("div");
        padres.classList.add("medium");
        padres.classList.add("cabecera");
        padres.innerHTML = "Padre";
        var casa = document.createElement("div");
        casa.classList.add("small");
        casa.classList.add("cabecera");
        casa.innerHTML = "Casa";
      
        var padresDatos = document.createElement("div");
        padresDatos.classList.add("medium");
        padresDatos.classList.add("dato");
        padresDatos.innerHTML = personaje.padres;
        var casaDatos = document.createElement("div");
        casaDatos.classList.add("small");
        casaDatos.classList.add("dato");
        casaDatos.innerHTML = personaje.familia;
      
        var titulo = document.createElement("div");
        titulo.classList.add("big");
        titulo.classList.add("cabecera");
        titulo.innerHTML = "Titulo";
        var tituloDato = document.createElement("div");
        tituloDato.classList.add("big");
        tituloDato.classList.add("dato");
        tituloDato.innerHTML = personaje.titulo;
        
        padre.appendChild(nombre);
        padre.appendChild(apellidos);
        padre.appendChild(nombreDato);
        padre.appendChild(apellidosDato);
        padre.appendChild(padres);
        padre.appendChild(casa);
        padre.appendChild(padresDatos);
        padre.appendChild(casaDatos);
        padre.appendChild(titulo);
        padre.appendChild(tituloDato);

        fichasJugadores.appendChild(padre);



    });


}
