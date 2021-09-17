import { Router } from "express";
import {
	getUser,
	createUser,
	deleteUser,
	updateUser,
} from "../controllers/index.controller";
const router = Router();
// const path = require("path");

router.get("/consultar", getUser);
router.post("/crear", createUser);
router.delete("/borrar/:id", deleteUser);
router.put("/actualizar", updateUser);
export { router };
