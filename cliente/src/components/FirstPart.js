import React, { Component } from "react";
import "./styles/Badge.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export class FirstPart extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	show = (value) => {
		console.log(value.genero);
	};

	render() {
		return (
			<div className="form-container">
				<h1 className="h1">Datos generales</h1>
				<div className="form-group">
					<label htmlFor="cedula">Cédula:</label>
					<input
						type="text"
						className="form-control"
						name="cedula"
						onChange={this.props.inputStringChange}
						value={this.props.values.data.string_values.cedula}
						required
					/>
				</div>
				<br />
				<div className="form-group">
					<label htmlFor="nombre">Nombre:</label>
					<input
						type="text"
						className="form-control"
						name="nombre"
						onChange={this.props.inputStringChange}
						value={this.props.values.data.string_values.nombre}
						required={true}
					/>
				</div>
				<br />
				<div className="form-group">
					<label htmlFor="apellido">Apellido:</label>
					<input
						type="text"
						className="form-control"
						name="apellido"
						onChange={this.props.inputStringChange}
						value={this.props.values.data.string_values.apellido}
						required={true}
					/>
				</div>
				<br />
				<div className="form-group">
					<label htmlFor="edad">Edad:</label>
					<input
						type="text"
						className="form-control"
						name="edad"
						onChange={this.props.inputStringChange}
						value={this.props.values.data.string_values.edad}
						required={true}
					/>
				</div>
				<br />
				<div className="form-group">
					<label htmlFor="ocupacion">Ocupacion:</label>
					<div className="radio">
						<RadioGroup
							aria-label="ocupacion"
							name="ocupacion"
							value={this.props.values.data.string_values.ocupacion}
							onChange={this.props.inputStringChange}
							required={true}
						>
							<FormControlLabel
								value="1"
								control={<Radio />}
								label="Estudiante"
							/>
							<FormControlLabel
								value="2"
								control={<Radio />}
								label="Trabajador"
							/>
							<FormControlLabel
								value="3"
								control={<Radio />}
								label="Desempleado"
							/>
						</RadioGroup>
					</div>
				</div>
				<br />
				<div className="form-group form-design">
					<label htmlFor="genero">Genero:</label>
					<div className="radio">
						<RadioGroup
							aria-label="genero"
							name="genero"
							value={this.props.values.data.string_values.genero}
							onChange={this.props.inputStringChange}
						>
							<FormControlLabel
								value="1"
								control={<Radio />}
								label="Masculino"
							/>
							<FormControlLabel
								value="2"
								control={<Radio />}
								label="Femenino"
							/>
						</RadioGroup>
					</div>
				</div>
				<br />
				<div className="form-group form-design">
					<label htmlFor="hijos_si_no">¿Tiene hijos?</label>
					<div className="radio">
						<RadioGroup
							aria-label="hijos_si_no"
							name="hijos_si_no"
							value={this.props.values.data.string_values.hijos_si_no}
							onChange={this.props.inputStringChange}
						>
							<FormControlLabel value="Si" control={<Radio />} label="Si" />
							<FormControlLabel value="No" control={<Radio />} label="No" />
						</RadioGroup>
					</div>
				</div>
				<br />

				<div className="form-group">
					<label htmlFor="Color">Color favorito:</label>
					<input
						type="text"
						className="form-control"
						name="color"
						onChange={this.props.inputStringChange}
						value={this.props.values.data.string_values.color}
					/>
				</div>
				<br />

				<div className="form-group">
					<label htmlFor="comuna">
						Comuna en la que vive: (Digite solo el numero, sin letras)
					</label>
					<input
						type="number"
						className="form-control"
						name="comuna"
						onChange={this.props.inputStringChange}
						value={this.props.values.data.string_values.comuna}
					/>
				</div>
				<br />

				<div className="text-right">
					<button className="btn btn-primary" onClick={this.continue}>
						Continuar.
					</button>
				</div>
			</div>
		);
	}
}

export default FirstPart;
