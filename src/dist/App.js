"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var CuseMemo_1 = require("./components/Hooks/CuseMemo");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(CuseMemo_1.CuseMemo, null)));
}
exports["default"] = App;
