
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
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar cabeceras y cors
app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();

});

app.get('/', (req, res) => {
    // res.end('Bienvenidos al server de mi CRUD')

    res.status(200).send({
        message: "Hola mundo desde mi API de NodeJS"
    });
});

// config server
const port = 5000;

app.listen(port, () => {
    console.log('El server está corriendo correctamente');
});

