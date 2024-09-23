"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = require("dotenv");
const router_1 = require("./module/doctor/router");
const common_route_1 = require("./common/common_route");
const database_1 = require("./config/database");
const morgan_1 = __importDefault(require("morgan"));
(0, dotenv_1.configDotenv)();
const port = process.env.PORT || 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.use(common_route_1.common_route);
app.use("/doctor", router_1.doctor_route);
(0, database_1.initializeMongo)();
const server = http_1.default.createServer(app);
server.listen(port, () => {
    console.log(`server running on port ${port} and url http://localhost:${port}/`);
});
module.exports = app;
