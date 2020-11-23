const fs = require("fs")

// fs.readFile("test.txt",'utf8', (err, data) =>{
//     if(err) throw err;
//     // console.log(err)
//     console.log(data)
//     console.log(typeof data)
// } )

// fs.readFile("stuff.json",'utf8', (err, data) =>{
//     if(err) throw err;
//     // console.log(err)
//     let output = JSON.parse(data)
//     output.map((value, index)=> console.log(`item number ${index} is ${value}`))
    
// } )
//Exercise 2
fs.readFile("data.json", 'utf8', (err, data)=>{
    if(err) throw err;
    let tester = JSON.parse(data)
    tester.forEach((value) => console.log(`${value.name} is ${value.age} years old!`))
})