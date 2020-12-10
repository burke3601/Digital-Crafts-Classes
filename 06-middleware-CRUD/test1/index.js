const http = require('http');
const express = require('express');
const morgan = require('morgan');

const PORT = 3000;

const app = express();
const server = http.createServer(app);
const logger = morgan('tiny');
app.use(express.static('public'));

//app.use a piece of middleware
//app.use(logger);


//in exoress, everything is middleware
app.use('/', (req,res,next)=>{
    //a piece of middleware can modify the req and or res
   req.stuff = '*^*&^*&';
   // that way you'l use ths 90% of the time:
   //req.session
   //each visitor (browser) on your site will have their own session
   /*
        req.sesssion.user ={
            id: 12345,
            username: 'burke3601',
            needsPasswordReset: true
        }
   */
    next();
})

app.use('/',(req, res, next)=>{
    console.log('you got a request for', req.url, res.method);
    next()
})

app.get('/', (req, res) =>{
    console.log('here is your stuff', req.stuff);
    res.send(`
    <html>
        <head>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <h1>this should be red</h1>
        </body>
    </html>


    </html>
    `);
});

app.get('/blah', (req,res)=>{
    console.log('here is your stuff', req.stuff);
    res.send("blah blah blah");
})

server.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
})