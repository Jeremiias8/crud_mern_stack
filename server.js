
const express = require('express');
const app = express();

// const mongoose = require('mongoose');

// import conexión MongoDB
const fileBD = require('./connect');

// import archivo rutas - model user
const rutausuario = require('./rutas/user');
app.use('/api/usuario', rutausuario);

// import bp
const bodyParser = require('body-parser');
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: 'true' }));

app.get('/', (req, res) => {
    res.end('Bienvenidos al server de mi CRUD')
});

// config server
app.listen(5000, function () {
    console.log('El server está corriendo correctamente');
});

