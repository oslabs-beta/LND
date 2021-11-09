const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());


app.use(
	cors({
		origin: 'http://localhost:8080',
		credentials: true,
	})
);

// global error handler
app.use((err, req, res, next) => {
   const defaultErr = {
     log: 'Express error handler caught unknown middleware error',
     status: 500,
     message: { err: 'An error occurred' },
   };
   const errorObj = Object.assign({}, defaultErr, err);
   console.log(errorObj.log);
   return res.status(errorObj.status).json(errorObj.message);
 });


 app.listen(port, () => {
	console.log(`The app server is running on port: ${port}`);
});
