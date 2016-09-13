// index.js

var express = require('express'); 

var body_parser = require('body-parser');
var mongoose = require('mongoose');

var aplicacion = express();

var esquemaVacio = new mongoose.Schema({}, { strict: false });
var Entrada = mongoose.model('Entry', esquemaVacio);


aplicacion.use(express.static(__dirname + '/publico'));

aplicacion.use(body_parser.json());

aplicacion.post('/resultado-del-test', function(request, response) {
	Entrada.create({
        "data":request.body
    }); 
	response.end();
})

mongoose.connect('mongodb://localhost/jspsych');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error conectando con la base de datos'));
db.once('open', function callback() {
    console.log('Conectado a la base de datos');
});

var servidor = aplicacion.listen(8080,function() {
	console.log('Estoy escuchando en el puerto 8080')
	});



