// Simple script to use with datosAbiertos

// Author : Angel Berlanas Vicente
//         <berlanas_ang@gva.es>
// This script is licensed under GPLv3 or higher


// Algunos valores

const fuentesUrl = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON ";

// Esta es la funcion de filtrado para
// obtener tan solo los elementos que cumplen
// una serie de requisitos.

function filtroLetra(elemento){
    let letra=document.querySelector(`input[name="calle"]`).value;
    return elemento.properties.nombre.startsWith(letra);
}


// Pasa a mayuscula el texto de propio input
// se lanza cada vez que se realiza una insercion en
// el texto del nombre.
function toUpp(){
    document.querySelector(`input[name="calle"]`).value=document.querySelector(`input[name="calle"]`).value.toUpperCase();
}


function buscar(){

    // Obtenemos el JSON que esta definido
    const fetchPromesa = fetch(fuentesUrl);

    // Cuando se resuelva la promesa
    fetchPromesa.then(response => {
	// la pasamos a JSON
	return response.json();
	// Y entonces
    }).then(respuesta =>{
	// Filtramos los resultados con el filtro definido anteriormente

	console.log(respuesta.features[1].properties);
	const resultado=respuesta.features.filter(filtroLetra);

	// Una vez tenemos el listado filtrado pasamos a crear
	// cada uno de los <li> que representan
	let listado=document.getElementsByClassName("resultados")[0];

	// Por cada uno de ellos 
	resultado.forEach(fuente=>{
	    // Creamos un <li>
        let calleli=document.createElement("div");
        let textoFalla = document.createElement("p");
        let imgFalla = document.createElement("img");
        imgFalla.src = fuente.properties.boceto;
	    textoFalla.innerText=fuente.properties.nombre+" -- ["+fuente.properties.artista_i+"]";
        // Lo anyadimos
        calleli.appendChild(textoFalla);
        calleli.appendChild(imgFalla);
	    listado.appendChild(calleli);	    
	});
	/* Establecemos el listado en la Web
	document.querySelector(".resultados").innerHTML="";
	document.querySelector(".resultados").appendChild(listado);*/
    });
}

function init() {

    // Binding de los eventos correspondientes.

    // Click en el boton de buscar
    document.querySelector(`input[type="button"]`).addEventListener("click",buscar);
    // Texto cambia en el <input>
    document.querySelector(`input[type="text"]`).addEventListener("input",toUpp);
}

// The mother of the lamb.
window.onload=init;
    
