"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
var jwt = __importStar(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config/config"));
exports.verifyToken = function (req, res, next) {
    var token = req.headers['x-access-token'];
    var payload;
    if (!token) {
        return res.status(400).send({
            auth: false,
            message: 'Missing token'
        });
    }
    try {
        payload = jwt.verify(token, config_1.default.jwtSecret);
        res.locals.payload = payload;
    }
    catch (error) {
        res.status(401).send({
            auth: false,
            message: "No authorized"
        });
    }
    var userId = payload.userId, username = payload.username;
    var userToken = jwt.sign({
        userId: userId,
        username: username
    }, config_1.default.jwtSecret, { expiresIn: "1h" });
    res.setHeader('token', userToken);
    next();
};
//# sourceMappingURL=verifyToken.js.map