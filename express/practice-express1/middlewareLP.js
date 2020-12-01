const http = require('http');
const express = require('express');
const { nextTick } = require('process');


const app = express();
const server = http.createServer(app);

const HOST = '127.0.0.1';
const PORT = 3000;
//logging middleware examples
const morgan = require('morgan');
const logger = morgan('tiny');
app.use(logger);

//serving static files. created public directory
app.use(express.static('public'));



app.use((req, res, next) => {
    console.log(`Request at ${new Date()}`);
    next();
});

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    console.log(`\n\n`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hi');
});

server.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`);
});