const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded());

// parse application/json
app.use(express.json())

app.get('/formularioget', function (req, res) {
  res.send('Hello World');
});

app.post('/formulariopost', function (req, res) {
  console.log(req.body.nombre);
  console.log(req.body.apellido);
  console.log(req.body.cedula);
  console.log(req.body.correo);
  console.log(req.body.celular);
  res.send('POST request');
});

app.post('/formulariopost', function (req, res) {
  console.log(req.body.nombre);
  console.log(req.body.apellido);
  console.log(req.body.cedula);
  console.log(req.body.correo);
  console.log(req.body.celular);
  res.send('POST request');
});

app.listen(3000);