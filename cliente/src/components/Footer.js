import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//Img
import logo_universidad from "../images/logo_universidad.png";

function MyFooter() {
	return (
		<footer className="myfooter text-center">
			<Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
				<Row>
					<Col md={3}>
						<Row>
							<Col md={12}>
								<h1>Título 1</h1>
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<p>Esto es un footer</p>
							</Col>
						</Row>
					</Col>

					<Col md={3}>
						<Row>
							<Col md={12}>
								<h1>Título 2</h1>
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<p>Esto es un footer</p>
							</Col>
						</Row>
					</Col>
					<Col md={3}>
						<Row>
							<Col md={12}>
								<h1>Título 3</h1>
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<p>Esto es un footer</p>
							</Col>
						</Row>
					</Col>
					<Col md={3}>
						<img id="logo_u" src={logo_universidad} />
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default MyFooter;
