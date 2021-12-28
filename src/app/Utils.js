import { parse } from 'url';
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.parseUrl = function (url) {
        if (!url)
            throw new Error('Empty Url');
        return parse(url, true);
    };
    Utils.toUpperCase = function (arg) {
        return arg.toUpperCase();
    };
    return Utils;
}());
export { Utils };
var last = function (arr) { return arr[arr.length - 1]; };
var l = last([1, 2, 3]);
var l2 = last(['a', 'b', 'c']);
var makeArr = function (x, y) { return [x, y]; };
var v = makeArr(5, 6);
var v2 = makeArr([12, true], 5);
var v3 = makeArr('a', 8);
//returning a tuple
var makeTuple = function (x, y) { return [x, y]; };
var stringTuple = makeTuple('5', 'e');
//Function signature
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
