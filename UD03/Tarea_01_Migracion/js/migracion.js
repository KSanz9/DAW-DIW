/*
This Script is licensed under GPL v3 or higher
Author: Angel Berlanas Vicente
email : <berlanas_ang@gva.es>
*/

function time(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x); //funcion para hacer que se espere
        }, 10);
    });
}


async function progressBar(stepEvent,stepNum) {
    var Newstep = document.querySelectorAll('[data-step]');
    var cont = 0;
    
    for (let i = 0; i <= 100; i++) { 
            await time(0);
        
        stepEvent.setAttribute('value', +i);
    }

    stepNum++;


}

function migracionFase(event){
    var stepNum = parseInt(event.target.dataset.step)+1;
    var stepEvent = document.querySelector(`[data-step="${stepNum}"]`);
    if(stepNum < 19){
        stepEvent.addEventListener("transitionend", migracionFase); 
        if (stepEvent.localName == 'progress') {
            stepEvent.classList.add("estabaEscondido");
            progressBar(stepEvent,stepNum);
        }else{
            stepEvent.classList.add("estabaEscondido");
        }
           
        
    }
}



function startMigration(){
    let stepdata = document.querySelector('[data-step="1"]'); 
    stepdata.addEventListener("transitionend", migracionFase);

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
