const fs = require("fs")
const serveFavicon = ((req,res)=>{
    fs.readFile("favicon.ico", (err, data)=>{
        if(err){
            res.writeHead(404)
            res.end()
        }
        res.write(data)
        res.end(data)
    })
})

module.exports =serveFavicon