"use strict";
exports.__esModule = true;
exports.CDate = void 0;
var react_1 = require("react");
exports.CDate = function () {
    var date = new Date();
    var a = {
        value: date
    };
    console.log("日期", date, a);
    var cjyiz = function () {
        var b = {
            value: new Date()
        };
        console.log("一开始获取的事件", date);
        console.log("发出来的", b);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { onClick: cjyiz }, "\u4F60\u4EEC\u4E0D\u4E00\u6837")));
};
