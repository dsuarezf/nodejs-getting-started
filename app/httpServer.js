const http = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;
const OK = 200;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World using the HTTP server included in NodeJS.\n');
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});