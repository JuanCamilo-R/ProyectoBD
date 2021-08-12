import express from "express";

import modifyRequest from "./middlewares/modifyRequest";
import { router } from "./routes/index";

const PORT = 4000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(modifyRequest);
//EndPoints
app.use("/database", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
