import express from 'express';
import http from 'http';
// import path from 'path';

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

// Start function
app.listen(3004, () => {
	console.log('App is listening');
});
