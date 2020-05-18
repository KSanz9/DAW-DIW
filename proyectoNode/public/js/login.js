window.onload=init;


function init(){
    registro();    


}


function registro(){
  let botonRegistro = document.getElementsByClassName("registro")[0];
    console.log(botonRegistro);
   botonRegistro.addEventListener("click", function(){
    console.log("adsad");
       document.getElementById("registro").style.display="none";
       document.getElementById("form").style.display="inline";

   });


}