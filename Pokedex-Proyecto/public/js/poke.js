const urlPoke = "https://pokeapi.co/api/v2/pokemon?limit=151";
let jsonPokemon;
window.onload = init();




function init(){
    conseguirPokedex();
    setTimeout(darEventos,1000);
}

function filtroPokemon(poke){
    if(!poke.name) return true;
    return poke.name.indexOf(document.getElementById("busquedaPokemon").value)!=-1;

}

function escribeFiltra(){
    cargarPokemons(jsonPokemon.results.filter(filtroPokemon));
}

function conseguirPokedex(){
    const fetchPokedex = fetch(urlPoke);
  
    fetchPokedex.then(respuesta => {
  
      return respuesta.json();
  
    }).then(resposte => {
       jsonPokemon = resposte;
       cargarPokemons(jsonPokemon.results);
    })  
  }

  function cargarPokemons(jsonPokes){
    console.log(jsonPokes);
            
    let pokemons = document.getElementById("Pokemon");
    pokemons.innerHTML="";

    jsonPokes.forEach(element => {
         var poke = document.createElement("p");
         poke.textContent = element.name;
         pokemons.appendChild(poke);
         poke.addEventListener("click", mostrarPokemon);
     });

  }

  function mostrarPokemon(e){
      let mostrar = document.getElementById("PokemonMuestra");
        console.log(e.target.innerHTML);
      mostrar.style.backgroundImage = "../img/pantallaPokedex.jpg";
  }

function darEventos(){
    document.getElementById("cargando").style.display = "none";
    document.getElementById("contenedorPrincipal").style.display= "inherit";

    let search = document.getElementById("busquedaPokemon");
    let boton = document.getElementById("botonPokemon");
    search.addEventListener("change",escribeFiltra);

    // un ("change", buscar)
    // en buscar tendria que hacer un filter
    // let pokemonesMostrando = jsonPokemon.filter((pokemon) => pokemon.name.contains(ev.target.value))
    // pokemonesMonstrando.forEach()


}
