const http = require('http');

const HOST_IP = '127.0.0.1';
const PORT = 3000;
const HTTP_RESPONSE_CODE_OK = 200;

const server = http.createServer((req, res) => {
	res.statusCode = HTTP_RESPONSE_CODE_OK;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World using the HTTP server included in NodeJS.\n');
});

server.listen(PORT, HOST_IP, () => {
	console.log(`Server running at http://${HOST_IP}:${PORT}/`);
});
