const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares
// Novedades sobre Express 4.16

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Nos conectaremos a la base de datos
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Conectando en si mismo
mongoose.connect(dbConfig.url,{
    useNewUrlParser:true}).then(()=>{
        console.log(" * Cargada y preparada");
    }).catch(err => {
        console.log(" Algo ha pasado...saliendo : ",err);
        process.exit();
    });



const port = process.env.PORT || 3000; // set our port

app.use("/", express.static(__dirname + "/public"));

// Require Usuarios routes
app.use("/api/usuarios",require("./app/routes/usuarios.routes.js"));


app.listen(port, function () {
  console.log("AnimeDes - En Marcha en el puerto : "+port);
});



