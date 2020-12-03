const http = require('http');
const express = require('express');

const app = express(); //makes a new app
const server = http.createServer(app);
const port = 3000

//app, please listen for GET requests
//'/' means they are asking for home page
// the anonymous function will handle the HTTP request
// and send back the HTTP response

app.get('/', (req, res) => {
    // req and res are passed to my anonymous function
    // I need to make room for them with placeholders!
    res.send('Hello World! nodemon check check $$$trying nodemon');
    
});

app.get('/cats', (req,res)=>{
    res.send(`
    <ul>
        <li><a href="/cats/oakley">Oakley</a></li>
        <li><a href="/cats/milla">Milla</a></li>
        <li><a href="/cats/bubba">Bubba</a></li>
    </ul>
    `);
})
// :catName is a route param (like an argument that is part of the route path)
app.get('/cats/:catName', (req,res) => {
    const catName = req.params.catName;
    res.send(`
        <h1> welcome to ${catName}'s house!!!!</h1>
        <a href="/cats/">Back</a>
    `)
})

//"turn on the server"
// we need to pass in three arguments
// 1 what port do I listen on (phone extension)
// 2 wht is my IP address? (office number)
// 3 callback that runs after we're started
server.listen(port, 'localhost', () => {
    console.log(`running on port ${port}`)
});