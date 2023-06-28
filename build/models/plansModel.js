"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansModel = exports.PlansSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Type;
(function (Type) {
    Type["booleany"] = "\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05DC\u05E4\u05D9 \u05D4\u05E6\u05DC\u05D7\u05D4 \u05D0\u05D5 \u05DC\u05D0";
    Type["scalar"] = "\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05DC\u05E4\u05D9 \u05D3\u05D9\u05E8\u05D5\u05D2 \u05D4\u05E6\u05DC\u05D7\u05D4";
})(Type || (Type = {}));
var ReportingType;
(function (ReportingType) {
    ReportingType["days"] = "\u05D9\u05D5\u05DE\u05D9";
    ReportingType["hours"] = "\u05E9\u05E2\u05EA\u05D9";
    ReportingType["minutes"] = "\u05D3\u05E7\u05EA\u05D9";
})(ReportingType || (ReportingType = {}));
var QuizModel = /** @class */ (function () {
    function QuizModel() {
        this.title = "";
        this.type = Type.booleany;
        this.answer = [];
    }
    return QuizModel;
}());
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
    reportingTime: {
        type: Number,
        required: [true, "Missing time"],
    },
    reportingType: {
        type: String,
        required: [true, "Missing circulating"],
        enum: Object.values(ReportingType)
    },
    quiz: {
        type: [
            {
                title: {
                    type: String,
                    required: [true, "Missing title"],
                    trim: true
                },
                type: {
                    type: String,
                    required: [true, "Missing type"],
                    enum: Object.values(Type)
                },
                answer: {
                    type: [String],
                    required: [true, "Missing answer"]
                }
            }
        ],
        required: [true, "Missing quiz"]
    }
});
// 3. Model
exports.PlansModel = mongoose_1.default.model("PlansModel", exports.PlansSchema, 'plans');
