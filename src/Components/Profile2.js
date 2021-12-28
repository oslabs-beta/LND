"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUrl = void 0;
const react_1 = __importDefault(require("react"));
const recoil_1 = require("recoil");
const recoilPOST_1 = require("./recoilPOST");
// THIS IS EXAMPLE URL FOR TESTING
exports.postUrl = 'https://jsonplaceholder.typicode.com/posts';
const Profile = () => {
    const [username, setUsername] = (0, recoil_1.useRecoilState)(recoilPOST_1.usernameState);
    const submitHandler = (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        console.log('triggered submitHandler');
        fetch(exports.postUrl, {
            //CHANGE postUrl to '/core'
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: { username },
            }),
        });
        setUsername((oldUsername) => [
            ...oldUsername,
            { id: username.id, username: { username } },
        ]);
        setUsername('');
    });
    //onClick will invoke the submitHandler
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "Profile:"),
        react_1.default.createElement("input", { type: 'text', value: username, onChange: (event) => setUsername(event.target.value) }),
        react_1.default.createElement("button", { onClick: submitHandler }, "Submit")));
};
exports.default = Profile;
