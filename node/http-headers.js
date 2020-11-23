// const http = require("http")

// const ships = [
//     {
//         name:"x-wing",
//         type:"fighter"
//     },
//     {
//         name:"tie-fighter",
//         type:"fighter"
//     },
//     {
//         name:"y-wing",
//         type:"bomber"
//     }
// ];

// const server = http.createServer((req,res)=>{
//     res.writeHead(200, {
//         "Content-Type":"application/json"
//     })
//     res.write(JSON.stringify(ships))
//     res.end()
// })



// server.listen(5566,()=>{
//     console.log(`Running on Port ${5566}`)
// })

const http = require("http")

const names = [
    {
        firstName:"Will",
        lastName:"Burke",
        email:"will@burke.com"

    },
    {
        firstName:"Kamber",
        lastName:"Burke",
        email:"kamber@burke.com"
    },
    {
        firstName:"Bob",
        lastName:"Bobbers",
        email:"bob@bobbers.com"
    }
];

const server = http.createServer((req,res)=>{
    res.writeHead(200, {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(names))
    res.end()
})

server.listen(5566,()=>{
    console.log(`Running on Port ${5566}`)
})