const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


const dbConfig = require('./config/database.config');

// Utilizaremos body-parser para "parsear lo que nos pidan"
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

// Paginas publicas (estaticas)
app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/',(req,res)=>{
    res.json({"message":"API de MongoFallero"});
});

// Require Puntuaciones routes
require('./app/routes/puntuaciones.routes.js')(app);

// Escuchemos en un puerto
app.listen(3000,() => {
    console.log(" * Miniserver UP and Running en http://localhost:3000");
});

