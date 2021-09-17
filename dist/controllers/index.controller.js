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
const path = require("path");
const pool = new pg_1.Pool({
    connectionString: "postgres://rcdwvckhhgkbgc:7e78409ef8f599f449fe4290bac69d16c71b33dca005b90f0bb9f6296aeae62c@ec2-54-166-167-192.compute-1.amazonaws.com:5432/d5iiden0sct2v9",
    ssl: {
        rejectUnauthorized: false,
    },
});
const array = ["Federico", "Alejandra", "Papa Robinson"];
const convertArrayIntoPgArray = (array) => {
    let result = array.reduce((acum, currentVal) => (acum += currentVal + ","), "");
    return result.slice(0, result.length - 1);
};
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { array_values, string_values, } = req.body;
    /*
        SELECT categoria_peliculas(cedula, id_frecuencia, id_atractivo_pelicua);
    */
    // const response = await pool.query("SELECT * FROM tabla_prueba");
    console.log(`${path.join(__dirname, "../../")}`);
    // res.send({
    // 	Filas: response.rows,
    // });
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { array_values, string_values, } = req.body;
    const { cedula, nombre, apellido, hijos_si_no, genero, color, comuna, edad, ocupacion, 
    //pelicula
    frecuencia_pelicula, genero_favorito_pelicula, 
    //lectura
    adquiere_frecuencia_lectura, frecuencia_lectura, } = string_values;
    const { 
    //pelicula
    comida_favorita_pelicula, atractivoPelicula, 
    //lectura
    idiomas_lectura, genero_favorito_lectura, } = array_values;
    try {
        const respuestaPersonas = yield pool.query(`SELECT func_personas('${cedula}', '${nombre}', '${apellido}', '${hijos_si_no}',${genero}, 7, ${comuna}, ${edad}, ${ocupacion})`);
        const respuestaPelicula = yield pool.query(`SELECT func_categoria_pelicula('${cedula}',${frecuencia_pelicula}, ${genero_favorito_pelicula}, 
		'{${convertArrayIntoPgArray(atractivoPelicula)}}', '{${convertArrayIntoPgArray(comida_favorita_pelicula)}}')`);
        const respuestaDeporte = null;
        const respuestaLectura = yield pool.query(`SELECT func_categoria_lectura('${cedula}', '${frecuencia_lectura}', '${adquiere_frecuencia_lectura}',
		'{${convertArrayIntoPgArray(idiomas_lectura)}}', '{${convertArrayIntoPgArray(genero_favorito_lectura)}}')`);
    }
    catch (e) {
        res.status(400).send({
            error: "Query error, this may be because the information you have provided is not allowed",
        });
    }
    finally {
        //nothing
    }
    console.log({
        array_values,
        string_values,
    });
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
