import React from "react";
import axios from "axios";

import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";
import ThirdPart from "./ThirdPart";
import ForthPart from "./ForthPart";
import FifthPart from "./FifthPart";
import SixthPart from "./SixthPart";
import SeventhPart from "./SeventhPart";
import EightPart from "./EightPart";

class Forms extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			step: 1,
			data: {
				string_values: {
					cedula: "",
					nombre: "",
					apellido: "",
					edad: "",
					ocupacion: "",
					genero: "",
					hijos_si_no: "",
					color: "",
					comuna: "",
					frecuencia_pelicula: "",
					frecuencia_deporte: "",
					frecuencia_lectura: "",
					adquiere_frecuencia_lectura: "",
					frecuencia_cocina: "",
					comida_favorita_cocina: "",
					frecuencia_musica: "",
					nivel_gusto_concierto: "",
					frecuencia_videojuegos: "",
					juego_videojuegos: "",
					consola_videojuegos: "",
					mes_datos_eventos: "",
					medio_datos_eventos: "",
					mascota_si_no: "",
					barrio: "",
					genero_favorito_pelicula: "",
				},
				array_values: {
					atractivoPelicula: [],
					comida_favorita_pelicula: [],
					deporte_favorito: [],
					razon_deporte: [],
					razon_no_deporte: [],
					genero_favorito_lectura: [],
					idiomas_lectura: [],
					dificultades_cocina: [],
					ocasiones_cocina: [],
					genero_musica: [],
					categoria_videojuegos: [],
				},
			},
		};

		this.inputArrayChange = this.inputArrayChange.bind(this);
		this.inputStringChange = this.inputStringChange.bind(this);
	}

	saveInfo = async () => {
		const { array_values, string_values } = this.state.data;
		const response = await axios.post("database/crear", {
			string_values,
			array_values,
		});
		console.log(response.data);
	};

	addWithoutDuplicate(array1, array2) {
		const [element] = array2;
		const index = array1.indexOf(element);
		if (index === -1) {
			array1.push(element);
		} else {
			array1.splice(index, 1);
		}
		return array1;
	}

	nextStep = () => {
		const { step } = this.state;
		this.setState({ step: step + 1 });
	};

	prevStep = () => {
		const { step } = this.state;
		this.setState({ step: step - 1 });
	};

	inputArrayChange(e) {
		//console.log(e.target.name);
		//console.log(this.state.data.array_values[`${e.target.name}`]);
		//console.log([e.target.value]);
		this.setState({
			data: {
				...this.state.data,
				array_values: {
					...this.state.data.array_values,
					[e.target.name]: this.addWithoutDuplicate(
						this.state.data.array_values[`${e.target.name}`],
						[e.target.value]
					),
				},
			},
		});
		console.log(this.state.data.array_values);
	}

	inputStringChange(e) {
		this.setState({
			data: {
				...this.state.data,
				string_values: {
					...this.state.data.string_values,
					[e.target.name]: e.target.value,
				},
			},
		});
		console.log(this.state.data.string_values);
	}

	render() {
		switch (this.state.step) {
			case 1:
				return (
					<FirstPart
						nextStep={this.nextStep}
						inputStringChange={this.inputStringChange}
						values={this.state}
					/>
				);
			case 2:
				return (
					<SecondPart
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						inputStringChange={this.inputStringChange}
						inputArrayChange={this.inputArrayChange}
						values={this.state}
					/>
				);
			case 3:
				return (
					<ThirdPart
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						inputStringChange={this.inputStringChange}
						inputArrayChange={this.inputArrayChange}
						values={this.state}
					/>
				);
			case 4:
				return (
					<ForthPart
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						inputStringChange={this.inputStringChange}
						inputArrayChange={this.inputArrayChange}
						values={this.state}
					/>
				);

			case 5:
				return (
					<FifthPart
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						inputStringChange={this.inputStringChange}
						inputArrayChange={this.inputArrayChange}
						values={this.state}
					/>
				);
			case 6:
				return (
					<SixthPart
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						inputStringChange={this.inputStringChange}
						inputArrayChange={this.inputArrayChange}
						values={this.state}
					/>
				);

			case 7:
				return (
					<SeventhPart
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						inputStringChange={this.inputStringChange}
						inputArrayChange={this.inputArrayChange}
						values={this.state}
					/>
				);
			case 8:
				return (
					<EightPart
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						inputStringChange={this.inputStringChange}
						inputArrayChange={this.inputArrayChange}
						values={this.state}
						saveInfo={this.saveInfo}
					/>
				);
			default:
				return "null";
		}
	}
}

export default Forms;
