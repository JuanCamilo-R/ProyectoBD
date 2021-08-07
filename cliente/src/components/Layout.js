import React from "react";

import TheNavbar from "./Navbar";
import MyFooter from "./Footer";
function Layout(props) {
	return (
		<React.Fragment>
			<TheNavbar />
			{props.children}
			<MyFooter />
		</React.Fragment>
	);
}

export default Layout;
