import os from 'os';
require('dotenv').config();

import process from 'process';
import v8profiler from 'v8';
import cors from 'cors';
import express from 'express';
const app = express();

app.use(cors());
app.use(express.json());

// connect to db

const SOCKET_PORT = process.env.SOCKET_PORT;

import { Connection } from './models/db';
console.log('CONNECT: ', Connection);
// console.log(Connection());
const dbConnection = async () => {
	try {
		await Connection();
	} catch (e) {
		console.error(e);
	}
};
dbConnection();

// eventually will move this into a route for cleanliness
app.get('/memory', (req, res, next) => {
	res.status(200).send({ memory: v8profiler.getHeapStatistics() });
});

// Starting the socket
import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer, {
	// options
	cors: {
		origin: `http://localhost:3000${SOCKET_PORT}`,
		methods: ['GET', 'POST'],
		credentials: true,
	},
});

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
httpServer.listen(SOCKET_PORT);
//regular app port
app.listen(process.env.PORT, () => {
	console.log('App is listening');
});
