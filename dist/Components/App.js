"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
// import { RecoilTest } from './Components/recoilPOST';
var App = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_1.default.Suspense, { fallback: react_1.default.createElement("div", null, "loading") },
            react_1.default.createElement("h1", null, "hello"))));
};
exports.default = App;
