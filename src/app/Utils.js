"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const url_1 = require("url");
class Utils {
    static parseUrl(url) {
        if (!url)
            throw new Error('Empty Url');
        return (0, url_1.parse)(url, true);
    }
    static toUpperCase(arg) {
        return arg.toUpperCase();
    }
}
exports.Utils = Utils;
const last = (arr) => arr[arr.length - 1];
const l = last([1, 2, 3]);
const l2 = last(['a', 'b', 'c']);
const makeArr = (x, y) => [x, y];
const v = makeArr(5, 6);
const v2 = makeArr([12, true], 5);
const v3 = makeArr('a', 8);
//returning a tuple
const makeTuple = (x, y) => [x, y];
const stringTuple = makeTuple('5', 'e');
//Function signature
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
