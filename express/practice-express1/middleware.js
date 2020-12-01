const http = require("http")
const express = require("express");
const app = express();
const port = 4432
//logger for IP adress
const morgan = require('morgan');
const logger = morgan('tiny');
app.use(logger);

const sendHome = (req,res)=>{
    res.send(`<h1> content at the time ${res.content}`)
}
const timeLogger = (req,res, next)=>{
    let requestTime = new Date()
    
    req.requestTime = requestTime
    res.content = requestTime
    console.log(requestTime)
    next()
}
//magic ID
const setMagicId = (req,res, next)=>{
    req.magicId = Math.floor((Math.random() * 100))
    console.log(req.magicId)
    next()
}

app.use(setMagicId)

app.get("/", (req,res)=>{
    res.send(`
        You are at root and your magicId is:
        ${req.magicId}
    `)
});

app.get("/api", (req,res)=>{
    console.log(`
        You are at api but you have a magic id of : ${req.magicId}
    `)
})

app.get("/",timeLogger, sendHome)

const checkId = (req,res,next)=>{
    if(req.params.id.length <= 4) return res.send("ID are at least 5 long.")
    next()
}

let obj = {people:[], places:[], things:[]}

const checkObj = (req,res,next) => {
    console.log(Object.keys(obj, 29))
    console.log(req.params.type, 31)

    let {type} = req.params
    if (!Object.keys(obj).includes(type)){
        return res.send("item does not exist")
    }
    next()
}

app.get("/apb/:type", checkObj,(req, res)=>{
    res.send(req.params.type)
    
})

// app.get("/api/people/email/:email", (req, res)=>{
//     const{email} = req.params;
//     let results = people.find(person=> person.email == email)
//     res.send(results)
// })

app.get("/api/people/:id", checkId, (req,res)=>{
    console.log('Id is long enough')
    res.send(`ID checks out and it is ${req.params.id}`)
})

const server = http.createServer(app)

server.listen(port, ()=>console.log(`listening on port ${port}`))