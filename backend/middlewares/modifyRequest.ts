import { Request, Response } from "express";

import { Array_values } from "../interfaces/array_values.interface";
import { String_values } from "../interfaces/string_values.interface";

const modifyStringValues = (string_values: String_values) => {
	for (let element in string_values) {
		let aux = +string_values[element];
		if (!isNaN(aux) && element != "cedula") {
			string_values[element] = +string_values[element];
		}
	}
	return string_values;
};

const modifyArray = (array: Array<number>) => {
	const arrayResults = array.map((element) => +element);
	return arrayResults;
};

const modifyArrayValues = (array_values: Array_values) => {
	for (let element in array_values) {
		array_values[element] = modifyArray(array_values[element]);
	}

	return array_values;
};

const modifyRequest = (req: Request, res: Response, next: Function) => {
	const {
		array_values,
		string_values,
	}: { array_values: Array_values; string_values: String_values } = req.body;
	modifyStringValues(string_values);
	modifyArrayValues(array_values);
	next();
};

export default modifyRequest;
