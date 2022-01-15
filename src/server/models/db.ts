import redis, { createClient } from 'redis';
import JSONCache from 'redis-json';

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
export default async () => {
	const client = createClient();

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
	// await client.set(1, total_heap_size);
	//INCR id
	// const value = await client.get('key');
	// const jCache = new JSONCache<typeof heapStats>(redis, { prefix: 'cache:' });
	// console.log('CACHE: ', jCache);
	// client.hSet('1', heapStats);
	// await jCache.get('1');

	client.get('1');
};

// // fix this
