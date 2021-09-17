"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modifyStringValues = (string_values) => {
    for (let element in string_values) {
        let aux = +string_values[element];
        if (!isNaN(aux) && element != "cedula") {
            string_values[element] = +string_values[element];
        }
    }
    return string_values;
};
const modifyArray = (array) => {
    const arrayResults = array.map((element) => +element);
    return arrayResults;
};
const modifyArrayValues = (array_values) => {
    for (let element in array_values) {
        array_values[element] = modifyArray(array_values[element]);
    }
    return array_values;
};
const modifyRequest = (req, res, next) => {
    const { array_values, string_values, } = req.body;
    modifyStringValues(string_values);
    modifyArrayValues(array_values);
    next();
};
exports.default = modifyRequest;
