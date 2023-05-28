"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModel = exports.UsersSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
// 2. schema
exports.UsersSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Missing name"],
        trim: true
    },
    age: {
        type: Number,
        required: [true, "Missing age"],
        min: [18, "Age must..."]
    }
});
// 3. Model
exports.UsersModel = mongoose_1.default.model("UsersModel", exports.UsersSchema, 'users');
