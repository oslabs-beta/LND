import socketio from 'socket.io-client';
// import { SOCKET_URL } from 'config';
import React, { createContext } from 'react';

const SOCKET_URL = 'http://localhost:3000';
// console.log(socketio);
console.log('socket: ', socketio.connect(SOCKET_URL));
export const socket = socketio.connect(SOCKET_URL);
export const SocketContext = React.createContext();
// WHY IS THIS UNDEFINED?
console.log(socket, SocketContext);
