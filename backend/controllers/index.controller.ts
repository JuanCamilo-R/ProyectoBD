import { Request, Response } from "express";
import { Pool } from "pg";
import { Array_values } from "../interfaces/array_values.interface";
import { String_values } from "../interfaces/string_values.interface";

const path = require("path");
const pool = new Pool({
	connectionString:
		"postgres://rcdwvckhhgkbgc:7e78409ef8f599f449fe4290bac69d16c71b33dca005b90f0bb9f6296aeae62c@ec2-54-166-167-192.compute-1.amazonaws.com:5432/d5iiden0sct2v9",
	ssl: {
		rejectUnauthorized: false,
	},
});

const array = ["Federico", "Alejandra", "Papa Robinson"];

const convertArrayIntoPgArray = (array: Array<any>) => {
	let result: String = array.reduce(
		(acum: String, currentVal: String) => (acum += currentVal + ","),
		""
	);

	return result.slice(0, result.length - 1);
};

const getUser = async (req: Request, res: Response) => {
	const {
		array_values,
		string_values,
	}: { array_values: Array_values; string_values: String_values } = req.body;
};

const createUser = async (req: Request, res: Response, next: Function) => {
	const {
		array_values,
		string_values,
	}: { array_values: Array_values; string_values: String_values } = req.body;

	const {
		cedula,
		nombre,
		apellido,
		hijos_si_no,
		genero,
		color,
		comuna,
		edad,
		ocupacion,
		//pelicula
		frecuencia_pelicula,
		genero_favorito_pelicula,
		//lectura
		adquiere_frecuencia_lectura,
		frecuencia_lectura,
		//deporte
		frecuencia_deporte,
		//cocina
		frecuencia_cocina,
		comida_favorita_cocina,
		//musica
		frecuencia_musica,
		nivel_gusto_concierto,
		//videojuego
		frecuencia_videojuegos,
		consola_videojuegos,
		juego_videojuegos,
		//evento
		barrio,
		mes_datos_eventos,
		medio_datos_eventos,
		mascota_si_no,
	} = string_values;

	const {
		//pelicula
		comida_favorita_pelicula,
		atractivoPelicula,
		//lectura
		idiomas_lectura,
		genero_favorito_lectura,
		//deporte
		deporte_favorito,
		razon_deporte,
		razon_no_deporte,
		//cocina
		dificultades_cocina,
		ocasiones_cocina,
		//musica
		genero_musica,
		//videojuego
		categoria_videojuegos,
	} = array_values;
	try {
		const respuestaPersonas = await pool.query(
			`SELECT func_personas('${cedula}', '${nombre}', '${apellido}', '${hijos_si_no}',${genero},${color}, ${comuna},${edad},${ocupacion})`
		);

		const respuestaPelicula = await pool.query(
			`SELECT func_categoria_pelicula('${cedula}',${frecuencia_pelicula}, ${genero_favorito_pelicula},
		'{${convertArrayIntoPgArray(atractivoPelicula)}}', '{${convertArrayIntoPgArray(
				comida_favorita_pelicula
			)}}')`
		);

		const respuestaDeporte = await pool.query(
			`SELECT func_categoria_deporte('${cedula}', ${frecuencia_deporte}, '{${convertArrayIntoPgArray(
				deporte_favorito
			)}}',
			'{${convertArrayIntoPgArray(razon_deporte)}}','{${convertArrayIntoPgArray(
				razon_no_deporte
			)}}')`
		);

		const respuestaLectura = await pool.query(
			`SELECT func_categoria_lectura('${cedula}', ${frecuencia_lectura}, ${adquiere_frecuencia_lectura},
		'{${convertArrayIntoPgArray(idiomas_lectura)}}', '{${convertArrayIntoPgArray(
				genero_favorito_lectura
			)}}')`
		);

		const respuestaCocina = await pool.query(
			`SELECT func_categoria_cocina('${cedula}', ${frecuencia_cocina}, ${comida_favorita_cocina},
			'{${convertArrayIntoPgArray(dificultades_cocina)}}','{${convertArrayIntoPgArray(
				ocasiones_cocina
			)}}')`
		);

		const respuestaMusica = await pool.query(
			`SELECT func_categoria_musica('${cedula}', ${frecuencia_musica}, ${nivel_gusto_concierto},
											'{${convertArrayIntoPgArray(genero_musica)}}')`
		);

		const respuestaVideojuego = await pool.query(
			`SELECT func_categoria_videojuego('${cedula}', ${frecuencia_videojuegos},
			${consola_videojuegos},  ${juego_videojuegos}, '{${convertArrayIntoPgArray(
				categoria_videojuegos
			)}}'
			)`
		);

		const respuestaEvento = await pool.query(
			`SELECT func_categoria_evento('${cedula}', ${barrio}, ${mes_datos_eventos}, ${medio_datos_eventos},
			'${mascota_si_no}')`
		);
	} catch (e) {
		res.status(400).send({
			message: "Error!",
		});
	} finally {
		//nothing
	}

	console.log({
		array_values,
		string_values,
	});
	res.send({
		message: "Information has been saved!",
	});
};

const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	console.log(id);
	const response = await pool.query(
		`DELETE FROM tabla_prueba WHERE id = '${id}'`
	);
	res.send("BORRADO OK !!!");
};

const updateUser = async (req: Request, res: Response) => {
	const { name } = req.body;
	res.send({
		name,
	});
};

export { getUser, createUser, deleteUser, updateUser };
