const urlPoke = "https://pokeapi.co/api/v2/pokemon?limit=151";
let jsonPokemon;
window.onload = init();




function init() {
  conseguirPokedex();
  setTimeout(darEventos, 1600);
}

function filtroPokemon(poke) {
  if (!poke.name) return true;
  return poke.name.indexOf(document.getElementById("busquedaPokemon").value) != -1;

}

function escribeFiltra() {
  //console.log(jsonPokemon.results.filter(filtroPokemon));



  cargarPokemons(jsonPokemon.results.filter(filtroPokemon));
}

function conseguirPokedex() {
  const fetchPokedex = fetch(urlPoke);

  fetchPokedex.then(respuesta => {

    return respuesta.json();

  }).then(resposte => {
    jsonPokemon = resposte;
    cargarPokemons(jsonPokemon.results);
  })
}




function cargarPokemons(jsonPokes) {
  console.log(jsonPokes);

  let pokemons = document.getElementById("Pokemon");
  pokemons.innerHTML = "";
  var numPokedex = 1;
  jsonPokes.forEach(element => {
    var poke = document.createElement("div");
    poke.classList = "pokes"
    var pokem = document.createElement("p");

    pokem.textContent = element.name.toUpperCase();

    poke.appendChild(pokem);
    pokemons.appendChild(poke);
    mostrarSprites(poke);

    poke.id = poke.innerText.toLowerCase();
    poke.classList = numPokedex;

    poke.children[0].addEventListener("click", mostrarPokemon);
  });

}

function cargarSprites(urlSprite) {

  return fetch(urlSprite)
    .then(respuesta => {
      return respuesta.json();
    }).then(newRespuesta => {
      return newRespuesta.sprites.front_default;
    })

}


async function mostrarPokemon(e) {


  console.log(e.target.parentNode);


  let pokemons = document.getElementById("Pokemon");


  let MostarDatos = document.createElement("div");
  MostarDatos.id = "PokemonMuestra";

  let imgDatos = document.createElement("div");
  imgDatos.id = "imgDiv";

  pokemons.innerHTML = "";

  document.getElementById("cargando").style.display = "inherit";

  await colocarPokemon(e.target.parentNode, MostarDatos);

  document.getElementById("cargando").style.display = "none";


  MostarDatos.appendChild(imgDatos);
  document.getElementById("Pokemon").appendChild(MostarDatos);
  
}

async function colocarPokemon(evento, datos) {
  let imgPokemon;
  let nombrePokemon;
  let typesPokemon;
  let movesPokemon;
  let numeroPokedex;
  imgPokemon = document.createElement("img");
  imgPokemon.id = "imgPokemonColocado";

  nombrePokemon = document.createElement("p");
  nombrePokemon.id = "nombrePokemonColocado";

  typesPokemon = document.createElement("div");
  typesPokemon.id = "typePokemonColocado";

  movesPokemon = document.createElement("div");
  movesPokemon.id = "movesPokemonColocado";

  numeroPokedex = document.createElement("p");
  numeroPokedex.id = "numeroPokedex";


  numeroPokedex.innerText = "#" + evento.classList[0];
  datos.appendChild(numeroPokedex);

  imgPokemon.src = evento.childNodes[1].src;
  datos.appendChild(imgPokemon);

  nombrePokemon.innerText = evento.childNodes[0].innerHTML;
  datos.appendChild(nombrePokemon);

  await datosAdicionales(nombrePokemon.innerText.toLowerCase(),typesPokemon, movesPokemon, datos);


  console.log();
}
async function datosAdicionales(nombre, types, moves, dato){
  var tipos;
  var movimientos;
  for (let index = 0; index < jsonPokemon.results.length; index++) {
    if (jsonPokemon.results[index].name == nombre) {
      const newUrl = jsonPokemon.results[index].url;
      tipos = await cargarTypos(newUrl);
      movimientos = await cargarMovimientos(newUrl);

    }
  }

    console.log(tipos,movimientos);

  for (let index = 0; index < tipos.length; index++) {
    var t = document.createElement("p");
    t.innerText = tipos[index].type.name; 
    types.appendChild(t);
  }
  dato.appendChild(types);
  console.log(types);

}

function cargarTypos(urlTypos){

  return fetch(urlTypos)
  .then(respuesta => {
    return respuesta.json();
  }).then(newRespuesta => {

    return newRespuesta.types;

    /* 
    return newRespuesta.sprites.front_default;
   */})

}


function cargarMovimientos(urlMove){

  return fetch(urlMove)
  .then(respuesta => {
    return respuesta.json();
  }).then(newRespuesta => {
    return newRespuesta.moves;

    /* 
    return newRespuesta.sprites.front_default;
   */})

}


async function mostrarSprites(e) {
  var img;

  for (let index = 0; index < jsonPokemon.results.length; index++) {
    if (jsonPokemon.results[index].name == e.innerText.toLowerCase()) {
      const newUrl = jsonPokemon.results[index].url;
      img = await cargarSprites(newUrl);
    }
  }
  let imgSprite = document.createElement("img");
  imgSprite.id = "imgDivhover"
  imgSprite.src = img;

  e.appendChild(imgSprite);


}

function darEventos() {
  document.getElementById("cargando").style.display = "none";
  document.getElementById("contenedorPrincipal").style.display = "inherit";
  let logo = document.getElementsByClassName("logoTexto")[0];
  logo.addEventListener("click", init);

  let search = document.getElementById("busquedaPokemon");

  search.addEventListener("change", escribeFiltra);

  // un ("change", buscar)
  // en buscar tendria que hacer un filter
  // let pokemonesMostrando = jsonPokemon.filter((pokemon) => pokemon.name.contains(ev.target.value))
  // pokemonesMonstrando.forEach()


}
