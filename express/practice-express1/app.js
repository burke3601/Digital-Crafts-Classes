const http = require("http")
const express = require("express");
const { fs } = require("fs");


const app = express();
const port = 4432

const sendFavicon = (req,res)=>{
    fs.readFile("favicon.ico",(err,data)=>{
        if(err) return res.send(err);
        res.send(data)
    } )
}
const serveContent = (title, content) =>`
<!DOCTYPE html>
<html> 
    <head> 
        <title>${title}</title>
    </head>
    <body>
        <h1>${title}</h1>
        <div>${content}</div>
       
    </body>
</html>
`


const send404  = (req,res)=>{
    res.status(404);
    res.send(_404Content)
}

const serveHome = (req,res)=>{
    res.send(serveContent("home", "$$$%%%%%%%$$$$$"))
}

app.get("/", serveHome)
app.get("/home", serveHome)
app.get("/contact", (req,res)=>{
    res.send(serveContent("contact", "2813308004"))
})
app.get("/about", (req,res)=>{
    res.send(serveContent("About", "well well well"))
})
app.get("/favicon.ico", sendFavicon)
app.get("*", send404)


const server = http.createServer(app)

server.listen(port, ()=>console.log(`listening on port ${port}`))