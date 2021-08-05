"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require("body-parser");
const index_1 = require("./routes/index");
const PORT = 4000;
const app = express_1.default();
const mountRoutes = require("./routes");
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//EndPoints
//app.use(router);
app.use("/database", index_1.router);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
