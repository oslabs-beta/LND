import { createClient } from 'redis';

require('dotenv').config();
const { REDIS_ENDPOINT_URI, REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } =
	process.env;

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

// Persisting data on Redis
// There are two main types of persistence strategies in Redis Enterprise Software: append-only files (AoF) and snapshots.
// Append-only files (AoF) keep a record of data changes and writes each change to the end of a file, allowing you to recover the dataset by replaying the writes in the append-only log.
// Allows for time traveling with Redis
// ^^ VERY Cool ft

// Helper func for connection
// Do we want to connect with data already inside of set data upon request?
import v8profiler from 'v8';
const heapStats = v8profiler.getHeapStatistics();
const {
	total_heap_size,
	total_heap_size_executable,
	total_physical_size,
	total_available_size,
	used_heap_size,
	heap_size_limit,
	malloced_memory,
	peak_malloced_memory,
	does_zap_garbage,
	number_of_native_contexts,
	number_of_detached_contexts,
} = heapStats;
// adding an id to the stats to inc

// DB saved on disk
//must name func
export const Connection = async () => {
	//creating an endpt to connect to
	// run cli with redis-cli -h redis-11729.c89.us-east-1-3.ec2.cloud.redislabs.com -p 11729  -a RGRNTZiS5QPOApu6r7M24W3H46faXAzR
	//run server with  redis-server --port 11729
	const redisEndpointUri = REDIS_ENDPOINT_URI
		? REDIS_ENDPOINT_URI.replace(/^(redis\:\/\/)/, '')
		: `${REDIS_HOST}:${REDIS_PORT}`;

	try {
		//create client is not working!!!
		// keeps connecting to the wrong port in the console.logs
		// const client = createClient({
		// 	host: REDIS_HOST,
		// 	port: REDIS_PORT,
		// 	password: REDIS_PASSWORD,
		// 	detect_buffers: true,
		// });

		const client = createClient({
			// host: REDIS_HOST,
			host: 'redis-11729.c89.us-east-1-3.ec2.cloud.redislabs.com:11729',
			port: REDIS_PORT,
			// password: REDIS_PASSWORD,
		});
		// const client = createClient();
		//client does console.log now
		// console.log(client);

		client.on('error', (err) => {
			if (err.code == 'ECONNREFUSED') {
				client.disconnect();
				console.error('Redis Client Error', err);
				return;
			}
		});

		await client.connect();
		client.on('connect', () => {
			console.log('Redis server connected');
		});
		// How to set HMSet (s)?
		//HMSET user2 name "" email "jill@me.com" age "25"
		//HMGET gets the vals at the keys
		//HMGET user1 name age
		//HGETALL
		//gets all fields and vals from Hash
		//HEXISTS
		//queries to see if a field exists in a hash
		// HKEYS
		//returns all fields in a hash
		//HVALS
		//return all values in a hash
		// HLEN
		// returns num of fields in a hash; returns 0 if nil

		// How to set a hash in redis?
		// cars:1 as the key; in this case 1 is a unique identifier.
		// HMSET cars:1 make Ferrari model 458 color red topSpeed 202mph changed to HSet
		//only 4 args allowes
		// await client.hSet(
		// 	'totalHeapSizeExecutable',
		// 	// 'total_physical_size',
		// 	'total_available_size',
		// 	'used_heap_size'
		// 	// 'heap_size_limit',
		// 	// 'malloced_memory',
		// 	// 'peak_malloced_memory',
		// 	// 'does_zap_garbage',
		// 	// 'number_of_native_contexts',
		// 	// 'number_of_detached_contexts'
		// );
		// works with 6379 port but not the cloud port...
		await client.HSET('memory', 'field', JSON.stringify(heapStats));
		// command in cli is hget memory field to get the data from Redis...
		const value = await client.hGet('memory', 'field');
		//INCR id
		console.log('value ', value);
	} catch (e) {
		console.error(e);
	}
	// client.hSet('1', heapStats);
	// await jCache.get('1');
};

Connection();
// // fix this
