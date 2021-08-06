import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./ComponentStyles/Home.css";
import "./ComponentStyles/Footer.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import _default from "react-bootstrap/esm/CardColumns";
import logo from "../images/choclitos.jpg";
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
						<img className="main__logo" src={logo_bichoclo}></img>
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

/*
class Badge extends React.Component {
    render() {
        return (
            <div className="bg-light">
                <Navbar/>
                <div className="container justify-content-center">

                    <div className="row">
                        <div className="logoContainer">
                            <img className="logoStyles center" src={logo_bichoclo}></img>

                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="buttonContainer">
                                <Link to="/Form" className="formButton">Llena el form, rey</Link>
                            </div>
                        </div>
                    </div>


                </div>

                
            </div>




        )

    }

}
*/

/*
   <p className="parrafo"></p>
                    <p className="parrafo">Somos una empresa en el sector de entretenimiento que desea hacer un estudio de</p>
                    <p className="parrafo">mercado en la ciudad de Cali,con el propósito de entender las tendencias y gustos</p>
                    <p className="parrafo">de la población caleña. Al finalizar el estudio se debe tomar la decisión de cuál</p>
                    <p className="parrafo">evento se ha de realizar</p>
*/
export default Badge;
