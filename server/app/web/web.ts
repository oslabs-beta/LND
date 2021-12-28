import express from 'express';
import http from 'http';
import path from 'path';

// Express app initialization
const app = express();
// IS THIS RIGHT?
app.set('views', 'src');
// Controllers
app.get('/*', (req, res) => {
	res.render('index');
});

// Start function
export const start = (port: number): Promise<void> => {
	const server = http.createServer(app);

	return new Promise<void>((resolve, reject) => {
		server.listen(port, resolve);
	});
};
