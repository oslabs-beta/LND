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
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
// // redis connects to port 6379 by default. This is more of a development thing.
// //create a url for redis to connect to for production
// // ex: createClient({
// // url: 'redis://alice:foobared@awesome.redis.server:6380'
// // });
// //-Will this be an issue?
// // should we connect with a UNIX socket, the same socket we are listening to with socket.io?
// // Why redis?
// // redis can perform around 110 000 sets per sec & approx 81 000 gets per sec
// // will use hashes to store the obj coming from v8 profiler
// // console.log('Create client', createClient);
// console.log(createClient);
// Meant to be used by trusted clients; do not allow external access/internet exposure;
//simple auth
// DB saved on disk
const connection = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = (0, redis_1.createClient)();
    client.on('error', (err) => console.error('Redis Client Error', err));
    yield client.connect();
    client.on('connect', () => console.log('Redis server connected'));
    // await client.set('key', 'value');
    // const value = await client.get('key');
});
// // fix this
exports.default = connection;
