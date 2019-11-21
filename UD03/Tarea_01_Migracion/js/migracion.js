/*

This Script is licensed under GPL v3 or higher

Author: Angel Berlanas Vicente
email : <berlanas_ang@gva.es>

*/

/*

FUNCIONES PERDIDAS
^(;,;)^
*/
function migracionFase(event){
    console.log("hola");
    var stepNum = parseInt(document.querySelector(event.target.dataset.step)+1);
    var stepEvent = document.querySelector(`[data-step="${stepNum}"]`);
    if(stepNum < 19){
        stepEvent.addEventListener("transitioned", migracionFase);
        stepEvent.classList.add("estabaEscondido"); 

    }

    

}



function startMigration(){
  

    let stepdata = document.querySelector('[data-step="1"]'); 
    stepdata.addEventListener("transitioned", migracionFase);
    stepdata.classList.add("estabaEscondido"); 

    // Fragmentos perdidos
    
}

function init(){
    console.info(" * Init envirnoment ");

    // Set click function on button
    document.querySelector("button").addEventListener("click",startMigration);
}

// Init the environment when all is ready
window.onload=init;
