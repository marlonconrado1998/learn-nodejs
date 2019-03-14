var express = require('express');
var app = express();


// Aquí se requieren todos  los archivos con ruats se vayan a necesitar
app.use(require('./mundo.js'));
// app.use(require('./expample.js'));


// se devuelve este módulo
module.exports = app;