"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = __importDefault(require("../../middlware/error"));
const repository_1 = __importDefault(require("./repository"));
const register_model_1 = __importDefault(require("../../models/register_model"));
const register_user_model_1 = __importDefault(require("../../models/register_user_model"));
class DoctorController {
}
_a = DoctorController;
DoctorController.getAllAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        console.log("Email To Get Data: ", email);
        let result;
        if (email === "doc@gmail.com") {
            console.log("If email: ", email);
            result = yield repository_1.default.getAllAppointmentRepository();
            console.log("Appointment for Doc: ", result);
        }
        else {
            console.log("else email: ", email);
            result = yield repository_1.default.getUserAppointment(email);
            //console.log("Appointment for user: ", result);
        }
        if (!result) {
            throw new error_1.default(404, "No appointment found", "No appointment found");
        }
        res.status(200).json({
            code: 200,
            title: "Appointment ",
            message: "Appointment ",
            data: result,
        });
    }
    catch (e) {
        if (e instanceof error_1.default) {
            res.status(e.code).json({
                code: e.code,
                title: e.title,
                message: e.message,
            });
        }
        else if (e instanceof Error) {
            res.status(500).json({
                code: 500,
                title: e.name,
                message: e.message,
            });
        }
        else {
            res.status(500).json({
                code: 500,
                title: "Error",
                message: "Internal Server Error",
            });
        }
    }
});
DoctorController.deleteAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    console.log("id :", id);
    const result = yield repository_1.default.deleteAppointmentRepository(id);
    if (result.deletedCount === 0) {
        // No document was deleted, handle it accordingly
        return res.status(404).json({
            code: 404,
            title: "Not Found",
            message: "No appointment found with the given ID",
        });
    }
    res.status(200).json({
        code: 200,
        title: "Appointment Deleted",
        message: "Appointment deleted successfully",
        data: result,
    });
    try {
    }
    catch (e) {
        if (e instanceof error_1.default) {
            res.status(e.code).json({
                code: e.code,
                title: e.title,
                message: e.message,
            });
        }
        else if (e instanceof Error) {
            res.status(500).json({
                code: 500,
                title: e.name,
                message: e.message,
            });
        }
        else {
            res.status(500).json({
                code: 500,
                title: "Error",
                message: "Internal Server Error",
            });
        }
    }
});
DoctorController.addAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const details = req.body;
        console.log("Type: ", typeof details.appointmentDate);
        console.log("details :", details);
        const check = new register_model_1.default(details);
        const result = yield repository_1.default.addAppointmentRepository(details);
        res.status(200).json({
            code: 200,
            title: "Appointment Added",
            message: "Appointment Added",
            data: result,
        });
    }
    catch (e) {
        if (e instanceof error_1.default) {
            res.status(e.code).json({
                code: e.code,
                title: e.title,
                message: e.message,
            });
        }
        else if (e instanceof Error) {
            res.status(500).json({
                code: 500,
                title: e.name,
                message: e.message,
            });
        }
        else {
            res.status(500).json({
                code: 500,
                title: "Error",
                message: "Internal Server Error",
            });
        }
    }
});
DoctorController.registerUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        console.log("UserRegiData: ", userData);
        const registration = new register_user_model_1.default(userData);
        const result = yield repository_1.default.registerUserRepository(userData);
        res.status(200).json({
            code: 200,
            title: "Success",
            message: "User registered successfully",
            data: result,
        });
    }
    catch (e) {
        if (e instanceof error_1.default) {
            res.status(e.code).json({
                code: e.code,
                title: e.name,
                message: e.message,
            });
        }
        else if (e instanceof Error) {
            res.status(500).json({
                code: 500,
                title: e.name,
                message: e.message,
            });
        }
        else {
            res.status(500).json({
                code: 500,
                title: "Error",
                message: "Internal server error",
            });
        }
    }
});
DoctorController.loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        console.log("UserRegiData: ", userData);
        const result = yield repository_1.default.loginUserRepository(userData);
        res.status(200).json({
            code: 200,
            title: "Success",
            message: "User login successfully",
            data: result,
        });
    }
    catch (e) {
        if (e instanceof error_1.default) {
            res.status(e.code).json({
                code: e.code,
                title: e.name,
                message: e.message,
            });
        }
        else if (e instanceof Error) {
            res.status(500).json({
                code: 500,
                title: e.name,
                message: e.message,
            });
        }
        else {
            res.status(500).json({
                code: 500,
                title: "Error",
                message: "Internal server error",
            });
        }
    }
});
DoctorController.rescheduleAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    console.log("id :", id);
    const result = yield repository_1.default.getUserAppointment(id);
    const delAppointment = yield repository_1.default.deleteAppointmentRepository(id);
    if (delAppointment.deletedCount === 0) {
        // No document was deleted, handle it accordingly
        return res.status(404).json({
            code: 404,
            title: "Not Found",
            message: "No appointment found with the given ID",
        });
    }
    res.status(200).json({
        code: 200,
        title: "Appointment Reschedule",
        message: "Appointment Reschedule successfully",
        data: result,
    });
    try {
    }
    catch (e) {
        if (e instanceof error_1.default) {
            res.status(e.code).json({
                code: e.code,
                title: e.title,
                message: e.message,
            });
        }
        else if (e instanceof Error) {
            res.status(500).json({
                code: 500,
                title: e.name,
                message: e.message,
            });
        }
        else {
            res.status(500).json({
                code: 500,
                title: "Error",
                message: "Internal Server Error",
            });
        }
    }
});
exports.default = DoctorController;
