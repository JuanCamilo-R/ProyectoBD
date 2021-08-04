// const express = require("express");
// const bodyParser = require("body-parser");
// const { Pool } = require("pg");
// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const pool = new Pool({
// 	connectionString:
// 		"postgres://rcdwvckhhgkbgc:7e78409ef8f599f449fe4290bac69d16c71b33dca005b90f0bb9f6296aeae62c@ec2-54-166-167-192.compute-1.amazonaws.com:5432/d5iiden0sct2v9",
// 	ssl: {
// 		rejectUnauthorized: false,
// 	},
// });

// const pacientes = [];
//const mountRoutes = require("./routers");

// mountRoutes(app);

// app.get("/consultar", async (req, res) => {
// 	const response = await pool.query("SELECT * FROM tabla_prueba");
// 	console.log(response.rows);
// 	res.send({
// 		Filas: response.rows,
// 	});
// });

// app.put("/guardar", (req, res) => {
// 	adicionapaciente(req.body);
// 	res.send("GUARDADO OK !!!");
// });

// app.delete("/borrar/:id", async (req, res) => {
// 	const { id } = req.params;
// 	console.log(id);
// 	const response = await pool.query(
// 		`DELETE FROM tabla_prueba WHERE id = '${id}'`
// 	);
// 	res.send("BORRADO OK !!!");
// });

// app.post("/actualizadatos", async (req, res) => {
// 	const { name, email } = req.body;
// 	const response = await pool.query(
// 		`INSERT INTO tabla_prueba(name, email) VALUES('${name}', '${email}')`
// 	);
// 	res.send({
// 		message: "Information has been saved!",
// 	});
// });

// if (process.env.NODE_ENV === "production") {
// 	// Express will serve up production assets
// 	// like our main.js file, or main.css file!
// 	app.use(express.static("cliente/build"));

// 	// Express will serve up the index.html file
// 	// if it doesn't recognize the route
// 	const path = require("path");
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "cliente", "build", "index.html"));
// 	});
// }

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
