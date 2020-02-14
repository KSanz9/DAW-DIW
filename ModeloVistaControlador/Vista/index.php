<html>
    <head>
        <title>Tienda Virtual con PHP</title>
    </head>
    <body>
        <h1>Lista de la compra</h1>    
        <table>
            <tr><th>Producto</th><th>Precio</th></tr>
            <?php foreach ($productos as $productos): ?>
                <tr>
                <td><?php echo $productos['nombre']?></td>
                <td><?php echo $productos['coste']?></td>
                <td> <input type="button" value="Comprar"></td>
                </tr>

            <?php endforeach; ?>


        </table>


    </body>


</html>