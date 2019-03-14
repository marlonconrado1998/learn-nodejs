var express = require('express');
var app = express();

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

// Se devuelve esta aplicación
module.exports = app;