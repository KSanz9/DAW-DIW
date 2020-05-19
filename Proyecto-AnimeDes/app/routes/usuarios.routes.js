const express  = require("express");
const router   = express.Router();

const usuarios = require('../controllers/usuarios.controller.js');

    // Create a new user
    router.post('/create', usuarios.create);

    // Retrieve all investigadores
    router.get('/list', usuarios.findAll);

    // Retrieve a single investigadores with investigadorId
    //router.get('/investigadores/:investigadorId', investigadores.findOne);

    // Update a investigadores with investigadorId
    //router.put('/investigadores/:investigadorId', investigadores.update);

    // Delete a investigadores with investigadorId
    //router.delete('/investigadores/:investigadorId', investigadores.delete);

    module.exports = router;