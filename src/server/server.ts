import os from 'os';
import fs from 'fs';
import process from 'process';

import colors from 'colors';
colors.enable;

// Instantiate express
import express from 'express';
const app = express();

// import ClinicHeapProfiler from '@clinic/heap-profiler';
// const heapProfiler = new ClinicHeapProfiler();
// console.log(heapProfiler);

// heapProfiler.collect(
// 	['node', './src/app/Components/Leak.js'],
// 	function (err, filepath) {
// 		if (err) throw err;

// 		heapProfiler.visualize(filepath, filepath + '.html', function (err) {
// 			if (err) throw err;
// 		});
// 	}
// );
// console.log(ClinicHeapProfiler);

// const server = require('http').Server(app);
const server = require('http').createServer(app);

//  socket.io first then clinic.js

const io = require('socket.io')(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
		credentials: true,
	},
});
// io.attach(8080);

const sockets = {};

io.on('connection', (socket: any) => {
	// console.log('socket ID: '.bgYellow, socket.id);
	socket.on('Atom sent', (obj: any) => {
		console.log('OBJ: '.america, obj);
		console.log('Process pid: ', process.pid);
		// sockets[socket.id] = socket;
		for (let i in obj) {
			console.log(i);
		}
	});
	socket.on('disconnect', () => {
		console.log('DISCONNECTED'.bgRed);
	});
});

import heapdump from 'heapdump';
import v8profiler from 'v8';
import path from 'path';

const parser = require('heapsnapshot-parser');

// const filename = `../snapshot/${Date.now()}.heapsnapshot`;
const filename = 'Heap.20220105.221242.76459.0.001.heapsnapshot';

heapdump.writeSnapshot(
	path.resolve(__dirname, filename),
	async (err, filename) => {
		const snapshotFile = fs.readFileSync(
			'Heap.20220105.221242.76459.0.001.heapsnapshot',
			{ encoding: 'utf-8' }
		);
		const snapshot = parser.parse(snapshotFile);
		// to write parsed info to a file
		// Append file issue
		const file = await fs.writeFile('src/server/heap.log', snapshot, (err) => {
			console.log('err is: ', err?.message);
		});
		console.log('File: '.blue, file);
	}
);

app.get('/memoryLeak', (req, res, next) => {
	res.send(v8profiler.getHeapStatistics());
});
//console.log(io); //maxHttpBufferSize, listening, upgrade, close, req, upgradeTimeout?

console.log(v8profiler.getHeapStatistics());
// v8profiler.writeHeapSnapshot();
// console.log(os.freemem(), 'FREE MEM');
// console.log(os.totalmem(), 'TOTAL MEM');

// 12 is the error number std
// os.constants.errno.ENOMEM === 12;

// ENETRESET

process.on('SIGSEGV', () => {
	console.log(process.pid);
	// report?.getReport();
	console.log(process.pid);
	process.abort();
});

io.listen(3000);

// if (os.constants ='SIGSEGV') process.abort();
// io.listen(4000);
// app.listen(4000, () => {
// 	console.log(process.pid);
// 	console.log('App is listening');
// });
