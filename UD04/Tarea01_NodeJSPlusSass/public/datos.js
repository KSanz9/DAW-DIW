
 let archivoJSON;

function buscarDatos() {

    let url = 'http://mapas.valencia.es/lanzadera/opendata/kioscos_once/JSON';
    let cadena;
    let busqueda = this.value.toUpperCase();
    let contenedorTabla = document.getElementById('tabla');
    var table = '<table>';
   

    if(busqueda.length == 0){
        
        contenedorTabla.innerHTML = ' ';

    }else{

        fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data.features[0].properties);
            for (let i = 0; i < data.features.length; i++) {
                cadena = acortarCadena(data.features[i].properties.direccion);
                if (cadena.substring(0, busqueda.length) == busqueda) {

                    table += '<tr><td>';
                    table += data.features[i].properties.direccion;
                    table += '</td><td>';
                    table += data.features[i].properties.centro;
                    table += '</td><td>';
                    table += data.features[i].properties.n_distrito;
                    table += '</td></tr>';
                }
            }

            table += '</table>';
            contenedorTabla.innerHTML = table;

        })
    }
}

function acortarCadena(cadena) {

    let newCadena = '';
    let puntoEncontrado = false;

    for (let i = 0; i < cadena.length; i++) {

        if (puntoEncontrado && cadena.charAt(i) != ' ') newCadena += cadena.charAt(i);

        if (cadena.charAt(i) == '.') puntoEncontrado = true;

    }

    return newCadena;
}





window.addEventListener('load', init);


function init() {


    document.getElementById('buscador').addEventListener('keyup', buscarDatos);

}