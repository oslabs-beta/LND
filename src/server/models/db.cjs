'use strict';
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
var __generator =
	(this && this.__generator) ||
	function (thisArg, body) {
		var _ = {
				label: 0,
				sent: function () {
					if (t[0] & 1) throw t[1];
					return t[1];
				},
				trys: [],
				ops: [],
			},
			f,
			y,
			t,
			g;
		return (
			(g = { next: verb(0), throw: verb(1), return: verb(2) }),
			typeof Symbol === 'function' &&
				(g[Symbol.iterator] = function () {
					return this;
				}),
			g
		);
		function verb(n) {
			return function (v) {
				return step([n, v]);
			};
		}
		function step(op) {
			if (f) throw new TypeError('Generator is already executing.');
			while (_)
				try {
					if (
						((f = 1),
						y &&
							(t =
								op[0] & 2
									? y['return']
									: op[0]
									? y['throw'] || ((t = y['return']) && t.call(y), 0)
									: y.next) &&
							!(t = t.call(y, op[1])).done)
					)
						return t;
					if (((y = 0), t)) op = [op[0] & 2, t.value];
					switch (op[0]) {
						case 0:
						case 1:
							t = op;
							break;
						case 4:
							_.label++;
							return { value: op[1], done: false };
						case 5:
							_.label++;
							y = op[1];
							op = [0];
							continue;
						case 7:
							op = _.ops.pop();
							_.trys.pop();
							continue;
						default:
							if (
								!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
								(op[0] === 6 || op[0] === 2)
							) {
								_ = 0;
								continue;
							}
							if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
								_.label = op[1];
								break;
							}
							if (op[0] === 6 && _.label < t[1]) {
								_.label = t[1];
								t = op;
								break;
							}
							if (t && _.label < t[2]) {
								_.label = t[2];
								_.ops.push(op);
								break;
							}
							if (t[2]) _.ops.pop();
							_.trys.pop();
							continue;
					}
					op = body.call(thisArg, _);
				} catch (e) {
					op = [6, e];
					y = 0;
				} finally {
					f = t = 0;
				}
			if (op[0] & 5) throw op[1];
			return { value: op[0] ? op[1] : void 0, done: true };
		}
	};
exports.__esModule = true;
var redis_1 = require('redis');
var redis_json_1 = require('redis-json');
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
var v8_1 = require('v8');
var heapStats = v8_1.getHeapStatistics();
var total_heap_size = heapStats.total_heap_size,
	total_heap_size_executable = heapStats.total_heap_size_executable,
	total_physical_size = heapStats.total_physical_size,
	total_available_size = heapStats.total_available_size,
	used_heap_size = heapStats.used_heap_size,
	heap_size_limit = heapStats.heap_size_limit,
	malloced_memory = heapStats.malloced_memory,
	peak_malloced_memory = heapStats.peak_malloced_memory,
	does_zap_garbage = heapStats.does_zap_garbage,
	number_of_native_contexts = heapStats.number_of_native_contexts,
	number_of_detached_contexts = heapStats.number_of_detached_contexts;
// adding an id to the stats to inc
// DB saved on disk
exports = function () {
	return __awaiter(void 0, void 0, void 0, function () {
		var client, jCache;
		return __generator(this, function (_a) {
			switch (_a.label) {
				case 0:
					client = (0, redis_1.createClient)();
					client.on('error', function (err) {
						if (err.code == 'ECONNREFUSED') {
							client.disconnect();
							console.error('Redis Client Error', err);
							return;
						}
					});
					return [4 /*yield*/, client.connect()];
				case 1:
					_a.sent();
					client.on('connect', function () {
						console.log('Redis server connected');
					});
					jCache = new redis_json_1(redis_1, { prefix: 'cache:' });
					// console.log('CACHE: ', jCache);
					return [4 /*yield*/, jCache.set('1', heapStats)];
				case 2:
					// console.log('CACHE: ', jCache);
					_a.sent();
					// await jCache.get('1');
					return [4 /*yield*/, jCache.get('1')];
				case 3:
					// await jCache.get('1');
					_a.sent();
					return [2 /*return*/];
			}
		});
	});
};
// // fix this
