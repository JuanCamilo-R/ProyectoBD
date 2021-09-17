import express from "express";
import fs from "fs";
import React from "react";

import modifyRequest from "./middlewares/modifyRequest";
import { router } from "./routes/index";

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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
