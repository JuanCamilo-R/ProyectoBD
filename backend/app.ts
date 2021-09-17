import express from "express";
import fs from "fs";
import React from "react";
// import ReactDOMServer from "react-dom/server";

import modifyRequest from "./middlewares/modifyRequest";
import { router } from "./routes/index";
// import App from "../cliente/src/components/App.js";

const PORT = 4000;
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(modifyRequest);
//EndPoints
app.use("/database", router);
app.use(express.static(path.join(__dirname, "../", "cliente", "build")));
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "../", "cliente", "build", "index.html"));
});

// app.use("^/$", (req, res, next) => {
// 	fs.readFile(
// 		path.resolve(path.join(__dirname, "../"), "build", "index.html"),
// 		"utf-8",
// 		(err, data) => {
// 			if (err) {
// 				console.log(err);
// 				return res.status(500).send("Some error happened");
// 			}
// 			return res.send(
// 				data.replace(
// 					'<div id="root"></div>',
// 					`<id="root"/>${ReactDOMServer.renderToString(<App />)}</div>`
// 				)
// 			);
// 		}
// 	);
// 	// res.sendFile(
// 	// 	path.resolve(path.join(__dirname, "../"), "cliente", "build", "index.html")
// 	// );
// });

// app.use(express.static("../cliente/build"));

// const root = require("path").join(__dirname, "../", "cliente", "build");
// app.use(express.static(root));
// app.get("*", (req, res) => {
// 	res.sendFile("index.html", { root });
// });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
