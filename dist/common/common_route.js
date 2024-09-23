"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.common_route = void 0;
const express_1 = __importDefault(require("express"));
//comment to push to git
exports.common_route = express_1.default.Router();
exports.common_route.get("/", (req, res) => {
    res.json({ message: "Server is up and running" });
});
exports.common_route.get("/health", (req, res) => {
    res.json({ message: "Server is healthy, up and running" });
});
