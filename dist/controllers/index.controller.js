"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.createUser = exports.getUser = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: "postgres://rcdwvckhhgkbgc:7e78409ef8f599f449fe4290bac69d16c71b33dca005b90f0bb9f6296aeae62c@ec2-54-166-167-192.compute-1.amazonaws.com:5432/d5iiden0sct2v9",
    ssl: {
        rejectUnauthorized: false,
    },
});
const array = ["Federico", "Alejandra", "Papa Robinson"];
let result = array.reduce((acum, currentVal) => (acum += currentVal + ","), "");
result = result.slice(0, result.length - 1);
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { array_values, string_values, } = req.body;
    const response = yield pool.query(`SELECT func_personas('85015', 'Messirve', 'SIUU', 'No', 1, 7, 3, 18)`);
    /*
        SELECT categoria_peliculas(cedula, id_frecuencia, id_atractivo_pelicua);
    */
    // const response = await pool.query("SELECT * FROM tabla_prueba");
    console.log(response.rows);
    res.send({
        Filas: response.rows,
    });
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { array_values, string_values, } = req.body;
    // const response = await pool.query(
    // 	`INSERT INTO tabla_prueba(name, email) VALUES('${name}', '${email}')`
    // );
    console.log(__dirname);
    res.send({
        message: "Information has been saved!",
    });
});
exports.createUser = createUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    const response = yield pool.query(`DELETE FROM tabla_prueba WHERE id = '${id}'`);
    res.send("BORRADO OK !!!");
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    res.send({
        name,
    });
});
exports.updateUser = updateUser;
