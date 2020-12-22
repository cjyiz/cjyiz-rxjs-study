"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
// import {Cimmer} from './components/Immer/Cimmer'
var CMoveable_1 = require("./components/Moveable/CMoveable");
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(CMoveable_1.CMoveable, null)));
}
exports["default"] = App;
