// Simple script to use with datosAbiertos

// fuente : Angel Berlanas Vicente
//         <berlanas_ang@gva.es>
// This script is licensed under GPLv3 or higher


// Algunos valores
var json;
const fuentesUrl = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON ";
let sel = document.querySelector("select");
let idLabelPtos = 0;
var cordX;
var cordY;

// Esta es la funcion de filtrado para
// obtener tan solo los elementos que cumplen
// una serie de requisitos.
// Pasa a mayuscula el texto de propio input
// se lanza cada vez que se realiza una insercion en
// el texto del nombre.
function puntuacion() {

    let url = '/api/puntuaciones';
    console.log(this.dataset.idFalla);
    let data = { idFalla: this.dataset.idFalla, ip: '', puntuacion: this.dataset.puntuacion };

    console.log(data);

    fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));


        mostrarPuntuacion(this.dataset.idFalla);

}

function mostrarPuntuacion(falla){
    let url = '/api/puntuaciones/'+falla;
    let puntuacionFinal=0;
    fetch(url, {
            method: 'GET', // or 'PUT'
            body: JSON.stringify(), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
        let contadorPuntuacion=0;
        let mediaPuntuacion=0;
        console.log(contadorPuntuacion);

        response.forEach( puntuacionMedia =>{
            mediaPuntuacion+=puntuacionMedia.puntuacion;
            contadorPuntuacion++;  
        });
        
        puntuacionFinal = mediaPuntuacion/contadorPuntuacion;
        console.log(puntuacionFinal);

        puntuacionFinal = Math.trunc(puntuacionFinal);
        console.log(puntuacionFinal);
        let rFalla = document.getElementById("falla"+falla);
        let puntu = rFalla.querySelector("puntuacion");
        let labelP = puntu.querySelector('label');
        switch (puntuacionFinal) {
            case 1:
                    labelP.innerHTML ='★';
                    puntu.appendChild(labelP);
                    puntu.classList.add("puntuacion");
                break;
            case 2:
                    labelP.innerHTML ='★★';               
                    puntu.appendChild(labelP);
                    puntu.classList.add("puntuacion");

                 break;
            case 3:
                    labelP.innerHTML ='★★★';         
                    puntu.appendChild(labelP);
                    puntu.classList.add("puntuacion");

                break;
            case 4:

                    labelP.innerHTML ='★★★★';
                    puntu.appendChild(labelP);
                    puntu.classList.add("puntuacion")
                break;
            case 5:

                    labelP.innerHTML ='★★★★★';
                    puntu.appendChild(labelP);
                    puntu.classList.add("puntuacion");

                break;
        }

        });
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
    document.body.appendChild(ubi);


    var firstProjection = '+proj=utm +zone=30 +ellps=GRS80 +units=m +no_defs';
    var secondProjection = "+proj=longlat +ellps=WGS84 +datum=WGS84 +units=m +no_defs";

    var coordChung = new Array(); 
    coordChung[0] = parseFloat(this.dataset.ubiX);
    coordChung[1] = parseFloat(this.dataset.ubiY); 
    //I'm not going to redefine those two in latter examples.
    let arrayCoordenadas = proj4(firstProjection,secondProjection,coordChung); 
    
  /*  var urlMap = "https://www.openstreetmap.org/#map=15/"+arrayCoordenadas[1]+"/"+arrayCoordenadas[0];
    //console.log("Mapa"+urlMap);

    //iFrame
    ubi.innerHTML = '<iframe class="mapa" src="'+urlMap+'"></iframe>';*/
    
    var map = document.createElement("div");
    map.classList.add("mapa");
    
    var mapa = L.map('mapa').
     setView([arrayCoordenadas[1], arrayCoordenadas[0]],
     15);

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
    }).addTo(mapa);

    L.control.scale().addTo(mapa);

    L.marker([arrayCoordenadas[1], arrayCoordenadas[0]],{draggable: true}).addTo(mapa);



    map.appendChild(mapa);
    ubi.appendChild(map);
    ubi.addEventListener("click", cerrarUbicacion);



}
function cerrarUbicacion(){
    var elemento = document.getElementsByClassName("ubicacion")[0];
    document.body.removeChild(elemento);
}

function buscar() {
    document.querySelector("resultados").innerHTML = "";
    let cont=0;
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


       
        /////////////////////////////////////////////////////////////////////
        let filtroSecciones = document.querySelector("select").value;
        let resultado;
        //console.log(filtroSecciones);
        let radio = document.querySelector("input[name=tipoFalla]:checked");
       
        //filtro para el select ///mover esto a una función
        if(radio.value == "Principal"){
            if (filtroSecciones == "Todas") {
                resultado = respuesta.features;
            } else {
                resultado = respuesta.features.filter(filtroSection);
            }

        }else{
            if (filtroSecciones == "Todas") {
                resultado = respuesta.features;
            } else {
                resultado = respuesta.features.filter(filtroSectionI);
            }


        }
        secciones(radio.value);


        ///////////////////////////////////////////////////////////////
        // Una vez tenemos el listado filtrado pasamos a crear
        // cada uno de los  que representan
        var img;
        
        // Por cada uno de ellos 
        resultado.forEach(falla => {
            let fallaValencia = document.createElement("div");
            fallaValencia.id = "falla"+falla.properties.id;
            let textoFalla = document.createElement("p");
            let imgFalla = document.createElement("img");
            let botonUbi = document.createElement("button")
            let nDivP = document.createElement("puntuacion");
            let labelP = document.createElement("label");
            let divPuntuacion = document.createElement("div");
            let formPuntuacion = document.createElement("form");

            // Insertamos los campos ocultos para pasar el ID

            /* let inputHiddenIdFalla = document.createElement("input");
            inputHiddenIdFalla.type="hidden";
            inputHiddenIdFalla.name="idFalla";
            inputHiddenIdFalla.value=falla.properties.id; */

            nDivP.appendChild(labelP);


            let divClasificacion = document.createElement("p");
            // Creamos un img y el texto de la falla
            if(radio.value == "Principal"){img = falla.properties.boceto;}else{img = falla.properties.boceto_i;}
            imgFalla.src = img;
            textoFalla.innerText = falla.properties.nombre;

            // console.log(falla.properties);
            //elementos para el boton
            botonUbi.type = 'button';
            botonUbi.innerText = 'Ubicacion';
            botonUbi.dataset.ubiX = json.features[cont].geometry.coordinates[0];
            botonUbi.dataset.ubiY = json.features[cont].geometry.coordinates[1]; 
            
            cont++;            


            //puntuaciones
            for (let x = idLabelPtos, y = 5; x < idLabelPtos + 5; x++ , y--) {
        
                let inputEstrellas = document.createElement("input");
                inputEstrellas.setAttribute('id', 'radio' + x);
                inputEstrellas.setAttribute('type', 'radio');
                inputEstrellas.setAttribute('name', 'estrellas');
                inputEstrellas.setAttribute('value', y);
                inputEstrellas.dataset.idFalla = falla.properties.id;
                inputEstrellas.dataset.puntuacion = y;
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
            fallaValencia.appendChild(nDivP);
            fallaValencia.appendChild(botonUbi);
            fallaValencia.classList.add("cajaPrincipal");
            botonUbi.addEventListener("click", ubicacion);
            document.querySelector("resultados").appendChild(fallaValencia);
        });
        // Establecemos el listado en la Web

    });
    console.log(json);

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

