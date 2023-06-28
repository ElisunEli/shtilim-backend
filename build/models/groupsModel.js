"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupsModel = exports.GroupsSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
// 2. schema
exports.GroupsSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Missing first name"],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    userId: {
        type: String,
        trim: true
    }
});
// 3. Model
exports.GroupsModel = mongoose_1.default.model("GroupsModel", exports.GroupsSchema, 'groups');
