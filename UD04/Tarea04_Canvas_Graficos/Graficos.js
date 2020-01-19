function buildGrafico(){
      //Seleccionamos el lienzo
      const lienzo = document.querySelector("canvas");
    
      //Seleccionamos el ctx
      let ctx = lienzo.getContext("2d");
  
      //Claves
      clave1 = document.querySelectorAll("input")[0].value;
      clave2 = document.querySelectorAll("input")[2].value;
      clave3 = document.querySelectorAll("input")[4].value;
      clave4 = document.querySelectorAll("input")[6].value;
      
  
      //Valores
      valor1 = parseInt(document.querySelectorAll("input")[1].value);
      valor2 = parseInt(document.querySelectorAll("input")[3].value);
      valor3 = parseInt(document.querySelectorAll("input")[5].value);
      valor4 = parseInt(document.querySelectorAll("input")[7].value);
  
      //Datos pasados
      const datosGenerales = [
          {clave:clave1,valor:valor1,color:"red"},
          {clave:clave2,valor:valor2,color:"blue"},
          {clave:clave3,valor:valor3,color:"green"},
          {clave:clave4,valor:valor4,color:"yellow"}
      ];
  
      //valor total
      const valorTotal = datosGenerales.reduce((suma,{valor})=>suma+valor,0);
      
  
      //Limpiamos el ctx
      ctx.clearRect(0, 0, 500, 500);

      tarta(ctx,lienzo,valorTotal,datosGenerales);
}



function tarta(ctx,lienzo,valorTotal,datosGenerales){

    var ctxX = lienzo.width / 2
    var ctxY = lienzo.height / 2;

    let ap = 0;   

    datosGenerales.forEach(dato => {
        ctx.fillStyle=dato.color;
        ctx.beginPath();
        ctx.lineTo(ctxX,ctxY);
        let valorFinal = (2 * Math.PI * dato.valor) / valorTotal;
        ctx.arc(ctxX, ctxY, 100, ap, ap+valorFinal);
        ctx.fill();
        

        //Añadimos las etiquetas
        ctx.beginPath();
        ctx.font = "20px Helvetica, Calibri";
        ctx.textAlign = "center";
        ctx.fillStyle=dato.color;    
        angulo = (ap + valorFinal) / 1;

        let AnguloY = Math.sin(angulo) * 1.5 * 100;
        let AnguloX = Math.cos(angulo) * 1.5 * 100;

        ctx.fillText(dato.valor, AnguloX+ctxX, AnguloY+ctxY);
        ctx.closePath();

        ap += valorFinal;

        
    });
}
function loadListeners(){
    document.querySelector("input[name='grafiqueame']").addEventListener("click",buildGrafico);
}


function init(){
    console.log(" * Init ");
    loadListeners();
    
}

window.onload=init;