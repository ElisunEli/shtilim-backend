"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitiesModel = exports.ActivitiesSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
// 2. schema
exports.ActivitiesSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Missing first name"],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    planId: {
        type: String,
        required: [true, "Missing plan"],
        trim: true
    },
    studentId: {
        type: String,
        required: [true, "Missing student"],
        trim: true
    },
    grade: {
        type: [{ type: Number,
                min: 0,
                max: 4 }],
        required: [true, "Missing grade"]
    },
    createdIn: {
        type: Date,
        default: Date.now()
    },
});
// 3. Model
exports.ActivitiesModel = mongoose_1.default.model("ActivitiesModel", exports.ActivitiesSchema, 'activities');
