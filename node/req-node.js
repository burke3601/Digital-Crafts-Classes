const http = require("http")
const port = 5566
const server = http.createServer((req,res)=>{
    //A Huge Object with a lot of information
    res.writeHead(200)

    const url = new URL(req.headers.host+req.url)       
    //  
    let page = url.searchParams.get("page")
    let count = url.searchParams.get("count")
    console.log(req.headers.host+req.url)
    console.log(url)

    // let additional = []
    // url.searchParams.forEach((value,name) =>{
    //     additional.push(`<li>${name}:${value}</li>`)
    // })
    let heading = ""
    switch(page){
        case "about":
            heading += `<h1>This is about!<h1>`;
            break;
        case "contact":
            heading += `<h1>This is contact</h1>`;
            break;

        case "foo":
            heading+= '<h1>Pitty the foo</h1>';
            break;
        default:
            heading += `<h1>This is Home</h1>`;
    }
        content += `<div>The Count is ${count || 0}</div>`
    let wrapper = `
    <!DOCTYPE html>
    <html>
        <head><title>Here is the title</title><head>
        <body>
        ${heading}
        </body>
        <footer>

        </footer>
    </html>
`
      res.write(wrapper) 

        res.end()
})
server.listen(port,()=>{
    console.log(`Running on Port ${port}`)
})

