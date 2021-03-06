// Simple script to use with datosAbiertos

// fuente : Angel Berlanas Vicente
//         <berlanas_ang@gva.es>
// This script is licensed under GPLv3 or higher


// Algunos valores
var json;
const fuentesUrl = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON ";
let sel = document.querySelector("select");
let idLabelPtos = 0;


// Esta es la funcion de filtrado para
// obtener tan solo los elementos que cumplen
// una serie de requisitos.
// Pasa a mayuscula el texto de propio input
// se lanza cada vez que se realiza una insercion en
// el texto del nombre.

function puntuacion() {

    let url = '/api/puntuaciones';
    let punt = this.value;
    let value = this.form[0].attributes[2].value;
    let data = { idFalla: ""+value+"", ip: '', puntuacion: ""+punt+"" };

   

    fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

}

function secciones(tipo) {
        sel.innerHTML="";
        const result = json.features;
        let sec = new Set();

        sec.add("Todas");

        if(tipo == "Principal"){
            result.forEach(section => {
                sec.add(section.properties.seccion);
            });
        }else{
            result.forEach(section => {
                sec.add(section.properties.seccion_i);
            });
        }
      
        sec.forEach(opciones => {
            //console.log(opciones);
            let option = document.createElement("option");
            option.value = opciones;
            option.innerHTML = opciones;
            sel.appendChild(option);
        });

}

function ubicacion() {
    const result = json.features;

    var ubi = document.createElement("div");

    ubi.classList.add("ubicacion");
    document.querySelector("body").appendChild(ubi);
    result.forEach(section => {

    });


}

function buscar() {
    document.querySelector("resultados").innerHTML = "";

    // Obtenemos el JSON que esta definido
    const fetchPromesa = fetch(fuentesUrl);

    // Cuando se resuelva la promesa
    fetchPromesa.then(response => {
        // la pasamos a JSON
        return response.json();
        // Y entonces
    }).then(respuesta => {
        // Filtramos los resultados con el filtro definido anteriormente
        json = respuesta;
        let filtroSecciones = document.querySelector("select").value;
        let resultado;
        //console.log(filtroSecciones);
        let radio = document.querySelector("input[name=tipoFalla]:checked");
       
        //filtro para el select
        if(radio.value == "Principal"){
            if (filtroSecciones == "Todas") {
                resultado = respuesta.features;
            } else {
                resultado = respuesta.features.filter(filtroSection);
            }
            secciones(radio.value);

        }else{
            if (filtroSecciones == "Todas") {
                resultado = respuesta.features;
            } else {
                resultado = respuesta.features.filter(filtroSectionI);
            }
            secciones(radio.value);


        }
        // Una vez tenemos el listado filtrado pasamos a crear
        // cada uno de los  que representan
        var img;
        
        // Por cada uno de ellos 
        resultado.forEach(falla => {
            let fallaValencia = document.createElement("div");
            let textoFalla = document.createElement("p");
            let imgFalla = document.createElement("img");
            let botonUbi = document.createElement("button")
            let divPuntuacion = document.createElement("div");
                let formPuntuacion = document.createElement("form");
                let divClasificacion = document.createElement("p");
            // Creamos un img y el texto de la falla
            if(radio.value == "Principal"){img =falla.properties.boceto;}else{img =falla.properties.boceto_i;}
            imgFalla.src = img;
            textoFalla.innerText = falla.properties.nombre;
           // console.log(falla.properties);
            //elementos para el boton
            botonUbi.type = 'button';
            botonUbi.innerText = 'Ubicacion';
            
//form
    var hiddenIdFalla = document.createElement("input");

    hiddenIdFalla.setAttribute("type", "hidden");

    hiddenIdFalla.setAttribute("name", "idFalla");

    hiddenIdFalla.setAttribute("value", falla.properties.id);

    formPuntuacion.appendChild(hiddenIdFalla);


//puntuaciones
            for (let x = idLabelPtos, y = 5; x < idLabelPtos + 5; x++ , y--) {
        
                let inputEstrellas = document.createElement("input");
                inputEstrellas.setAttribute('id', 'radio' + x);
                inputEstrellas.setAttribute('type', 'radio');
                inputEstrellas.setAttribute('name', 'estrellas');
                inputEstrellas.setAttribute('value', y);
                divClasificacion.appendChild(inputEstrellas)

                let label = document.createElement('label');
                label.setAttribute('for', 'radio' + x);
                label.innerHTML = y+'★';
                divClasificacion.appendChild(label);
                inputEstrellas.addEventListener("click", puntuacion);
            }
            idLabelPtos += 5;
            formPuntuacion.appendChild(divClasificacion);

            


            // Lo anyadimos
            fallaValencia.appendChild(imgFalla);
            fallaValencia.appendChild(textoFalla);
            divPuntuacion.appendChild(formPuntuacion)
            fallaValencia.appendChild(divPuntuacion);
            fallaValencia.appendChild(botonUbi);
            botonUbi.addEventListener("click", ubicacion);

            document.querySelector("resultados").appendChild(fallaValencia);
        });
        // Establecemos el listado en la Web
    });
}

function mostrarFallas() {
    let seciones = document.getElementById("seccionFallas");


}


function filtroSectionI(elemento) {
    //primero
    //selecionamos la opcion del select 
    let seccioncita = document.querySelector("select").value;
    //devuelve el elemento de la seccion seleccionada
    return elemento.properties.seccion_i.startsWith(seccioncita);
}

function filtroSection(elemento) {
    //primero
    //selecionamos la opcion del select 
    let seccioncita = document.querySelector("select").value;
    //devuelve el elemento de la seccion seleccionada
    return elemento.properties.seccion.startsWith(seccioncita);
}

function init() {
    document.querySelectorAll("input[type=radio]").forEach(radio => {
        radio.addEventListener("click", buscar); 
    });
 
    // Binding de los eventos correspondientes.
    document.querySelector("select").addEventListener("change", buscar);
    // Click en el boton de buscar
    /*  document.querySelector(`input[type="button"]`).addEventListener("click",buscar);
     // Texto cambia en el <input>
     document.querySelector(`input[type="text"]`).addEventListener("input",toUpp); */
     buscar();
    
}

// The mother of the lamb.
window.onload = init;

