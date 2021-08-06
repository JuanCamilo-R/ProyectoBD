import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Badge from "./Badge";
import PaginaForm from "./PaginaForm";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Badge} />
				<Route exact path="/form" component={PaginaForm} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
