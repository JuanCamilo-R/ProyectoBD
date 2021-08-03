import React from "react";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";
import ThirdPart from "./ThirdPart";
import ForthPart from "./ForthPart";
import FifthPart from "./FifthPart";
import SixthPart from "./SixthPart";
import SeventhPart from "./SeventhPart";
import EightPart from "./EightPart";

class Forms extends React.Component {
	state = {
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
			},
			array_values: {
				genero_favorito_pelicula: [],
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

	inputChange = (e) => {
		this.setState({
			data: {
				string_values: {
					...this.state.data.string_values,
					[e.target.name]: e.target.value,
				},
				array_values: {
					...this.state.data.array_values,
					[e.target.name]: this.addWithoutDuplicate(
						this.state.data.array_values[`${e.target.name}`],
						[e.target.value]
					),
				},
			},
		});
		console.log(this.state.data);
	};

	render() {
		switch (this.state.step) {
			case 1:
				return (
					<FirstPart
						nextStep={this.nextStep}
						inputChange={this.inputChange}
						values={this.state}
					/>
				);
			case 2:
				return (
					<SecondPart
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						inputChange={this.inputChange}
						values={this.state}
					/>
				);
			case 3:
				return (
					<ThirdPart
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						inputChange={this.inputChange}
						values={this.state}
					/>
				);
			case 4:
				return (
					<ForthPart
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						inputChange={this.inputChange}
						values={this.state}
					/>
				);

			case 5:
				return (
					<FifthPart
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						inputChange={this.inputChange}
						values={this.state}
					/>
				);
			case 6:
				return (
					<SixthPart
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						inputChange={this.inputChange}
						values={this.state}
					/>
				);

			case 7:
				return (
					<SeventhPart
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						inputChange={this.inputChange}
						values={this.state}
					/>
				);
			case 8:
				return (
					<EightPart
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						inputChange={this.inputChange}
						values={this.state}
					/>
				);
		}
	}
}

export default Forms;
