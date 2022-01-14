"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = __importDefault(require("process"));
const v8_1 = __importDefault(require("v8"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// connect to db
const db_1 = __importDefault(require("./db"));
console.log('CONNECT: ', db_1.default);
// eventually will move this into a route for cleanliness
app.get('/memory', (req, res, next) => {
    res.status(200).send({ memory: v8_1.default.getHeapStatistics() });
});
// Starting the socket
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        credentials: true,
    },
});
// io.attach(8080);
io.on('connection', (socket) => {
    console.log('socket ID: ', socket.id);
    socket.on('disconnect', () => {
        console.log('DISCONNECTED');
    });
});
// for when the seg fault occurs/crash
// This should really be taken care of by the socket disconnect...jic?
process_1.default.on('SIGSEGV', () => {
    console.log(process_1.default.pid);
    // report?.getReport();
    console.log('Process id: ', process_1.default.pid);
    process_1.default.abort();
});
// May not be necessary to have io listen but not sure yet
io.listen(3000);
app.listen(3001, () => {
    console.log('App is listening');
});
