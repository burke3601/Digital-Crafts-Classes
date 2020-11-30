const http = require("http")
const express = require("express");
const { fs } = require("fs");
const app = express();
const port = 4430

let people = (require("./people.json"))

app.get("/", (req,res)=>{
res.send("<h1>Home</h1>")})
//send all people
app.get("/api/people", (req, res)=>{
    res.send(people)
})

app.get("/api/people/gender/:gender", (req, res)=>{
    const{gender} = req.params;
    let results = people.filter(person=> person.gender == gender)
    res.send(results)
})

app.get("/api/people/email/:email", (req, res)=>{
    const{email} = req.params;
    let results = people.find(person=> person.email == email)
    res.send(results)
})

// app.get("/api/people/email", (req, res) =>{
//     res.send = people.map(person=person.email)
// })

// app.get("/api/people/:search", (req, res)=>{
//     const{search} = req.params;
//     let results = people.filter(person=> {
//         return JSON.stringify(person).includes(search)
//     })
// })

const server = http.createServer(app)

server.listen(port, ()=>console.log(`listening on port ${port}`))