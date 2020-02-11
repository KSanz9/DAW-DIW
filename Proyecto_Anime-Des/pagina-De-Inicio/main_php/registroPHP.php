<?php
    $servidor = "localhost";
    $username = "admin";
    $password = "admin";
    $basedatos = "animeDES";

    $conn = mysqli_connect($servidor, $username, $password, $basedatos);

    if (!$conn) {
        die("Conexi&ocacuten fallida: " . mysqli_connect_error());
    }
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $contra = $_POST["contrasenya"];

    #Comprobamos si existe primero el usuario

    $SQLconsultaUsuario = "SELECT nombre, email From usuariosRegistrados where nombre = $nombre and email = $email";
    $result=mysqli_query($SQLconsultaUsuario,$conn);

    if($result == true){
        echo "ya existe un usuario con ese nombre y ese email";
    }
    else{

    $consulta = "INSERT INTO usuariosRegistrados VALUES(NULL,'".$nombre."','".$email."','".$contra."');";
    echo $consulta;
    $result = mysqli_query($conn, $consulta);
    if ($result==TRUE){
        echo "oK";
    }
    else{   
        # La siguiente función muestra el último error, en caso
        # de haberlo.
        echo mysqli_error($conn);
        die ("Hubo un error");
    }   
    }

    mysqli_close($conn);
