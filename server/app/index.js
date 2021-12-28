'use strict';
export const __esModule = true;
import express_1 from 'express';
//Lastly, send the client back their file with clarity from llnode but compressed with zLib or gzip
import process_1 from 'process';
import os_1 from 'os';
import readline_1 from 'readline';
import fs_1 from 'fs';
//import { Atoms } from '../../Atom.js';
//import Profile2 from '../../src/Components/Profile2.js'
var osObject = {
	arch: os_1.arch(),
	platform: os_1.platform(),
	freemem: os_1.freemem(),
	cpus: os_1.cpus().length,
};
// //grab file from the client
// //make a core
// import Profile2 from './../../src/Components/Profile2.js';
// //Read the file
// //When core file location is dropped into root folder, call a function that reads stream
// // console.log(recoilPost);
setTimeout(function delayedFailure() {
	var myInterface = readline_1.createInterface({
		// input: fs.createReadStream('core.5663'),
		input: fs_1.createReadStream(
			// '/Users/jirehmaddox/Desktop/teamWork/workingLND/LND/lldb_session_2021-11-19_13:32:45.201888000.log'
			//Profile2,
			'../../Atom.js'
		),
	});
	var numofLines = 0;
	myInterface.on('line', function (fileLine) {
		++numofLines;
		console.log('' + fileLine, numofLines);
	});
	process_1.abort();
}, 500);
//SECOND: SHOW OS Free memory vs total memory , cpus
var app = (0, express_1)();
app.use(function (err, req, response, next) {
	response.status(500).json({ message: err.message });
});
app.listen(3000, function () {
	return console.log('Server is running');
});
setTimeout(function delayedFailure() {
	process_1.abort();
	throw new Error('Fail not really fast');
}, 500);
