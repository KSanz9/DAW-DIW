window.onload = function(){

    let boton =  document.getElementsByClassName("boton");

    for (let i = 0; i < boton.length; i++) {

        boton[i].addEventListener("click", sombraBoton);
        
    }
    

    function sombraBoton(evento){
        //el valor que clickamos
        var numeroReal=this.innerText;
        let simbolos = ["+","-","*","%","/"];

        //si no es un numero no entra para imprimir numero.
        if(!isNaN(numeroReal)){
         for (var num = 0; num < 10; num++) {

            if(numeroReal==num){
                cambiarTexto(num);
            }
            
          }
        }

        //si es una coma pone en la cadena una coma.
        if(this.innerText==(".")){
            cambiarTexto(".");
        }
        
        if(this.innerText==("«")){
            retroceder();
       }

    if(simbolo(numeroReal)){

       if(this.innerText==("+")){
           cambiarTexto("+");
          }
       if(this.innerText==("-")){
        cambiarTexto("-");
        }
        if(this.innerText==("x")){
            cambiarTexto("x");
        }
        if(this.innerText==("%")){
            cambiarTexto("%");
        }
        if(this.innerText==("/")){
            cambiarTexto("/");
        }
       

    }

    if(this.innerText==("=")){
        calcular("=");
        
    }
    if(this.innerText==("()")){
        cambiarTexto("()");
    }
    if(this.innerText=="C"){
        reset()
    }   
    }

    function reset(){
        var texto = document.getElementById("texto");
        texto.setAttribute("value", "0");
    }

    function calcular(){

        var texto = document.getElementById("texto");
        var value = texto.getAttribute("value");

        texto.setAttribute("value", eval(value));

    }

    function simbolo(real){

        var simboloReal = false;

        //compruebo si el ultimo digito, es decir el boton que clicamos es un digito
        if(real == "+" | real == "-" | real == "x" | real == "%" | real == "/"){

            var texto = document.getElementById("texto");
            var value = texto.getAttribute("value");

            //obtengo el penultimo digito para comprobar con el real, si los dos son un digito confirm es false y no inserta otro simbolo.
            //si el penultimo no es un simbolo inserta un simbolo

            var penUltimoDigito = value.substr(value.length-1,1)

            if(penUltimoDigito != "+" && penUltimoDigito != "-" && penUltimoDigito != "x" && penUltimoDigito != "%" && penUltimoDigito != "/" ){
                simboloReal = true;
            }
        }
        return simboloReal;

    }

    function retroceder(){
        var texto = document.getElementById("texto");
        var value = texto.getAttribute("value");
        if(value.length!=1){
          texto.setAttribute("value", value.substring(0,value.length-1));
        }else{
            texto.setAttribute("value",0);
        }
    }


    function cambiarTexto(pantalla){
       var texto = document.getElementById("texto");
       var value = texto.getAttribute("value");

    if(pantalla=="."){
          if(value.indexOf(",") != -1){
              //alert("como contiene , no insertamos otra");
        }else{
            //insertamos ,
            texto.setAttribute("value", value+",");
        }
    }else{
           if(value==0){
               if(!isNaN(pantalla)|pantalla==0){
                texto.setAttribute("value", pantalla);
               }else{

                texto.setAttribute("value", aux+pantalla);
               }
              
             }else{
                  texto.setAttribute("value", aux+pantalla);
            }
    }
    }





};
