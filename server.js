const { hostname } = require('os');
const http = require('http');

const message = 'Hello from AWS!\n';
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(message);
});

server.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname()}:${port}/`);
});
