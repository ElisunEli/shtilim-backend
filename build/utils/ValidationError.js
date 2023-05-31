"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationError = /** @class */ (function () {
    function ValidationError(msg) {
        this.status = 400;
        this.message = msg;
    }
    return ValidationError;
}());
exports.default = ValidationError;
