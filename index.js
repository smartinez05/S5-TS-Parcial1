// Paquetes instalados: npm init | npm i express | npm install body-parser | npm install nodemon -D
// Correr programa: node index.js
var express = require('express')
var bodyParser = require('body-parser')

var app = express()


var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {
    res.send('Hola Mundo')
})

app.get('/Ingles', function (req, res) {
    res.send('Hello Word')
}) 

app.post('/login', urlencodedParser, function (req, res) {
    console.log(req.body.username)
    console.log(req.body.password)
    console.log(req.body.email)
    res.send("Post login realizado correctamente")
})

app.listen(3000)