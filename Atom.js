import React from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
var darkModeState = atom({
    key: 'darkMode',
    default: false,
});
var DarkModeSwitch = function () {
    var _a = useRecoilState(darkModeState), darkMode = _a[0], setDarkMode = _a[1];
    return (React.createElement("input", { type: 'checkbox', checked: darkMode, onChange: function (event) {
            setDarkMode(event.currentTarget.checked);
        } }));
};
export var Button = function () {
    var darkMode = useRecoilValue(darkModeState);
    return (React.createElement("button", { style: {
            backgroundColor: darkMode ? 'black' : 'white',
            color: darkMode ? 'white' : 'black',
        } }, "My UI Button"));
};
export var Atoms = function () {
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement(DarkModeSwitch, null)),
        React.createElement("div", null,
            React.createElement(Button, null))));
};
