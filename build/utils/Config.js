"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this.connectionString = process.env.CONNECTIONSTRING || "";
    }
    return AppConfig;
}());
var appConfig = new AppConfig();
exports.default = appConfig;
