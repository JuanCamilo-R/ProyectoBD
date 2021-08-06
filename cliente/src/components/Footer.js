import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//Img
import logo_universidad from "../images/logo_universidad.png";

function MyFooter() {
	return (
		<footer className="myfooter">
			<div className="myFooter__participants">
				<h3>Bicho's Team</h3>
				<article className="myfooter__info">
					<section>
						<div>
							<h6>Andrés Felipe Rincon</h6>
						</div>
					</section>
					<section>
						<div>
							<h6>Jennyfer Belalcazar</h6>
						</div>
					</section>
					<section>
						<div>
							<h6>David Hernandez</h6>
						</div>
					</section>
					<section>
						<div>
							<h6>Juan Camilo Randazzo</h6>
						</div>
					</section>
				</article>
			</div>

			<article class="myfooter__uni-info">
				<img id="logo_u" src={logo_universidad} alt="" />
				<section>
					<b>Universidad del valle</b>
					<p>
						Proyecto del curso <br></br> Base de Datos
					</p>
				</section>
			</article>
		</footer>
	);
}

export default MyFooter;
