"use strict";
exports.__esModule = true;
exports.CuseCallback = void 0;
var react_1 = require("react");
// 父组件重新渲染，避免让子组件重新渲染，可以使用useCallback
exports.CuseCallback = function () {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    var _b = react_1.useState("red"), color = _b[0], setColor = _b[1];
    var c1 = function () {
        console.log("没有callback", count, color);
    };
    // useCallback,依赖一旦变化，里面所有的依赖会同步成文件的当前这状态
    var c2 = react_1.useCallback(function (color) {
        console.log("用callback包裹", count, color);
    }, [color]);
    var handleClick = function () {
        setCount(function (count) { return count + 1; });
    };
    var changeColor = function () {
        setColor("blue");
    };
    console.log("真实的count", count);
    c1();
    c2(color);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", null, "useCallback"),
        react_1["default"].createElement("button", { onClick: handleClick }, "\u70B9\u51FB\u53D8\u5316"),
        react_1["default"].createElement("button", { onClick: changeColor }, "\u70B9\u51FB\u53D8\u5316")));
};
