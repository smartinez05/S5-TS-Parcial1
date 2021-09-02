const express = require("express");
const app = express();

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

app.get("/form", (req, res, next) => {
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

app.post("/form", function (req, res, next) {
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

app.listen(3000);
