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
exports.Subscriber = exports.state = void 0;
var react_1 = require("react");
var recoil_1 = require("recoil");
exports.state = (0, recoil_1.atom)({
    key: 'test',
    "default": []
});
var Subscriber = function () {
    var setTest = (0, recoil_1.useSetRecoilState)(exports.state);
    react_1["default"].useEffect(function () {
        var u = function (old) {
            var item = Math.random();
            if (old.length >= 5000) {
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
// export const Test = () => {
//   const test = useRecoilValue(state);
//   return <div>{test.length}</div>;
// };
