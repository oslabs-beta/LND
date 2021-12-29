"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import path from 'path';
// Express app initialization
const app = (0, express_1.default)();
// Template configuration
// app.set('view engine', 'ejs');
// app.set('views', 'public');
// Static files configuration
// app.use('/assets', express.static(path.join(__dirname, 'frontend')));
// Controllers
app.get('/', (req, res) => {
    console.log('Inside get');
    res.render('Inside server.ts');
});
// Start function
app.listen(3004, () => {
    console.log('App is listening');
});
