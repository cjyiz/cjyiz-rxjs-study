"use strict";
exports.__esModule = true;
exports.CDate = void 0;
var react_1 = require("react");
exports.CDate = function () {
    var date = new Date();
    var a = {
        value: date
    };
    console.log('日期', date, a);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", null)));
};
