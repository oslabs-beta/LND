"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express, { Request, Response, NextFunction } from 'express';
// import todosRoutes from './src/routes/todos';
//Lastly, send the client back their file with clarity from llnode but compressed with zLib or gzip
const process_1 = __importDefault(require("process"));
const os_1 = __importDefault(require("os"));
const readline_1 = __importDefault(require("readline"));
const fs_1 = __importDefault(require("fs"));
const osObject = {
    arch: os_1.default.arch(),
    platform: os_1.default.platform(),
    freemem: os_1.default.freemem(),
    cpus: os_1.default.cpus().length,
};
//grab file from the client
//make a core
//Read the file
//When core file location is dropped into root folder, call a function that reads stream
// console.log(recoilPost);
const myInterface = readline_1.default.createInterface({
    // input: fs.createReadStream('core.5663'),
    input: fs_1.default.createReadStream('/Users/jirehmaddox/Desktop/teamWork/workingLND/LND/lldb_session_2021-11-19_13:32:45.201888000.log'),
    //cannot find the module
});
let numofLines = 0;
myInterface.on('line', (fileLine) => {
    ++numofLines;
    console.log(`${fileLine}`, numofLines);
});
//Happens AFTER the node abort from the client file
//in future, for the core file; currently, we are just making a dump file from the client side
const dumpLocation = () => process_1.default.stdout.write('Please move the location of your core file to this pwd. ');
const osSystemFinder = (platform) => {
    switch (platform) {
        //Mac
        case 'darwin':
            return dumpLocation();
        case 'linux':
            return 'Your core file is located in your root pwd';
        //else
        default:
            console.log('Your operating system is not supported at this time');
    }
    return;
};
osSystemFinder(osObject.platform);
//SECOND: SHOW OS Free memory vs total memory , cpus
// const app = express();
// app.use('/todos', todosRoutes);
// app.use((err: Error, req: Request, response: Response, next: NextFunction) => {
// 	response.status(500).json({ message: err.message });
// });
// app.listen(3000, () => console.log('Server is running'));
// const { spawn } = require('child_process');
// const colors = require('colors');
// const { cpus } = require('os');
// const os = require('os');
// const http = require('http');
// const cluster = require('cluster');
// const process = require('process');
// const { dirname } = require('path');
// const core = require('/Users/jirehmaddox/Desktop/teamWork/LND/LND/core.5663');
//expensive process; maybe use workers to help read the streams?
// const server = http.createServer((req, res) => {
// 	console.log(__dirname, 'DIR');
// 	const stream = fs.createReadStream(__dirname + '/core.5663');
// 	console.log('STREAM'.bgWhite, stream);
// 	stream.pipeline(res);
// });
// server.listen(3000);
// setTimeout(function delayedFailure() {
// 	// process.abort();
// 	throw new Error('Fail not really fast');
// 	//process.abort();
// }, 500);
//look further into clusters
