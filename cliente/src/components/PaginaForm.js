import React from "react";
import "./ComponentStyles/Badge.css";
import Forms from "./Forms";
import TheNavbar from "./Navbar";
import MyFooter from "./Footer";
import { Container } from "react-bootstrap";
class PaginaForm extends React.Component {
	render() {
		return (
			<div>
				<TheNavbar />
				<div className="h-100 Form">
					<Container>
						<div>
							<div className="container-style">
								<Forms />
							</div>
						</div>
					</Container>
				</div>
				<div>
					<MyFooter />
				</div>
			</div>
		);
	}
}

export default PaginaForm;
