const http = require("http")
//we are not using req right now
const htmlContent = `
      <!DOCTYPE html>
      <html>
          <head>
              <title>HTML Content from Node</title>
          </head>
          <body>
              <h1>Here are my favorite foods</h1>
              <ul>
                  <li>pizza</li>
                  <li>pasta</li>
                  <li>salad</li>
              </ul>
              <script>
                  console.log("here is my secret message")
              </script>
          </body>
      </html>
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
