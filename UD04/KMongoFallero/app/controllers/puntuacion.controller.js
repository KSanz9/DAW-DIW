const Puntuacion = require('../models/puntuacion.model.js');

// Obtener todos los puntuaciones
exports.findAll = (req,res) => {

    //console.log(" Todas las puntuaciones via API");
    //console.log(Puntuacion);
    Puntuacion.find().then(puntuaciones=>{
        console.log(puntuaciones);
        res.send(puntuaciones);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || " Algo fue mal mientras los capturabamos a todos"
        });
    });

};


// Crear y salvar
exports.create = (req,res)=>{

    // Validamos el puntuacion
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"puntuacion Vacio..." 
        });
    }

    console.log(req.connection.remoteAddress);

    const puntuacion = new Puntuacion({
        idFalla: req.body.idFalla || "idFallaVacio",
        ip: req.connection.remoteAddress.split(":")[3]|| "127.0.0.1",
        puntuacion: req.body.puntuacion|| 42
    })

    console.log(puntuacion);
    puntuacion.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Something was wrong creating puntuacion"
        });
    });
};


// Obtener una 
exports.findFallasPuntuaciones = (req,res) => {

    //console.log(" Todas las puntuaciones via API");
    //console.log(Puntuacion);

    Puntuacion.find( { idFalla : req.params.idFalla }).then(puntuaciones=>{
        console.log(puntuaciones);
        res.send(puntuaciones);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || " Algo fue mal mientras los capturabamos a todos"
        });
    });

};