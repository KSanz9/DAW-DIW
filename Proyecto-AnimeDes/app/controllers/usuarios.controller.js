const Usuario = require('../models/usuarios.model.js');

// Crear y salvar
exports.create = (req,res)=>{

    // Validamos el Investigador
    if (!req.body){
        console.log(req.body);
        return res.status(400).send({
           message:"Usuario Vacio..." 
        });
    }

    const usuario = new Usuario({
        nombre: req.body.nombre || "Usuario",
        email: req.body.email || "usuario@ejemplo.com",
        password: req.body.password|| "usuario"
    })

    usuario.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message|| "Something was wrong creating Usuario"
        });
    });
};


// Obtener todos los Usuarios
exports.findAll = (req,res) => {

    Usuario.find().then(usuarios=>{
        res.send(usuarios);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || " Algo fue mal mientras los capturabamos a todos"
        });
    });

};
