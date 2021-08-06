import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

//Imgs
import logo_bichoclo from "../images/LOGO-BICHOCLO.png";

class TheNavbar extends React.Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark">
				<Link to="/">
					<Navbar.Brand>
						<img
							alt=""
							src={logo_bichoclo}
							width="50"
							height="50"
							className="d-inline-block align-top"
						/>{" "}
						<div className="d-inline-block align-down">
							<h2>BiChoclo</h2>
						</div>
					</Navbar.Brand>
				</Link>
			</Navbar>
		);
	}
}

export default TheNavbar;
