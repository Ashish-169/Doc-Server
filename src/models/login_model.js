"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = __importDefault(require("../middlware/error"));
class User {
    constructor(user) {
        this.email = user.email;
        this.password = user.password;
        // Console logging for debugging (optional)
        // console.log("email:", user.email);
        // console.log("password:", user.password);
        // Validate fields
        this.validateUserModelInfoFields();
    }
    // Method to validate the presence of required fields
    validateUserModelInfoFields() {
        const missingFields = [];
        if (!this.email) {
            missingFields.push("User Model email");
        }
        if (!this.password) {
            missingFields.push("User Model password");
        }
        // If there are missing fields, throw an error
        if (missingFields.length > 0) {
            let errorMessage = `Missing Fields: ${missingFields.join(", ")}.`;
            throw new error_1.default(400, "Validation Error", errorMessage);
        }
    }
}
exports.default = User;
