"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.CjCarousel = void 0;
var react_1 = require("react");
var react_slick_1 = require("react-slick");
exports.CjCarousel = function () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(react_slick_1["default"], __assign({}, settings),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h3", null, "1")),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h3", null, "2")),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h3", null, "3")),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h3", null, "4")),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h3", null, "5"))))));
};
