const express = require('express')

const bodyParser = require('body-parser');

const app = express() 

app.get('/JavaScript', function (req, res) {

  res.send('console.log("Hola Mundo")')

}) 

app.get('/Java', function (req, res) {

    res.send('System.out.println("Hola Mundo")')
  
}) 

app.post('/one', function (req, res) {
  console.log(req.body);
  res.send('funcion post numero uno')
});

app.post('/two', function (req, res) {
  console.log(req.body);
  res.send('funcion post numero dos')
});

app.listen(3000)