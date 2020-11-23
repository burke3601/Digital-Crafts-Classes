const { unlink } = require("fs");
const http = require("http")
//we are not using req right now
const htmlContent = `
      <!DOCTYPE html>
      <html>
          <head>
              <title>This is my simple site</title>
          </head>
          <body>
              <h1>Here is my title</h1>
              <ul>
              </ul>
              <script>
              fetch("http://localhost:5566")
              .then(res=>res.json())
              .then(data=>console.log(data))
              .catch(err=>console.log(err))
              
            
              </script>
          </body>
          
  `;
  const server = http.createServer((req,res)=>{
      res.statusCode = 200;
      res.end(htmlContent)
    
      
      
  })


//only getting the result, because we are not dealing with the request currently

// const server = http.createServer((req, res)=>{
//     console.log(res)

//     res.end("<h1>Hello World,<h1> <h2>this is a good day<h2>")
// })

server.listen(3344, ()=>{
    console.log("server is up and running and listening on port 3344")
})
