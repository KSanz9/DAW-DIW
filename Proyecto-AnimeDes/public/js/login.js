window.onload=init;

function init(){
  console.log("sjdnua<db");
    cargarEventos();    
}
function cargarEventos(){
  //Mostrar el formulario para registrarse
  document.querySelector("#registro").addEventListener("click", mostrarForm);
  // Boton de registrar
  document.querySelector("#botRegistro").addEventListener("click",registraUsuario);
  

}
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
   
function mostrarForm(){
  document.querySelector("#registro").style.display="none";
  document.querySelector("#form").style.display="inline";







}