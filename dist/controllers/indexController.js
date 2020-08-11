"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.index = function (req, res) {
        res.json({
            message: 'Learning typescript'
        });
    };
    return IndexController;
}());
exports.default = new IndexController();
//# sourceMappingURL=indexController.js.map