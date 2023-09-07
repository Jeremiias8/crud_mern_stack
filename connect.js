const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objectbd = mongoose.connection

objectbd.on('connected', () => { console.log('Conexión correcta a MongoDB') })
objectbd.on('error', () => { console.log('Error al conectarse a MongoDB') })

module.exports = mongoose