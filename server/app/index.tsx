import express, { Request, Response, NextFunction } from 'express';

//Lastly, send the client back their file with clarity from llnode but compressed with zLib or gzip
import process from 'process';
import os from 'os';
import readline from 'readline';
import fs from 'fs';
import colors from 'colors';
//import { Atoms } from '../../Atom.js';

//import Profile2 from '../../src/Components/Profile2.js'

const osObject: any = {
	arch: os.arch(),
	platform: os.platform(),
	freemem: os.freemem(),
	cpus: os.cpus().length,
};

// //grab file from the client
// //make a core
// import Profile2 from './../../src/Components/Profile2.js';
// //Read the file
// //When core file location is dropped into root folder, call a function that reads stream
// // console.log(recoilPost);

const myInterface = readline.createInterface({
	// input: fs.createReadStream('core.5663'),
	input: fs.createReadStream(
		// '/Users/jirehmaddox/Desktop/teamWork/workingLND/LND/lldb_session_2021-11-19_13:32:45.201888000.log'
		//Profile2,
		'../../Atom.js'
	),
});
let numofLines = 0;
myInterface.on('line', (fileLine) => {
	++numofLines;
	console.log(`${fileLine}`, numofLines);
});

//SECOND: SHOW OS Free memory vs total memory , cpus
const app = express();
app.use((err: Error, req: Request, response: Response, next: NextFunction) => {
	response.status(500).json({ message: err.message });
});

app.listen(3000, () => console.log('Server is running'));

setTimeout(function delayedFailure() {
	process.abort();
	throw new Error('Fail not really fast');
}, 500);
