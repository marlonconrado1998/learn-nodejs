var express = require('express'); // <- Librería para crear un pequeño servidor en node js
var bodyParser = require('body-parser') // <- Librería para permitir que se envien cuerpos por el método post
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Parsea el body de solicitudes post a json

// Aquí se llama a index de la carpeta route que a su vez está importando todas las rutas.
app.use(require('./routes/index.js'));

// Aquí levantamos el servidor en el puerto 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});