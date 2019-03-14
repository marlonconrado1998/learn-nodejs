var express = require('express'); // <- Librería para crear un pequeño servidor en node js
var bodyParser = require('body-parser') // <- Librería para permitir que se envien cuerpos por el método post
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // Parsea el body de solicitudes post a json

// Conjunto de rutas con diferentes métodos http
app.get('/mundo/obtener/:nombre/:apellido', function (req, res) {
    let params = req.params;
    res.send(params);
});

app.post('/mundo/crear', function (req, res) {
    let body = req.body;
    res.send(body);
});

app.put('/mundo/actualizar/:id', function (req, res) {
    let id = req.params.id;
    let body = req.body;
    res.json({ id, body });
});

app.delete('/mundo/eliminar/:id', function (req, res) {
    let id = req.params.id;
    res.send(id);
});

// Aquí levantamos el servidor en el puerto 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});