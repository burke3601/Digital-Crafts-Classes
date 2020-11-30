const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

const db = require('./db');

app.get('/', (req, res) => {
    res.send('Hello from Express! $$$$$$$$$$ another change for nodemon');
});

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/friends', (req, res) => {
    let htmlData = `<ul>`;
    for (let friend of db) {
        htmlData += `<li>
                        <a href ="/friends/${friend.handle}">${friend.name}</a>
                    </li>`;
    }
    htmlData += `</ul>`;
    res.send(htmlData);
});

app.get('/friends/:handle', (req, res) => {
    const {handle} = req.params;
    const friend = db.find(f => f.handle === handle);
    if (friend) {
        let htmlData = ``;
        htmlData += `<h1>${friend.name}</h1>`;
        htmlData += `<h3>${friend.handle}</h1>`;
        htmlData += `<h3>${friend.skill}</h1>`;
        res.send(htmlData);
    } else {
        res.status(404)
        res.send(`no friend with handle ${handle}`)
    }
});


app.get('/cat', (req,res) =>{
    res.send('Meow')
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});