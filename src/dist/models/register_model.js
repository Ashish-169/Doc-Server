"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = __importDefault(require("../middlware/error"));
class Registration {
    constructor(registration) {
        this.name = registration.name;
        this.email = registration.email;
        this.phone = registration.phone;
        this.appointmentDate = registration.appointmentDate;
        this.purpose = registration.purpose;
        // Optional: Console logging for debugging purposes
        // console.log("name:", registration.name);
        // console.log("email:", registration.email);
        // console.log("phone:", registration.phone);
        // console.log("appointmentDate:", registration.appointmentDate);
        // console.log("purpose:", registration.purpose);
        // Validate fields
        this.validateRegistrationModelInfoFields();
    }
    // Method to validate the presence of required fields
    validateRegistrationModelInfoFields() {
        const missingFields = [];
        if (!this.name) {
            missingFields.push("Registration Model name");
        }
        if (!this.email) {
            missingFields.push("Registration Model email");
        }
        if (!this.phone) {
            missingFields.push("Registration Model phone");
        }
        if (!this.appointmentDate) {
            missingFields.push("Registration Model appointmentDate");
        }
        if (!this.purpose) {
            missingFields.push("Registration Model purpose");
        }
        // If there are missing fields, throw an error
        if (missingFields.length > 0) {
            let errorMessage = `Missing Fields: ${missingFields.join(", ")}.`;
            throw new error_1.default(400, "Validation Error", errorMessage);
        }
    }
}
exports.default = Registration;
