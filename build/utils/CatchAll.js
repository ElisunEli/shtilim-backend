"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function catchAll(err, req, response) {
    console.log(err);
    response.status(400).send("err.message");
}
exports.default = catchAll;
