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

app.post('/video', urlencodedParser, function (req, res) {
    console.log(req.body.name)
    console.log(req.body.weight)
    console.log(req.body.author)
    console.log(req.body.duration)
    res.send("Post video realizado correctamente")
})

app.get('/form', function (req, res) {
    res.json({
        Nombres: 'Pablo Andrés',
        Apellidos: 'Melo Cardozo',
        Numero: 3224488802,
        email: "pablocrdozo@gmail.com",
        tipo_de_sangre: "O-",
        eps: "famisanar",
        edad: 20
    });
});

app.listen(3000)