"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsModel = exports.StudentsSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
// 2. schema
exports.StudentsSchema = new mongoose_1.default.Schema({
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
    dateOfBirth: {
        type: Date,
        required: [true, "Missing date of birth"]
    },
    gender: {
        type: String,
        required: [true, "Missing gander"],
        trim: true
    },
    address: {
        type: String,
        required: [true, "Missing address"],
        trim: true
    },
    createdIn: {
        type: Date,
        default: Date.now()
    },
    plans: {
        type: [],
        trim: true
    },
    group: {
        type: String,
        trim: true
    }
});
// 3. Model
exports.StudentsModel = mongoose_1.default.model("StudentsModel", exports.StudentsSchema, 'students');
