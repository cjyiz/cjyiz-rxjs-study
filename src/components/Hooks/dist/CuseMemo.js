"use strict";
exports.__esModule = true;
exports.CuseMemo = void 0;
var react_1 = require("react");
// 一般是在有大量计算的时候使用
exports.CuseMemo = function () {
    var countMemoValue = function (a, b) {
        console.log("计算出的value", a, b);
        return {
            name: a,
            age: b
        };
    };
    var _a = react_1.useState("小红"), name = _a[0], setName = _a[1];
    var _b = react_1.useState("半岁"), age = _b[0], setAge = _b[1];
    var _c = react_1.useState(0), count = _c[0], setCount = _c[1];
    console.log("useMemo执行外面");
    var memoizedValue = react_1.useMemo(function () {
        console.log("useMemo执行");
        return countMemoValue(name, age);
    }, [name, age]);
    var countClick = function () {
        setCount(function (count) { return count + 1; });
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h1", null, "useMemo"),
            react_1["default"].createElement("div", null,
                "\u540D\u5B57:",
                memoizedValue.name),
            react_1["default"].createElement("div", null,
                "\u5E74\u9F84:",
                memoizedValue.age),
            react_1["default"].createElement("div", null,
                "\u70B9\u51FB\u7684\u6B21\u6570:",
                count),
            react_1["default"].createElement("div", { onClick: countClick, style: { border: "1px solid red", height: "100px", width: "100px" } }, "\u70B9\u51FB\u53D8\u5316"),
            react_1["default"].createElement("div", { onClick: function () {
                    if (name === "小红") {
                        setName("小白");
                    }
                    else {
                        setName("小红");
                    }
                } }, "\u6539\u53D8\u540D\u5B57"))));
};
