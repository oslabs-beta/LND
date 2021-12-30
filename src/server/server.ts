import express from 'express';
import os from 'os';
import readline from 'readline';
import fs from 'fs';

// Express app initialization
const app = express();

// Template configuration
// app.set('view engine', 'ejs');
// app.set('views', 'public');

// Static files configuration
// app.use('/assets', express.static(path.join(__dirname, 'frontend')));

// Controllers
app.get('/', (req, res) => {
  console.log('Inside get');
  res.send('hey');
});

const osObject: any = {
  arch: os.arch(),
  platform: os.platform(),
  freemem: os.freemem(),
  cpus: os.cpus().length,
};

//grab file from the client
//make a core

//Read the file
//When core file location is dropped into root folder, call a function that reads stream
// console.log(recoilPost);
// const myInterface = readline.createInterface({
// input: fs.createReadStream('core.5663'),
fs.readFileSync('src/app/Components/Leak.js'),
  //cannot find the module
  // });
  // let numofLines = 0;
  // myInterface.on('line', (fileLine) => {
  //   ++numofLines;
  //   console.log(`${fileLine}`, numofLines);
  // });

  // Start function
  app.listen(3004, () => {
    console.log('App is listening');
  });
