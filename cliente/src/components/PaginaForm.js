import React from "react";
import "./ComponentStyles/Badge.css";
import Forms from "./Forms";
import { Container } from "react-bootstrap";
class PaginaForm extends React.Component {
	render() {
		return (
			<div>
				<div className="h-100 Form">
					<Container>
						<div>
							<div className="container-style">
								<Forms history={this.props.history} />
							</div>
						</div>
					</Container>
				</div>
			</div>
		);
	}
}

export default PaginaForm;
