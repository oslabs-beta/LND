import { createClient } from 'redis';

require('dotenv').config();
const {
	REDIS_ENDPOINT_URI,
	REDIS_HOST,
	REDIS_PORT,
	REDIS_PASSWORD,
	DB_NAME,
	API_KEY,
	DB_NUMBER,
} = process.env;

// // Why redis?
// // redis can perform around 110 000 sets per sec & approx 81 000 gets per sec
// // will use hashes to store the obj coming from v8 profiler

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

	const client = createClient({
		url: `redis://default:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}/0`,
	});

	client.on('error', (err) => {
		if (err.code == 'ECONNREFUSED') {
			client.disconnect();
			console.error('Redis Client Error', err.message);
			return;
		}
	});

	client.on('connect', async () => {
		console.log('Redis server connected');
		// works with 6379 port but not the cloud port...
		//O(1) performance
		await client.HSET('memory', 'field', JSON.stringify(heapStats));
		// // command in cli is hget memory field to get the data from Redis...
		const values = await client.HGET('memory', 'field');
		// console.log('Getting ....');
		// console.log('values ', values);

		// await client.get('key');
		console.log(values);
	});
	await client.connect();
};

// Connection();
// // fix this
