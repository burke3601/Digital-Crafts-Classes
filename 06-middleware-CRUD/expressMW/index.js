const http = require('http');
const express = require('express');

const PORT = 3333;

const app = express();
const server = http.createServer(app);

const morgan = require('morgan');
const logger = morgan('tiny');

const helmet = require('helmet')

app.use(logger)
app.use(helmet());
//protects http headers from would be hackers
//I can't tell what the differnce is when commented out
app.get('/', (req,res)=>{
    res.send('test test test')
})

server.listen(PORT, () =>{
    console.log(`listening on ${PORT}`)
})