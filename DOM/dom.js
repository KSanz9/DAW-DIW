/* Hace un circulo cuando pasas el raton por encima */
function circulos(Cuadrado) {
    Cuadrado.style.transition = "0.2s";
    setTimeout(function() { Cuadrado.style.borderRadius = "160px" }, 200);


}
/* Quita el circulo cuando quitas el raton de encima */
function noCirculo(Cuadrado) {
    Cuadrado.style.borderRadius = "";

}
/* pierde la sombra al mantener el click del raton */
function perdersombra(sombra) {
    sombra.style.boxShadow = "0 0 0 0";
}
/* cuando dejas de mantener el raton recuperar la sombra */
function recuperarsombra(sombra) {
    sombra.style.boxShadow = "3px 4px 5px black";
}
/* mete sombra a la figura interiormente */
function sombraInterior(sombradentro) {
    sombradentro.style.boxShadow = "inset 3px 4px 5px black";
    sombradentro.style.borderRadius = "160px";
    sombradentro.onmouseout = "";
    sombradentro.onmousedown = "";
    sombradentro.onmouseup = "";

}
/* elimina tanto el div de las cajas como los botones enlazados a ellos */
function eliminarCaja(borrar, color) {
    /* caja */
    var caja = document.getElementById(color);
    var padre = caja.parentNode;
    caja.style.transition = "width 0.5s";
    caja.style.width = "0px";
    setTimeout(function() { padre.removeChild(caja) }, 400);

    /* boton*/
    var borrarPadre = borrar.parentNode;
    borrarPadre.removeChild(borrar);
}