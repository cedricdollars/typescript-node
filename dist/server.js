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
var bodyParser = __importStar(require("body-parser"));
var dotenv = __importStar(require("dotenv"));
var express_1 = __importDefault(require("express"));
dotenv.config();
var indexRoute_1 = __importDefault(require("./routes/indexRoute"));
var error_handler_1 = __importDefault(require("./error/error_handler"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.middleware();
        this.router(this.app);
    }
    /**
    * use Middleware functions
    */
    Server.prototype.middleware = function () {
        this.app.use(express_1.default.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(error_handler_1.default);
    };
    /**
     * Routes definitions
    */
    Server.prototype.router = function (app) {
        indexRoute_1.default.initRoute(app);
    };
    return Server;
}());
exports.default = new Server().app;
//# sourceMappingURL=server.js.map