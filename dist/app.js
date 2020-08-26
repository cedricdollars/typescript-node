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
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var indexRouter_1 = __importDefault(require("./routes/indexRouter"));
var path_1 = __importDefault(require("path"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.config();
    }
    /**
    * Configuration application
    */
    App.prototype.config = function () {
        this.app
            .use('*', cors_1.default())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({ extended: false }))
            .set("views", path_1.default.join(__dirname, "views"))
            .set("view engine", "ejs");
        //add routes
        this.app.use('/api/v1', indexRouter_1.default);
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map