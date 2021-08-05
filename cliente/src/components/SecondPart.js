import React, { Component } from "react";
import "./styles/Badge.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Checkbox, FormGroup } from "@material-ui/core";
import CheckboxGroup from "react-checkbox-group";

export class SecondPart extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	show = () => {
		console.log(this.props.this.props.values.data.atractivoPelicula);
	};

	check = (name, value) => {
		if (this.props.values.data.array_values[name].indexOf(value) === -1) {
			return false;
		}
		return true;
	};

	render() {
		return (
			<div className="form-container">
				<div>
					<h1 className="h1">Categoría de Películas</h1>
					<p className="remainder">
						{" "}
						Puntue del 1 al 5, donde 1 es la frecuencia más baja y 5 la más alta{" "}
					</p>
				</div>
				<div className="form-group form-design">
					<label htmlFor="frecuencia_pelicula">
						¿Qué tan frecuente ve películas?
					</label>
					<div className="radio">
						<RadioGroup
							row
							arial-label="frecuencia_pelicula"
							name="frecuencia_pelicula"
							value={this.props.values.data.string_values.frecuencia_pelicula}
							onChange={this.props.inputStringChange}
						>
							<FormControlLabel value="1" control={<Radio />} label="1" />
							<FormControlLabel value="2" control={<Radio />} label="2" />
							<FormControlLabel value="3" control={<Radio />} label="3" />
							<FormControlLabel value="4" control={<Radio />} label="4" />
							<FormControlLabel value="5" control={<Radio />} label="5" />
						</RadioGroup>
					</div>
				</div>
				<br />
				<div className="form-group form-design">
					<label htmlFor="genero_favorito_pelicula">
						Independientemente de su respuesta arriba, ¿cuál es su género
						favorito?
					</label>
					<div className="radio">
						<RadioGroup
							row
							arial-label="genero_favorito_pelicula"
							name="genero_favorito_pelicula"
							value={
								this.props.values.data.string_values.genero_favorito_pelicula
							}
							onChange={this.props.inputStringChange}
						>
							<FormControlLabel
								type="number"
								value="1"
								control={<Radio />}
								label="Acción"
							/>
							<FormControlLabel
								type="number"
								value="2"
								control={<Radio />}
								label="Terror"
							/>
							<FormControlLabel
								type="number"
								value="3"
								control={<Radio />}
								label="Ciencia ficción"
							/>
							<FormControlLabel
								type="number"
								value="4"
								control={<Radio />}
								label="Comedia"
							/>
							<FormControlLabel
								type="number"
								value="5"
								control={<Radio />}
								label="Animadas"
							/>
							<FormControlLabel
								type="number"
								value="6"
								control={<Radio />}
								label="Documentales"
							/>
							<FormControlLabel
								type="number"
								value="7"
								control={<Radio />}
								label="Otra"
							/>
							<FormControlLabel
								type="number"
								value="8"
								control={<Radio />}
								label="Ninguna"
							/>
						</RadioGroup>
					</div>
				</div>
				<br />
				<div className="form-group form-design">
					<label htmlFor="atractivoPelicula">
						De las siguientes opciones, escoja lo que le atrae de una película.
					</label>
					<FormGroup
						row
						arial-label="atractivoPelicula"
						name="atractivoPelicula"
						value={this.props.values.data.array_values.atractivoPelicula}
						onChange={this.props.inputArrayChange}
					>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.atractivoPelicula.includes(
										"1"
									)}
								/>
							}
							name="atractivoPelicula"
							value="1"
							label="Sinopsis"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.atractivoPelicula.includes(
										"2"
									)}
								/>
							}
							name="atractivoPelicula"
							value="2"
							label="Efectos visuales"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.atractivoPelicula.includes(
										"3"
									)}
								/>
							}
							name="atractivoPelicula"
							value="3"
							label="Actores famosos"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.atractivoPelicula.includes(
										"4"
									)}
								/>
							}
							value="4"
							name="atractivoPelicula"
							label="Otro"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.atractivoPelicula.includes(
										"5"
									)}
								/>
							}
							name="atractivoPelicula"
							value="5"
							label="Ninguno"
						/>
					</FormGroup>
				</div>
				<br />
				<div className="form-group form-design">
					<label htmlFor="comida_favorita_pelicula">
						¿Usualmente con qué acompaña las películas?
					</label>
					<FormGroup
						row
						arial-label="comida_favorita_pelicula"
						name="comida_favorita_pelicula"
						value={this.props.values.data.array_values.comida_favorita_pelicula}
						onChange={this.props.inputArrayChange}
					>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.comida_favorita_pelicula.includes(
										"1"
									)}
								/>
							}
							value="1"
							label="Crispetas"
							name="comida_favorita_pelicula"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.comida_favorita_pelicula.includes(
										"2"
									)}
								/>
							}
							value="2"
							label="Nachos"
							name="comida_favorita_pelicula"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.comida_favorita_pelicula.includes(
										"3"
									)}
								/>
							}
							value="3"
							label="Perro caliente"
							name="comida_favorita_pelicula"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.comida_favorita_pelicula.includes(
										"4"
									)}
								/>
							}
							value="4"
							label="Hamburguesa"
							name="comida_favorita_pelicula"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.comida_favorita_pelicula.includes(
										"5"
									)}
								/>
							}
							value="5"
							label="Papas fritas"
							name="comida_favorita_pelicula"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.comida_favorita_pelicula.includes(
										"6"
									)}
								/>
							}
							value="6"
							name="comida_favorita_pelicula"
							label="Otro"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.comida_favorita_pelicula.includes(
										"7"
									)}
								/>
							}
							value="7"
							label="Ninguno"
							name="comida_favorita_pelicula"
						/>
					</FormGroup>
				</div>
				<br />
				<div className="row">
					<div className="col-6">
						<button className="btn btn-primary" onClick={this.back}>
							Atrás.
						</button>
					</div>
					<div className="col-6 text-right">
						<button className="btn btn-primary" onClick={this.continue}>
							Continuar.
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default SecondPart;
