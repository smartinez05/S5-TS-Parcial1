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

/* No se utiliza body-parser ya que la libreria se integró con Express desde la versión 4 segun la documentación oficial,
ref: https://stackoverflow.com/questions/66525078/bodyparser-is-deprecated.
Ademas se utilizó las peticiones GET y POST para hacer un formulario sencillo, ademas de otro ejemplo POST en consola. */

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

app.post("/formulariopost", function (req, res) {
	//Se envian datos de un formulario en este caso con x-www-form-urlencoded con postman y los muestra en consola ordenadamente.
	var nombre = req.body.nombre;
	var apellido = req.body.apellido;
	var cedula = req.body.cedula;
	var email = req.body.email;
	var celular = req.body.celular;
	var response =
	"Nombre: " +
	nombre +
	"\nApellido: " +
	apellido +
	"\nCedula: " +
	cedula +
	"\nEmail: " +
	email +
	"\nCelular " +
	celular;
	console.log(response);
	res.send("POST request");
});

app.get("/form2", (req, res, next) => {
	//Muestra un formulario para enviarlo por POST
	res.send(`<form method="POST" action="/form">
	<input id="nombre" name="nombre" type="text" />
	<input id="apellido" name="apellido" type="text" />
	<input type="number" name="cedula" id="cedula" />
	<input type="email" name="email" id="email" />
	<input type="celular" name="celular" id="celular" />
	<input type="submit">
	</form>`);
});

app.post("/form2", function (req, res, next) {
	//Recibe el formulario y muestra los datos recogidos
	
	res.send(
		`<table style="border: 1px solid">
		<tr>
				<th>Nombre</th>
				<th>Apellido</th>
				<th>Cedula</th>
				<th>Email</th>
				<th>Celular</th>
				</tr>
				<tr>
				<td>` +
			JSON.stringify(req.body.nombre) +
			`</td>
			<td>` +
			JSON.stringify(req.body.apellido) +
			`</td>
			<td>` +
			JSON.stringify(req.body.cedula) +
			`</td>
			<td>` +
			JSON.stringify(req.body.email) +
			`</td>
			<td>` +
			JSON.stringify(req.body.celular) +
			`</td>
			</tr>
			</table>`
			);
		});
		
		app.listen(3000, () => {
			console.log('estamos en el puerto 3000')
		});