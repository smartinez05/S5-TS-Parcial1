const express = require('express');
const app = express();

app.use(express.json());

app.get('/', function (req, res) {
    res.send('bienvenido a la pagina principal debes escribir titulo y user para ver los get y user para ver el post')
  });
 
app.get('/titulo', function (req, res) {
  res.send('<h1>Esto es un titulo 1</h1>');
});
 
app.get('/user', function (req, res) {
    res.json({
        username: 'many',
        lastname: 'Quevedo',
        number: 3114488452,
        email: 'mquevedoji@uninpahu.edu.co',
        direccion: 'callefalsa 123',
        menssage: 'hola. como estas?',
        dirección_IP :'172.35.224.225',
        document: 47767958,
        especialidad: 'endocrinologia',
    });
  });


app.post('/user', function (req, res) {
    console.log(req.body);
    res.send('se ha recibido el metodo post')
});
app.listen(3000, () => {
    console.log('estamos en el puerto 3000')
});