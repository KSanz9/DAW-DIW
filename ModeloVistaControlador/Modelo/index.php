<?php
    function listaProductos(){
        //Conexión 
        $link = mysqli_connect('localhost', 'miusuario','mipassword', 'bdprueba');        //consulta
        $result = mysqli_query($link, 'SELECT nombre, coste FROM productos');

        if (!$link) {
            echo "conexion fallida";
        }


        $productossArray = array();

        while ($fila = mysqli_fetch_array($result)){
           // echo $fila['nombre'];
            $productossArray[] = $fila;
        }


        //crr la cnx
        mysqli_close($link);
        
        return $productossArray;

    }






?>