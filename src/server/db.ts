import { createClient } from 'redis';

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
const connection = (async () => {
	const client = createClient();

	client.on('error', (err) => console.log('Redis Client Error', err));

	await client.connect();

	await client.set('key', 'value');
	const value = await client.get('key');
})();

// // fix this
module.exports = connection;
