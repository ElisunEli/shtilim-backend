"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var usersController_1 = __importDefault(require("./controllers/usersController"));
var studentsController_1 = __importDefault(require("./controllers/studentsController"));
var cors_1 = __importDefault(require("cors"));
var dl_1 = __importDefault(require("./utils/dl"));
dl_1.default.connect();
var server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use("/api", usersController_1.default);
server.use("/api", studentsController_1.default);
server.get("/", function (req, response) {
    response.send("API 1.0.0");
});
server.listen("4001", function () { return console.log("Listening to http://localhost:4001"); });
