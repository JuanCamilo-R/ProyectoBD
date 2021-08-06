import express from "express";

import { router } from "./routes/index";
const PORT = 4000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//EndPoints
app.use("/database", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
