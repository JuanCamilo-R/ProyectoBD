"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const modifyRequest_1 = __importDefault(require("./middlewares/modifyRequest"));
const index_1 = require("./routes/index");
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
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
