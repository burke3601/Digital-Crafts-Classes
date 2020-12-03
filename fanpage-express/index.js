const http = require("http")
const express = require('express')
const app = express()
const server = http.createServer(app)

const port = 3000

//create fan page

app.get('/', (req,res)=>{
    res.send(`
    <h1> This is my food fan page</h1>
    
    <ol> Here are my favorite foods:
        <li><a href = "/pizza">Pizza</a></li>
        <li><a href = "/salad">Salad</a></li>
        <li><a href = "/chickenwings">Chicken Wings</a></li>
    </ol>
    `)
})

app.get('/pizza', (req,res) =>{
    res.send(`
    <h3>Pizza is my favorite food!</h3>
    <ul>Favorite Pizza spots:
        <li>Nina and Rafi</li>
        <li>Antico</li>
        <li>Amazza</li>
        <li>Little Caesar's</li>
    </ul>
    <a href="https://www.ninaandrafi.com/">Here is a link to Nina and Rafi's website</a>

    <a href="/">Back to Home</a> 
    `)
})

app.get('/salad', (req,res) =>{
    res.send(`
    <h4>I love a good salad. RIP to Jason's Deli salad bar :(</h4>
    <a href="/">Back to Home</a> 
        `)
})

app.get('/chickenwings', (req,res) =>{
    res.send(`
    <div>Kirkyard and American Deli are my favorite places to get wings.</div>
    
    <div>Sometimes I make my own wings, but it's just not the same.</div>
    
    <a href="/">Back to Home</a>`)
})


server.listen(port, "localhost", () =>{
    console.log(`listening on port ${port}`)
})