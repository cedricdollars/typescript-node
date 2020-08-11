"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var indexController_1 = __importDefault(require("../controllers/indexController"));
// const indexRouter = express.Router();
// /**
//  * Routes definition 
//  */
// const indexController: IndexController = new IndexController();
//  // GET an id
// indexRouter.route('/').get(indexController.index)
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.initRoute = function (app) {
        app.route('/').get(indexController_1.default.index);
    };
    return Routes;
}());
exports.default = new Routes();
