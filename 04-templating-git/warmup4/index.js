const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app)

app.get('/', (req,res) =>{
    res.send('Hello World Warmup 4')
})

server.listen(3000, 'localhost', () => {
    console.log('Running on port http://localhost:3000')
});