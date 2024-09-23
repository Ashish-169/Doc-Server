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
const database_1 = require("../../config/database");
const error_1 = __importDefault(require("../../middlware/error"));
const mongodb_1 = require("mongodb");
class DoctorRepository {
}
_a = DoctorRepository;
DoctorRepository.getAllAppointmentRepository = () => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.client.connect(); // Always call connect before operations
    const queryResult = yield database_1.client
        .db("master")
        .collection("appointment")
        .find({})
        .toArray();
    return queryResult;
});
DoctorRepository.getUserAppointment = (email) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Repo Email: ", email);
    try {
        yield database_1.client.connect();
        const query = { "details.email": email };
        const queryResult = yield database_1.client
            .db("master")
            .collection("appointment")
            .find(query)
            .toArray();
        return queryResult;
    }
    catch (error) {
        throw new Error(`Failed to retrieve user appointments: ${error}`);
    }
});
DoctorRepository.deleteAppointmentRepository = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Id: ", id);
    yield database_1.client.connect();
    const query = { _id: new mongodb_1.ObjectId(id) };
    const queryResult = yield database_1.client
        .db("master")
        .collection("appointment")
        .deleteOne(query);
    return queryResult;
});
DoctorRepository.addAppointmentRepository = (details) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.client.connect();
    console.log("Repo Details:", details);
    const queryResult = yield database_1.client
        .db("master")
        .collection("appointment")
        .insertOne({ details });
    return queryResult;
});
DoctorRepository.registerUserRepository = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.client.connect();
    console.log("UserData Repo: ", userData);
    const existUser = yield database_1.client
        .db("master")
        .collection("logindata")
        .findOne({ email: userData.email });
    if (existUser) {
        throw new error_1.default(409, "Email already exists", "Email already exists.");
    }
    const queryResult = yield database_1.client
        .db("master")
        .collection("logindata")
        .insertOne(userData);
    return queryResult;
});
DoctorRepository.loginUserRepository = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.client.connect();
    const query = { email: userData.email, password: userData.password };
    console.log("UserData Repo: ", userData);
    const queryResult = yield database_1.client
        .db("master")
        .collection("logindata")
        .findOne(query);
    if (!queryResult) {
        throw new error_1.default(404, "Account Not Found", "Please create an account");
    }
    return queryResult;
});
exports.default = DoctorRepository;
