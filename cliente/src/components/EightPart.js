import React, { Component } from "react";
import "./ComponentStyles/Badge.css";
import Swal from "sweetalert2";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export class EigthPart extends Component {
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	checkArrayValues = (keys, values) => {
		let flag = {
			sentArray: true,
			errorsArray: "",
		};
		values.forEach((element, index) => {
			if (element.length === 0) {
				flag = {
					sent: false,
					errorsArray: flag.errorsArray.concat(" ", keys[index]),
				};
			}
		});
		return flag;
	};

	checkStringValues = (keys, values) => {
		let flag = {
			sentString: true,
			errorsString: "",
		};
		values.forEach((element, index) => {
			if (element === "") {
				flag = {
					sent: false,
					errorsString: flag.errorsString.concat(" ", keys[index]),
				};
			}
		});
		return flag;
	};

	submitInfo = () => {
		const arrayKeys = Object.keys(this.props.values.data.array_values);
		const arrayValues = Object.values(this.props.values.data.array_values);
		const { sentArray, errorsArray } = this.checkArrayValues(
			arrayKeys,
			arrayValues
		);
		const stringKeys = Object.keys(this.props.values.data.string_values);
		const stringValues = Object.values(this.props.values.data.string_values);
		const { sentString, errorsString } = this.checkStringValues(
			stringKeys,
			stringValues
		);
		if (sentString && sentArray) {
			this.props.saveInfo();
			Swal.fire({
				position: "top",
				icon: "success",
				title: "Su información ha sido enviada",
				text: "Gracias por participar!",
			});
			console.log(this.props.values);
		} else {
			Swal.fire({
				position: "top",
				icon: "error",
				title: "Ups!, parece que hubo un error ",
				text: `Parece que no llenaste las siguientes preguntas: ${errorsString} ${errorsArray}, 
			por favor retrocede y respóndelas :)`,
			});
		}
	};
	render() {
		return (
			<div className="form-container">
				<div>
					<h1 className="h1">Categoría de Evento</h1>
					<p className="remainder">
						{" "}
						Puntue del 1 al 5, donde 1 es la frecuencia más baja y 5 la más alta{" "}
					</p>
				</div>

				<div className="form-group form-design">
					<label htmlFor="barrio">
						¿En qué barrio de Cali le gustaría que se llevara a cabo el evento?
					</label>
					<div className="radio">
						<RadioGroup
							row
							arial-label="barrio"
							name="barrio"
							value={this.props.values.data.string_values.barrio}
							onChange={this.props.inputStringChange}
						>
							<FormControlLabel
								type="number"
								value="1"
								control={<Radio />}
								label="Ganada"
							/>
							<FormControlLabel
								type="number"
								value="2"
								control={<Radio />}
								label="San Antonio"
							/>
							<FormControlLabel
								type="number"
								value="3"
								control={<Radio />}
								label="Ciudad Jardín"
							/>
							<FormControlLabel
								type="number"
								value="4"
								control={<Radio />}
								label="El Limonar"
							/>
							<FormControlLabel
								type="number"
								value="5"
								control={<Radio />}
								label="La Flora"
							/>
							<FormControlLabel
								type="number"
								value="6"
								control={<Radio />}
								label="Menga"
							/>
						</RadioGroup>
					</div>
				</div>
				<br />
				<div className="form-group form-design">
					<label htmlFor="mes_datos_eventos">
						¿En que mes le gustaria que se realizara el evento?
					</label>
					<div className="radio">
						<RadioGroup
							row
							arial-label="mes_datos_eventos"
							name="mes_datos_eventos"
							value={this.props.values.data.string_values.mes_datos_eventos}
							onChange={this.props.inputStringChange}
						>
							<FormControlLabel
								type="number"
								value="1"
								control={<Radio />}
								label="Enero"
							/>
							<FormControlLabel
								type="number"
								value="2"
								control={<Radio />}
								label="Febrero"
							/>
							<FormControlLabel
								type="number"
								value="3"
								control={<Radio />}
								label="Marzo"
							/>
							<FormControlLabel
								type="number"
								value="4"
								control={<Radio />}
								label="Abril"
							/>
							<FormControlLabel
								type="number"
								value="5"
								control={<Radio />}
								label="Mayo"
							/>
							<FormControlLabel
								type="number"
								value="6"
								control={<Radio />}
								label="Junio"
							/>
							<FormControlLabel
								type="number"
								value="7"
								control={<Radio />}
								label="Julio"
							/>
							<FormControlLabel
								type="number"
								value="8"
								control={<Radio />}
								label="Agosto"
							/>
							<FormControlLabel
								type="number"
								value="9"
								control={<Radio />}
								label="Septiembre"
							/>
							<FormControlLabel
								type="number"
								value="10"
								control={<Radio />}
								label="Octubre"
							/>
							<FormControlLabel
								type="number"
								value="11"
								control={<Radio />}
								label="Noviembre"
							/>
							<FormControlLabel
								type="number"
								value="12"
								control={<Radio />}
								label="Diciembre"
							/>
						</RadioGroup>
					</div>
				</div>
				<br />
				<div className="form-group form-design">
					<label htmlFor="medio_datos_eventos">
						¿Cuáles son los medios por los cuales regularmente recibe
						información del evento?
					</label>
					<RadioGroup
						row
						arial-label="medio_datos_eventos"
						name="medio_datos_eventos"
						value={this.props.values.data.string_values.medio_datos_eventos}
						onChange={this.props.inputStringChange}
					>
						<FormControlLabel
							type="text"
							value="1"
							control={<Radio />}
							label="Periódico"
						/>
						<FormControlLabel
							type="text"
							value="2"
							control={<Radio />}
							label="Radio"
						/>
						<FormControlLabel
							type="text"
							value="3"
							control={<Radio />}
							label="TV"
						/>
						<FormControlLabel
							type="text"
							value="4"
							control={<Radio />}
							label="Internet"
						/>
						<FormControlLabel
							type="text"
							value="5"
							control={<Radio />}
							label="Volante"
						/>
					</RadioGroup>
				</div>
				<br />
				<div className="form-group form-design">
					<label htmlFor="mascota_si_no">
						¿Le gustaria llevar a su mascota al evento?
					</label>
					<div className="radio">
						<RadioGroup
							row
							arial-label="mascota_si_no"
							name="mascota_si_no"
							value={this.props.values.data.string_values.mascota_si_no}
							onChange={this.props.inputStringChange}
						>
							<FormControlLabel value="1" control={<Radio />} label="Si" />
							<FormControlLabel value="2" control={<Radio />} label="No" />
						</RadioGroup>
					</div>
				</div>
				<br />
				<div className="row">
					<div className="col-6">
						<button className="btn btn-primary" onClick={this.back}>
							Atrás.
						</button>
						<button className="btn btn-primary" onClick={this.submitInfo}>
							Submit
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default EigthPart;
