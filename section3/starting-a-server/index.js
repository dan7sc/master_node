
/*
 * Primary file for API
 *
 */

// Dependencies
const http = require('http');

// Configure the server to respond to all requests with a string
const server = http.createServer((req, res) => {
    res.end('Hello World!\n');
});

// Start the server
server.listen(3000, () => {
    console.log('The server is up and running now');
});
