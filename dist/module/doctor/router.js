"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctor_route = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
exports.doctor_route = express_1.default.Router();
exports.doctor_route.post("/user-login", controller_1.default.loginUserController);
exports.doctor_route.post("/user-register", controller_1.default.registerUserController); //User Controll
exports.doctor_route.post("/get-appointment", controller_1.default.getAllAppointmentController);
exports.doctor_route.post("/delete", controller_1.default.deleteAppointmentController); //User Controll
exports.doctor_route.post("/add-appointment", controller_1.default.addAppointmentController); //User Controll
exports.doctor_route.post("/reschedule", controller_1.default.rescheduleAppointmentController);
