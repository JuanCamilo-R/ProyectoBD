import React, { Component } from "react";
import "./ComponentStyles/Badge.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export class FirstPart extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
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
						type="number"
						className="form-control"
						name="edad"
						onChange={this.props.inputStringChange}
						value={this.props.values.data.string_values.edad}
						min="18"
						max="100"
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

				<div className="form-group form-design">
					<label htmlFor="color">Color favorito:</label>
					<div className="radio">
						<RadioGroup
							aria-label="color"
							name="color"
							className="answers"
							value={this.props.values.data.string_values.color}
							onChange={this.props.inputStringChange}
						>
							<FormControlLabel
								type="number"
								value="1"
								control={<Radio />}
								label="Rojo"
							/>
							<FormControlLabel
								type="number"
								value="2"
								control={<Radio />}
								label="Azul"
							/>
							<FormControlLabel
								type="number"
								value="3"
								control={<Radio />}
								label="Amarillo"
							/>
							<FormControlLabel
								type="number"
								value="4"
								control={<Radio />}
								label="Verde"
							/>
							<FormControlLabel
								type="number"
								value="5"
								control={<Radio />}
								label="Morado"
							/>
							<FormControlLabel
								type="number"
								value="6"
								control={<Radio />}
								label="Marrón"
							/>
							<FormControlLabel
								type="number"
								value="7"
								control={<Radio />}
								label="Rosa"
							/>
							<FormControlLabel
								type="number"
								value="8"
								control={<Radio />}
								label="Naranja"
							/>
							<FormControlLabel
								type="number"
								value="9"
								control={<Radio />}
								label="Otro"
							/>
						</RadioGroup>
					</div>
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
