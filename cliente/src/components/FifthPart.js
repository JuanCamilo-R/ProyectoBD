import React, { Component } from "react";
import "./styles/Badge.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

export class FifthPart extends Component {
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
					<h1 className="h1">Categoría de Cocina</h1>
					<p className="remainder">
						{" "}
						Puntue del 1 al 5, donde 1 es la frecuencia más baja y 5 la más alta{" "}
					</p>
				</div>
				<div className="form-group form-design">
					<label htmlFor="frecuencia_cocina">
						¿Qué tanto le gusta cocinar y aprender recetas?
					</label>
					<div className="radio">
						<RadioGroup
							row
							arial-label="frecuencia_cocina"
							name="frecuencia_cocina"
							value={this.props.values.data.string_values.frecuencia_cocina}
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
					<label htmlFor="comida_favorita_cocina">
						¿Cuál es el tipo de comida favorita que le gusta preparar?
					</label>
					<RadioGroup
						row
						arial-label="comida_favorita_cocina"
						name="comida_favorita_cocina"
						value={this.props.values.data.string_values.comida_favorita_cocina}
						onChange={this.props.inputStringChange}
					>
						<FormControlLabel
							type="text"
							value="1"
							control={<Radio />}
							label="Postres"
						/>
						<FormControlLabel
							type="text"
							value="2"
							control={<Radio />}
							label="Comida vegana"
						/>
						<FormControlLabel
							type="text"
							value="3"
							control={<Radio />}
							label="Sopas"
						/>
						<FormControlLabel
							type="text"
							value="4"
							control={<Radio />}
							label="Comidas rápidas"
						/>
						<FormControlLabel
							type="text"
							value="5"
							control={<Radio />}
							label="Carnes"
						/>
						<FormControlLabel
							type="text"
							value="6"
							control={<Radio />}
							label="Pescado"
						/>
						<FormControlLabel
							type="text"
							value="7"
							control={<Radio />}
							label="Mariscos"
						/>
						<FormControlLabel
							type="text"
							value="8"
							control={<Radio />}
							label="Pastas"
						/>
						<FormControlLabel
							type="text"
							value="9"
							control={<Radio />}
							label="Otro"
						/>
					</RadioGroup>
				</div>
				<br />
				<div className="form-group form-design">
					<label htmlFor="dificultades_cocina">
						¿Cuál es el mayor problema para seguir las recetas?
					</label>
					<FormGroup
						row
						arial-label="dificultades_cocina"
						name="dificultades_cocina"
						value={this.props.values.data.array_values.dificultades_cocina}
						onChange={this.props.inputArrayChange}
					>
						<FormControlLabel
							control={<Checkbox />}
							value="1"
							label="Falta de ingredientes"
							name="dificultades_cocina"
						/>
						<FormControlLabel
							control={<Checkbox />}
							value="2"
							label="Falta de tiempo"
							name="dificultades_cocina"
						/>
						<FormControlLabel
							control={<Checkbox />}
							value="3"
							label="Falta de claridad en las instrucciones"
							name="dificultades_cocina"
						/>
						<FormControlLabel
							control={<Checkbox />}
							value="4"
							label="No le gusta cocinar"
							name="dificultades_cocina"
						/>
						<FormControlLabel
							control={<Checkbox />}
							value="5"
							label="Otro"
							name="dificultades_cocina"
						/>
					</FormGroup>
				</div>

				<br />
				<div className="form-group form-design">
					<label htmlFor="ocasiones_cocina">
						¿Cuáles son tus ocasiones preferidas para cocinar?
					</label>
					<FormGroup
						row
						arial-label="ocasiones_cocina"
						name="ocasiones_cocina"
						value={this.props.values.data.array_values.ocasiones_cocina}
						onChange={this.props.inputArrayChange}
					>
						<FormControlLabel
							control={<Checkbox />}
							value="1"
							label="Cumpleaños"
							name="ocasiones_cocina"
						/>
						<FormControlLabel
							control={<Checkbox />}
							value="2"
							label="Día de amor y amistad"
							name="ocasiones_cocina"
						/>
						<FormControlLabel
							control={<Checkbox />}
							value="3"
							label="Navidad"
							name="ocasiones_cocina"
						/>
						<FormControlLabel
							control={<Checkbox />}
							value="4"
							label="Día del padre o de la madre"
							name="ocasiones_cocina"
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

export default FifthPart;
