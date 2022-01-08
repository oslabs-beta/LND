"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.Test = exports.Subscriber = exports.state = void 0;
var react_1 = require("react");
var recoil_1 = require("recoil");
var socket_io_client_1 = require("socket.io-client");
// Est socket connection
var socket = (0, socket_io_client_1["default"])('http://localhost:3000', { autoConnect: true });
// socket.connect();
exports.state = (0, recoil_1.atom)({
    key: 'test',
    "default": []
});
var Subscriber = function () {
    var setTest = (0, recoil_1.useSetRecoilState)(exports.state);
    react_1["default"].useEffect(function () {
        var u = function (old) {
            var item = Math.random();
            if (old.length >= 100000) {
                return __spreadArray([item], old.slice(0, -1), true);
            }
            else {
                return __spreadArray([item], old, true);
            }
        };
        var t = function () { return setTest(u); };
        setInterval(t, 10);
    }, []);
    return null;
};
exports.Subscriber = Subscriber;
var Test = function () {
    var test = (0, recoil_1.useRecoilValue)(exports.state);
    return <div>{test.length}</div>;
};
exports.Test = Test;
