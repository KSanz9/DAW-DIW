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
    //console.log(jsonPokemon.results.filter(filtroPokemon));
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
         poke.textContent = element.name.toUpperCase();
         pokemons.appendChild(poke);
         

         poke.id = poke.innerText.toLowerCase();
         poke.addEventListener("click", mostrarPokemon);
         poke.addEventListener("mouseover", mostrarSprites);
         poke.addEventListener("mouseout", quitarSprites);
     });

  }

  function cargarSprites(urlSprite){

      return fetch(urlSprite)
      .then(respuesta => {
          return respuesta.json();
      }).then(newRespuesta =>{
          //console.log(newRespuesta.sprites.front_default);
          return newRespuesta.sprites.front_default;
      })

  }


  function mostrarPokemon(e){
      let mostrar = document.getElementById("PokemonMuestra");
        console.log(e.target.innerHTML);
  }

  async function mostrarSprites(e){
    
    console.log(e.target.id);
    var img;
   /*  jsonPokemon.results.forEach(element =>{
      if(element.name == e.target.id ){
        const newUrl = element.url;
        img = cargarSprites(newUrl);
      }
    }); */

    for (let index = 0; index <  jsonPokemon.results.length; index++) {
      if(jsonPokemon.results[index].name == e.target.id ){
        const newUrl = jsonPokemon.results[index].url;
        img = await cargarSprites(newUrl);
      }
    }
      let divSprite = document.createElement("div");
      divSprite.id = "imgDivhover";
      let imgSprite = document.createElement("img");
      imgSprite.src = img;

      divSprite.appendChild(imgSprite);

      e.target.appendChild(divSprite);


  }


  function quitarSprites(e){
    console.log(e.target.children[0])
    e.target.children[0].remove();
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
