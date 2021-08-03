import React, { Component } from "react";
import "./styles/Badge.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

export class SixthPart extends Component {
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
					<h1 className="h1">Categoría de Musica</h1>
					<p className="remainder">
						{" "}
						Puntue del 1 al 5, donde 1 es la frecuencia más baja y 5 la más alta{" "}
					</p>
				</div>
				<div className="form-group form-design">
					<label htmlFor="frecuencia_musica">
						Con qué frecuencia escucha musica al día
					</label>
					<div className="radio">
						<RadioGroup
							row
							arial-label="frecuencia_musica"
							name="frecuencia_musica"
							value={this.props.values.data.string_values.frecuencia_musica}
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
					<label htmlFor="nivel_gusto_concierto">
						¿Qué tanto le gusta ir a conciertos?
					</label>
					<div className="radio">
						<RadioGroup
							row
							arial-label="nivel_gusto_concierto"
							name="nivel_gusto_concierto"
							value={this.props.values.data.string_values.nivel_gusto_concierto}
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
					<label htmlFor="genero_musica">Generos de musica favoritos</label>
					<FormGroup
						row
						arial-label="genero_musica"
						name="genero_musica"
						value={this.props.values.data.array_values.genero_musica}
						onChange={this.props.inputArrayChange}
					>
						<FormControlLabel
							value="1"
							control={<Checkbox />}
							label="Clásica"
							name="genero_musica"
						/>
						<FormControlLabel
							value="2"
							control={<Checkbox />}
							label="Salsa"
							name="genero_musica"
						/>
						<FormControlLabel
							value="3"
							control={<Checkbox />}
							label="Vallenato"
							name="genero_musica"
						/>
						<FormControlLabel
							value="4"
							control={<Checkbox />}
							label="Bachata"
							name="genero_musica"
						/>
						<FormControlLabel
							value="5"
							control={<Checkbox />}
							label="Popular"
							name="genero_musica"
						/>
						<FormControlLabel
							value="6"
							control={<Checkbox />}
							label="Electrónica"
							name="genero_musica"
						/>
						<FormControlLabel
							value="7"
							control={<Checkbox />}
							label="Merengue"
							name="genero_musica"
						/>
						<FormControlLabel
							value="8"
							control={<Checkbox />}
							label="Rock"
							name="genero_musica"
						/>
						<FormControlLabel
							value="9"
							control={<Checkbox />}
							label="Balada"
							name="genero_musica"
						/>
						<FormControlLabel
							value="10"
							control={<Checkbox />}
							label="Pop"
							name="genero_musica"
						/>
						<FormControlLabel
							value="11"
							control={<Checkbox />}
							label="Trap"
							name="genero_musica"
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

export default SixthPart;
