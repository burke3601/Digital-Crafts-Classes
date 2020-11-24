const http = require("http");
const fs = require("fs");
const { builtinModules } = require("module");
const port = 6566
const serveFavicon = require("./modules/serveFavicon")
const generateContent = require("./modules/generateContent")

const navigation = `
    <nav>
        <span><a href="?page=home">Home</a></span>
        <span><a href="?page=contact">Contact</a></span>
        <span><a href="?page=about">About</a></span>
    </nav>
`
const serveCSS = (req,res) =>{
    fs.readFile("./styles.css", (err,data)=>{
        if(err){
            res.writeHead(404)
            res.end()
        }
        res.writeHead(200, {
            "Content.type":"text/css"
        })
        
        res.end(data)
    })
}
//need to call the function


const server = http.createServer((req,res)=>{
    
    console.log(req.url)

    if(req.url === "/favicon.ico") return serveFavicon(req,res)
    if(req.url === "/styles.css") return serveCSS(req,res)

    

    res.writeHead(200);
    const url = new URL(req.headers.host+req.url) 
    let page = url.searchParams.get("page")
    let count = url.searchParams.get("count")
    let additional = []
    url.searchParams.forEach((value,name) =>{
        additional.push(`<li>${name}:${value}</li>`)
    })
    // let heading = makeHeading(page)
    // let foo = "Yo are awesome Clint!"
    let wrapper =  generateContent({
        page,
        navigation, 
        
        count, 
        additional,
        
    })  
    res.write(wrapper)
    res.end()
})
server.listen(port)























