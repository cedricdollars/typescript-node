"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_error_1 = __importDefault(require("./api_error"));
var ErrorHandler = function (err, req, res, next) {
    if (err instanceof api_error_1.default) {
        res.status(err.code).json(err.message);
        return;
    }
    res.status(500).json('Something went wrong');
};
exports.default = ErrorHandler;
//# sourceMappingURL=error_handler.js.map