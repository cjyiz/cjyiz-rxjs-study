"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var CDate_1 = require("./components/JavascriptOperate/CDate");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(CDate_1.CDate, null)));
}
exports["default"] = App;
