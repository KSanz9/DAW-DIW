window.onload=init;

function registraUsuario(ev){
    const nombre = document.querySelector("input[name='nombre']").value;
    const email = document.querySelector("input[name='email']").value;
    const password = document.querySelector("input[name='password']").value;

    let user = {
      nombre:nombre,
      email: email,
      password:password
    }

    let url = "/api/usuarios/create"
    console.log(user);

    fetch(url, {
      method: 'POST',
      body:  JSON.stringify(user),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));

}
   


function cargarEventos(){
  // Boton de registrar
  document.querySelector("#botRegistro").addEventListener("click",registraUsuario);
}


function init(){
    cargarEventos();
    registro();    
}


function registro(){
  let botonRegistro = document.getElementsByClassName("registro")[0];
   botonRegistro.addEventListener("click", function(){
       document.getElementById("registro").style.display="none";
       document.getElementById("form").style.display="inline";
   });


}