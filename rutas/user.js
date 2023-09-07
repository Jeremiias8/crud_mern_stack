const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
});

const ModelUser = mongoose.model('users', eschemausuario);
module.exports = router


router.get('/', (req, res) => {
    res.end('Saludo de carga desde test route')
}); 


// Agregar user
router.post('/agregar-usuario', (req, res) => {
    const nuevousuario = new ModelUser({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })

    nuevousuario.save(function(err) {
        if (!err) {
            res.send('Usuario agregado correctamente');
        } else {
            res.send(err);
        }
    })
})

// Obtener users
router.get('/obtener-usuario', (req, res) => {
    ModelUser.find({}, function (docs, err) {
        if (!err) {
            res.send(docs);
        } else {
            res.send(err);
        }
    })
})