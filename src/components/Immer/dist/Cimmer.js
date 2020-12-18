"use strict";
exports.__esModule = true;
exports.Cimmer = void 0;
var react_1 = require("react");
var immer_1 = require("immer");
// immer本质就是一个数据管道，保持元数据不变，创一个一个副本数据，进行操作修改，返回一个新的数据。
// 还有个setAutoFreeze(true / false)可以显式控制数据冻结
// patches是对操作进行打补丁，后续补充研究
exports.Cimmer = function () {
    var baseState = [
        {
            todo: "learn typescript",
            done: true
        },
        {
            todo: "try immer",
            done: false
        },
    ];
    // 使用immer:基础数据,草稿数据,最终数据
    // 草稿数据对基础数据进行计算，但是不会对基础数据产生影响
    var nextState = immer_1.produce(baseState, function (draftState) {
        draftState.push({ todo: "tweet", done: false });
        // 这个current永远代表着当前的draftState值
        var currentState = immer_1.current(draftState);
        draftState[1].done = true;
        setTimeout(function () {
            console.log("定时器内当前的测试", currentState);
        }, 100);
        // 用上original其实就是替代了
        var initState = immer_1.original(draftState);
        console.log("original测试", initState);
        // 这个打出来是个proxy
        console.log("current测试", currentState);
    });
    console.log("下一个参数", nextState, baseState);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", null, "immer\u6D4B\u8BD5")));
};
