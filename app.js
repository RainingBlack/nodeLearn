const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';
const startModule = require('./app/testNodeFunc/startTest.js');

const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-type','text/plain');
	let resultData = startModule.startFunc.start();
	res.end(`${resultData}\n`);
});
server.listen(port,hostname);