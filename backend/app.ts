import express, { Request, Response } from "express";
const bodyParser = require("body-parser");

import { router } from "./routes/index";
const PORT = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EndPoints
app.use(router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
