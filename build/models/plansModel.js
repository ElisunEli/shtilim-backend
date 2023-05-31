"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansModel = exports.PlansSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Type;
(function (Type) {
    Type["booleany"] = "BOOLEAN";
    Type["scalar"] = "SCALAR";
})(Type || (Type = {}));
var ReportingType;
(function (ReportingType) {
    ReportingType["days"] = "DAILY";
    ReportingType["hours"] = "HOURLY";
    ReportingType["minutes"] = "MINUTELY";
})(ReportingType || (ReportingType = {}));
// 2. schema
exports.PlansSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Missing first name"],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        required: [true, "Missing type"],
        trim: true
    },
    gradeDescription: {
        type: [],
        trim: true
    },
    reportingTime: {
        type: Number,
        required: [true, "Missing time"]
    },
    reportingType: {
        type: String,
        required: [true, "Missing circulating"]
    }
});
// 3. Model
exports.PlansModel = mongoose_1.default.model("PlansModel", exports.PlansSchema, 'plans');
