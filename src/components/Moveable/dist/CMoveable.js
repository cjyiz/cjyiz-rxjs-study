"use strict";
exports.__esModule = true;
exports.CMoveable = void 0;
var moveable_1 = require("moveable");
exports.CMoveable = function () {
    var moveable = new moveable_1["default"](document.body, {
        target: document.querySelector(".target"),
        // If the container is null, the position is fixed. (default: parentElement(document.body))
        container: document.body,
        draggable: true,
        resizable: true,
        scalable: true,
        rotatable: true,
        warpable: true,
        // Enabling pinchable lets you use events that
        // can be used in draggable, resizable, scalable, and rotateable.
        pinchable: true,
        origin: true,
        keepRatio: true,
        // Resize, Scale Events at edges.
        edge: false,
        throttleDrag: 0,
        throttleResize: 0,
        throttleScale: 0,
        throttleRotate: 0
    });
    moveable
        .on("resizeStart", function (_a) {
        var target = _a.target, clientX = _a.clientX, clientY = _a.clientY;
        console.log("onResizeStart", target);
    })
        .on("resize", function (_a) {
        var target = _a.target, width = _a.width, height = _a.height, dist = _a.dist, delta = _a.delta, clientX = _a.clientX, clientY = _a.clientY;
        console.log("onResize", target);
        delta[0] && (target.style.width = width + "px");
        delta[1] && (target.style.height = height + "px");
    })
        .on("resizeEnd", function (_a) {
        var target = _a.target, isDrag = _a.isDrag, clientX = _a.clientX, clientY = _a.clientY;
        console.log("onResizeEnd", target, isDrag);
    });
    return (React.createElement("div", null,
        React.createElement("div", { className: "target", style: { height: "300px", width: "300px", border: "1px solid red" } }, "\u8FD9\u662F\u64CD\u4F5C\u533A\u57DF")));
};
