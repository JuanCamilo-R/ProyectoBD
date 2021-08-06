import React, { Component } from "react";
import "./ComponentStyles/Badge.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Checkbox, FormGroup } from "@material-ui/core";

export class ThirdPart extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		return (
			<div className="form-container">
				<div>
					<h1 className="h1">Categoría de Deportes</h1>
					<p className="remainder">
						{" "}
						Puntue del 1 al 5, donde 1 es la frecuencia más baja y 5 la más alta{" "}
					</p>
				</div>
				<div className="form-group form-design">
					<label htmlFor="frecuencia_deporte">
						¿Con qué frecuencia practica algún deporte?
					</label>
					<div className="radio">
						<RadioGroup
							row
							aria-label="frecuencia_deporte"
							name="frecuencia_deporte"
							value={this.props.values.data.string_values.frecuencia_deporte}
							onChange={this.props.inputStringChange}
						>
							<FormControlLabel
								type="number"
								value="1"
								control={<Radio />}
								label="1"
							/>
							<FormControlLabel
								type="number"
								value="2"
								control={<Radio />}
								label="2"
							/>
							<FormControlLabel
								type="number"
								value="3"
								control={<Radio />}
								label="3"
							/>
							<FormControlLabel
								type="number"
								value="4"
								control={<Radio />}
								label="4"
							/>
							<FormControlLabel
								type="number"
								value="5"
								control={<Radio />}
								label="5"
							/>
						</RadioGroup>
					</div>
				</div>
				<br />
				<div className="form-group form-design">
					<label htmlFor="deporte_favorito">
						Independientemente de su respuesta arriba, ¿cuál es su deporte
						favorito?
					</label>
					<FormGroup
						row
						arial-label="deporte_favorito"
						name="deporte_favorito"
						value={this.props.values.data.array_values.deporte_favorito}
						onChange={this.props.inputArrayChange}
					>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.deporte_favorito.includes(
										"1"
									)}
								/>
							}
							value="1"
							label="Fútbol"
							name="deporte_favorito"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.deporte_favorito.includes(
										"2"
									)}
								/>
							}
							value="2"
							label="Baloncesto"
							name="deporte_favorito"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.deporte_favorito.includes(
										"3"
									)}
								/>
							}
							value="3"
							label="Crossfit"
							name="deporte_favorito"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.deporte_favorito.includes(
										"4"
									)}
								/>
							}
							value="4"
							label="Voleibol"
							name="deporte_favorito"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.deporte_favorito.includes(
										"5"
									)}
								/>
							}
							value="5"
							label="Patinaje"
							name="deporte_favorito"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.deporte_favorito.includes(
										"6"
									)}
								/>
							}
							value="6"
							label="Natación"
							name="deporte_favorito"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.deporte_favorito.includes(
										"7"
									)}
								/>
							}
							value="7"
							label="Ciclismo"
							name="deporte_favorito"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.deporte_favorito.includes(
										"8"
									)}
								/>
							}
							value="8"
							label="Ping Pong"
							name="deporte_favorito"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.deporte_favorito.includes(
										"9"
									)}
								/>
							}
							value="9"
							label="Tenis"
							name="deporte_favorito"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.deporte_favorito.includes(
										"10"
									)}
								/>
							}
							value="10"
							label="Rugby"
							name="deporte_favorito"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.deporte_favorito.includes(
										"11"
									)}
								/>
							}
							value="11"
							label="Otro"
							name="deporte_favorito"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.deporte_favorito.includes(
										"12"
									)}
								/>
							}
							value="12"
							label="Ninguno"
							name="deporte_favorito"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.deporte_favorito.includes(
										"13"
									)}
								/>
							}
							value="13"
							label="Ajedrez"
							name="deporte_favorito"
						/>
					</FormGroup>
				</div>
				<br />
				<div className="form-group form-design">
					<label htmlFor="razon_deporte">
						¿Cuál es la razón por la que practica deporte?
					</label>
					<FormGroup
						row
						arial-label="razon_deporte"
						name="razon_deporte"
						value={this.props.values.data.array_values.razon_deporte}
						onChange={this.props.inputArrayChange}
					>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.razon_deporte.includes(
										"1"
									)}
								/>
							}
							value="1"
							label="Lo disfruto"
							name="razon_deporte"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.razon_deporte.includes(
										"2"
									)}
								/>
							}
							value="2"
							label="Por salud"
							name="razon_deporte"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.razon_deporte.includes(
										"3"
									)}
								/>
							}
							value="3"
							label="Para verme bien"
							name="razon_deporte"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.razon_deporte.includes(
										"4"
									)}
								/>
							}
							value="4"
							label="Otra"
							name="razon_deporte"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.razon_deporte.includes(
										"5"
									)}
								/>
							}
							value="5"
							label="No aplica"
							name="razon_deporte"
						/>
					</FormGroup>
				</div>
				<br />
				<div className="form-group form-design">
					<label htmlFor="razon_no_deporte">
						¿Cuál es la razón por la que NO practica deporte?
					</label>
					<FormGroup
						row
						arial-label="razon_no_deporte"
						name="razon_no_deporte"
						value={this.props.values.data.array_values.razon_no_deporte}
						onChange={this.props.inputArrayChange}
					>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.razon_no_deporte.includes(
										"1"
									)}
								/>
							}
							value="1"
							label="Falta de tiempo"
							name="razon_no_deporte"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.razon_no_deporte.includes(
										"2"
									)}
								/>
							}
							value="2"
							label="Falta de iniciativa"
							name="razon_no_deporte"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.razon_no_deporte.includes(
										"3"
									)}
								/>
							}
							value="3"
							label="Falta de compañía"
							name="razon_no_deporte"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.razon_no_deporte.includes(
										"4"
									)}
								/>
							}
							value="4"
							label="No le gusta"
							name="razon_no_deporte"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.razon_no_deporte.includes(
										"5"
									)}
								/>
							}
							value="5"
							label="Otra"
							name="razon_no_deporte"
						/>
						<FormControlLabel
							control={
								<Checkbox
									checked={this.props.values.data.array_values.razon_no_deporte.includes(
										"6"
									)}
								/>
							}
							value="6"
							label="No aplica"
							name="razon_no_deporte"
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

export default ThirdPart;
