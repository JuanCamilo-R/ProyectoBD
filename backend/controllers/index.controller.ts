import { Request, Response } from "express";
import { Pool } from "pg";
import { Array_values } from "../interfaces/array_values.interface";
import { String_values } from "../interfaces/string_values.interface";

const pool = new Pool({
	connectionString:
		"postgres://rcdwvckhhgkbgc:7e78409ef8f599f449fe4290bac69d16c71b33dca005b90f0bb9f6296aeae62c@ec2-54-166-167-192.compute-1.amazonaws.com:5432/d5iiden0sct2v9",
	ssl: {
		rejectUnauthorized: false,
	},
});

const getUser = async (req: Request, res: Response) => {
	const response = await pool.query("SELECT * FROM tabla_prueba");
	console.log(response.rows);
	res.send({
		Filas: response.rows,
	});
};

const createUser = async (req: Request, res: Response) => {
	const {
		array_values,
		string_values,
	}: { array_values: Array_values; string_values: String_values } = req.body;
	console.log({
		array_values,
		string_values,
	});
	// const response = await pool.query(
	// 	`INSERT INTO tabla_prueba(name, email) VALUES('${name}', '${email}')`
	// );
	// res.send({
	// 	message: "Information has been saved!",
	// });
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
