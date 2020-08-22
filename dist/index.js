"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = express_1["default"]();
app.get("/", function (req, res) { return res.json({ status: "UP" }); });
app.listen(80, function () { return console.log("Running server"); });
//# sourceMappingURL=index.js.map