import React, { Component } from 'react';
import logo from './pokeball.png';
import './App.css';
import logoTexto from './pokedex.png';
import logoPokedex from './pantallaPokedex.jpg'

const urlPoke = "https://pokeapi.co/api/v2/pokemon?limit=1000";
let jsonPokemon;

window.onload = init();


function init(){
  conseguirPokedex();
}


function conseguirPokedex(){
  const fetchPokedex = fetch(urlPoke);

  fetchPokedex.then(respuesta => {

    return respuesta.json();

  }).then(resposte => {
     jsonPokemon = resposte;
  }).then(()=> {console.log("He terminado de cargar el");
  });



}


class App extends Component {

buscarPokemonFiltro() {
  console.log(jsonPokemon.results);


}



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logoTexto}  className="App-logo-texto" alt="logoTexto" />      
          <img src={logo} className="App-logo" alt=" " />
        </div>
        <p className="App-intro">
          <input type="search" id="busquedaPokemon" name="srch"placeholder="Busqueda Pokemon" ></input>
          <button className="butonBusqueda" onClick={this.buscarPokemonFiltro}>Buscar</button>
        </p>

        <div id="Pokedex">
        {/*     <img src={logoPokedex} className="imgPoke" alt=" " />
             <div className="pokemon"></div>
            <div className="tipoPokemon"></div>
            <div id="atqUno" className="atqPokemon"></div>
            <div id="atqDos" className="atqPokemon"></div>
            <div id="atqTres" className="atqPokemon"></div> 

 */}

        </div>



      </div>
    );
  }
  
}


export default App;
