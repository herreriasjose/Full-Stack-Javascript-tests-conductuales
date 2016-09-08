// index.js

var express = require('express'); 
var aplicacion = express();



aplicacion.use(express.static(__dirname + '/publico'));



var servidor = aplicacion.listen(8080,function() {
	console.log("Estoy escuchando en el puerto 8080")
	});
