import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Badge from "./Badge";
import Layout from "./Layout";
import PaginaForm from "./PaginaForm";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Badge} />
					<Route exact path="/form" component={PaginaForm} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
