import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./ComponentStyles/Home.css";
import "./ComponentStyles/Footer.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import TheNavbar from "../components/Navbar";

import MyFooter from "./Footer";

//Images
import logo_bichoclo from "../images/LOGO-BICHOCLO.png";

class Badge extends React.Component {
	state = {
		show: false,
	};
	render() {
		return (
			<div>
				<TheNavbar />
				<div className="main">
					<div className="main__container--logo">
						<img
							className="main__logo"
							src={logo_bichoclo}
							alt="Bichoclo logo"
						></img>
					</div>
					<div className="text-center">
						<Link to="/Form">
							<Button className="main__form-button" variant="outline-warning">
								Llena el form, rey
							</Button>
						</Link>
					</div>

					<button
						className="btn btn-outline-success btn-margin"
						onClick={() => {
							this.setState({
								show: !this.state.show,
							});
						}}
					>
						Propósito:
					</button>
					{this.state.show ? (
						<blockquote>
							<p>
								Somos una empresa en el sector de entretenimiento que desea
								hacer un estudio de mercado en la ciudad de Cali,con el
								propósito de entender las tendencias y gustos de la población
								caleña. <br /> Al finalizar el estudio se debe tomar la decisión
								de cuál evento se ha de realiza.
							</p>
						</blockquote>
					) : null}
				</div>
				<MyFooter />
			</div>
		);
	}
}
export default Badge;
