<?php

    //Requier model
    require_once('../Modelo/index.php');
    
    //extraer productos
    $productos = listaProductos();

    //requier vista
    require('../Vista/index.php');




?>