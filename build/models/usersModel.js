"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModel = exports.UsersSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Role;
(function (Role) {
    Role["admin"] = "ADMIN";
    Role["user"] = "USER";
})(Role || (Role = {}));
// 2. schema
exports.UsersSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: [true, "Missing first name"],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "Missing last name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Missing mail"],
        trim: true
    },
    active: {
        type: Boolean,
        required: [true, "Missing activation"]
    },
    role: {
        type: String,
        required: [true, "Missing role"]
    }
});
// 3. Model
exports.UsersModel = mongoose_1.default.model("UsersModel", exports.UsersSchema, 'users');
