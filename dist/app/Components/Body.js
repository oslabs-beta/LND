"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Profile2_1 = __importDefault(require("./Profile2"));
const Body = () => {
    return (react_1.default.createElement("div", { className: 'body' },
        react_1.default.createElement(Profile2_1.default, null)));
};
exports.default = Body;
