function buildGrafico(){
      //Seleccionamos el lienzo
      const lienzo = document.querySelectorAll("canvas")[0];
      
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
  
      //datosGeneralesS pasados
      const datosGeneralesSGenerales = [
          {clave:clave1,valor:valor1,color:"red"},
          {clave:clave2,valor:valor2,color:"blue"},
          {clave:clave3,valor:valor3,color:"green"},
          {clave:clave4,valor:valor4,color:"black"}
      ];
  
      //valor total
      const valorTotal = datosGeneralesSGenerales.reduce((suma,{valor})=>suma+valor,0);
      
  
      //Limpiamos el ctx
      ctx.clearRect(0, 0, 500, 500);

      circulo(ctx,lienzo,valorTotal,datosGeneralesSGenerales);

/////////////////////////////////////////////////////////////////////////////////////////////

      const lienzo2 = document.querySelectorAll("canvas")[1];
      let ctx2 = lienzo2.getContext("2d");
      ctx2.clearRect(0, 0, 500, 500);

      barras(ctx2,lienzo2,valorTotal,datosGeneralesSGenerales);

      
}



function circulo(ctx,lienzo,valorTotal,datosGenerales){

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
        

        ctx.beginPath();
        ctx.font = "20px ";
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


function barras(ctx,lienzo,valorTotal,datosGenerales){

    let width = 20;
    let x = 20;

    datosGenerales.forEach(dato => {
        //Dibuja la barra
        ctx.fillStyle = dato.color;
        let calcuAltura = Math.round(lienzo.width*dato.valor/(valorTotal+20));
        ctx.fillRect(x,lienzo.height-calcuAltura,width,dato.valor);        

        ctx.font = '20px serif';
        ctx.fillText(dato.valor,x,lienzo.height-calcuAltura-30);
        ctx.closePath();

        x += width;
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