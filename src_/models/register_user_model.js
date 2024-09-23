"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = __importDefault(require("../middlware/error"));
class RegisterUser {
    constructor(userData) {
        this.name = userData.name;
        this.email = userData.email;
        this.password = userData.password;
        this.validateFields();
    }
    validateFields() {
        const missingFields = [];
        if (!this.name) {
            missingFields.push("name");
        }
        if (!this.email) {
            missingFields.push("email");
        }
        if (!this.password) {
            missingFields.push("password");
        }
        if (missingFields.length > 0) {
            const errorMessage = `Missing Fields: ${missingFields.join(", ")}.`;
            throw new error_1.default(400, "Validation Error", errorMessage);
        }
        // You can add more validation here (e.g., email format, password strength)
    }
}
exports.default = RegisterUser;
