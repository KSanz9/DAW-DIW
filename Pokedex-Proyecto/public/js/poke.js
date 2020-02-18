const urlPoke = "https://pokeapi.co/api/v2/pokemon?limit=802";
let jsonPokemon;
window.onload = init();




function init() {
  conseguirPokedex();
  setTimeout(darEventos, 1800);
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
  var arrayPoke;
  let pokemons = document.getElementById("Pokemon");
  pokemons.innerHTML = "";
  var numPokedex = 1;
  jsonPokes.forEach(element => {
    var poke = document.createElement("div");
    poke.classList = "pokes"
    var pokem = document.createElement("p");

    pokem.textContent = element.name.toUpperCase();
    arrayPoke = element.url.split("/");
    poke.classList = arrayPoke[6];


    poke.appendChild(pokem);
    pokemons.appendChild(poke);
    mostrarSprites(poke);

    poke.id = poke.innerText.toLowerCase();

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




  let pokemons = document.getElementById("Pokemon");


  let MostarDatos = document.createElement("div");
  MostarDatos.id = "PokemonMuestra";
  pokemons.innerHTML = "";

  document.getElementById("cargando").style.display = "inherit";

  await colocarPokemon(e.target.parentNode, MostarDatos);

  document.getElementById("cargando").style.display = "none";


  document.getElementById("Pokemon").appendChild(MostarDatos);
  
}

async function colocarPokemon(evento, datos) {
  let imgPokemon;
  let nombrePokemon;
  let typesPokemon;
  let movesPokemon;
  let numeroPokedex;
  let pesoPokemon;
  let alturaPokemon;
  let nP = evento.childNodes[0].innerHTML;
  imgPokemon = document.createElement("img");
  imgPokemon.id = "imgPokemonColocado";

  nombrePokemon = document.createElement("p");
  nombrePokemon.id = "nombrePokemonColocado";

  typesPokemon = document.createElement("div");

  movesPokemon = document.createElement("div");
  movesPokemon.id = "movesPokemonColocado";

  numeroPokedex = document.createElement("p");
  numeroPokedex.id = "numeroPokedex";


  nombrePokemon.innerHTML = "Nombre: " + nP;
  datos.appendChild(nombrePokemon);

  imgPokemon.src = evento.childNodes[1].src;
  datos.appendChild(imgPokemon);

  numeroPokedex.innerHTML = "Nº: #" + evento.classList[0];
  datos.appendChild(numeroPokedex);

 

  await datosAdicionales(nP.toLowerCase(),typesPokemon, movesPokemon, datos);


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


  for (let index = 0; index < tipos.length; index++) {
    var t = document.createElement("p");
    t.innerText ="Tipo " +[index+1]+ " " + tipos[index].type.name;
    if(index == 0){
      t.id = "typePokemonColocadoOne";
    }else{
      t.id = "typePokemonColocadoTwo";
    }
    types.appendChild(t);
  }
  dato.appendChild(types);


  for (let index = 0; index < 4; index++) {
    var move = document.createElement("div");
    move.classList.add("movimientos");
    move.innerHTML = movimientos[index].move.name;
    moves.appendChild(move);
  }
  dato.appendChild(moves);
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
