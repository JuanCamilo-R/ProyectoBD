"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import ReactDOMServer from "react-dom/server";
const modifyRequest_1 = __importDefault(require("./middlewares/modifyRequest"));
const index_1 = require("./routes/index");
// import App from "../cliente/src/components/App.js";
const PORT = 4000;
const path = require("path");
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(modifyRequest_1.default);
//EndPoints
app.use("/database", index_1.router);
app.use(express_1.default.static(path.join(__dirname, "../", "cliente", "build")));
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
