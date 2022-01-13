import os from 'os';
import fs from 'fs';
import process from 'process';
import v8profiler from 'v8';
import cors from 'cors';
import express from 'express';
const app = express();

app.use(cors());
app.use(express.json());

// eventually will move this into a route for cleanliness
app.get('/memory', (req, res, next) => {
	res.status(200).send({ memory: v8profiler.getHeapStatistics() });
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

io.on('connection', (socket: any) => {
	console.log('socket ID: ', socket.id);
	socket.on('disconnect', () => {
		console.log('DISCONNECTED');
	});
});

// for when the seg fault occurs/crash
// This should really be taken care of by the socket disconnect...jic?
process.on('SIGSEGV', () => {
	console.log(process.pid);
	// report?.getReport();
	console.log('Process id: ', process.pid);
	process.abort();
});

// May not be necessary to have io listen but not sure yet
io.listen(3000);
app.listen(3001, () => {
	console.log('App is listening');
});
