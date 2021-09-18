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
});
exports.getUser = getUser;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { array_values, string_values, } = req.body;
    const { cedula, nombre, apellido, hijos_si_no, genero, color, comuna, edad, ocupacion, 
    //pelicula
    frecuencia_pelicula, genero_favorito_pelicula, 
    //lectura
    adquiere_frecuencia_lectura, frecuencia_lectura, 
    //deporte
    frecuencia_deporte, 
    //cocina
    frecuencia_cocina, comida_favorita_cocina, 
    //musica
    frecuencia_musica, nivel_gusto_concierto, 
    //videojuego
    frecuencia_videojuegos, consola_videojuegos, juego_videojuegos, 
    //evento
    barrio, mes_datos_eventos, medio_datos_eventos, mascota_si_no, } = string_values;
    const { 
    //pelicula
    comida_favorita_pelicula, atractivoPelicula, 
    //lectura
    idiomas_lectura, genero_favorito_lectura, 
    //deporte
    deporte_favorito, razon_deporte, razon_no_deporte, 
    //cocina
    dificultades_cocina, ocasiones_cocina, 
    //musica
    genero_musica, 
    //videojuego
    categoria_videojuegos, } = array_values;
    try {
        const respuestaPersonas = yield pool.query(`SELECT func_personas('${cedula}', '${nombre}', '${apellido}', '${hijos_si_no}',${genero},${color}, ${comuna},${edad},${ocupacion})`);
        const respuestaPelicula = yield pool.query(`SELECT func_categoria_pelicula('${cedula}',${frecuencia_pelicula}, ${genero_favorito_pelicula},
		'{${convertArrayIntoPgArray(atractivoPelicula)}}', '{${convertArrayIntoPgArray(comida_favorita_pelicula)}}')`);
        const respuestaDeporte = yield pool.query(`SELECT func_categoria_deporte('${cedula}', ${frecuencia_deporte}, '{${convertArrayIntoPgArray(deporte_favorito)}}',
			'{${convertArrayIntoPgArray(razon_deporte)}}','{${convertArrayIntoPgArray(razon_no_deporte)}}')`);
        const respuestaLectura = yield pool.query(`SELECT func_categoria_lectura('${cedula}', ${frecuencia_lectura}, ${adquiere_frecuencia_lectura},
		'{${convertArrayIntoPgArray(idiomas_lectura)}}', '{${convertArrayIntoPgArray(genero_favorito_lectura)}}')`);
        const respuestaCocina = yield pool.query(`SELECT func_categoria_cocina('${cedula}', ${frecuencia_cocina}, ${comida_favorita_cocina},
			'{${convertArrayIntoPgArray(dificultades_cocina)}}','{${convertArrayIntoPgArray(ocasiones_cocina)}}')`);
        const respuestaMusica = yield pool.query(`SELECT func_categoria_musica('${cedula}', ${frecuencia_musica}, ${nivel_gusto_concierto},
											'{${convertArrayIntoPgArray(genero_musica)}}')`);
        const respuestaVideojuego = yield pool.query(`SELECT func_categoria_videojuego('${cedula}', ${frecuencia_videojuegos},
			${consola_videojuegos},  ${juego_videojuegos}, '{${convertArrayIntoPgArray(categoria_videojuegos)}}'
			)`);
        const respuestaEvento = yield pool.query(`SELECT func_categoria_evento('${cedula}', ${barrio}, ${mes_datos_eventos}, ${medio_datos_eventos},
			'${mascota_si_no}')`);
    }
    catch (e) {
        res.status(400).send({
            message: "Error!",
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
