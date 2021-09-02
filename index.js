const express = require('express')

const bodyParser = require('body-parser');

const app = express() 

app.get('/JavaScript', function (req, res) {

  res.send('console.log("Hola Mundo")')

}) 

app.get('/Java', function (req, res) {

    res.send('System.out.println("Hola Mundo")')
  
}) 

app.post('/Cpp', function (req, res) {

  res.end('cout<<"Hola Mundo"')

})

app.post('/C', function (req, res) {

    res.end('printf("Hola Mundo")')
  
  })

app.listen(3000)