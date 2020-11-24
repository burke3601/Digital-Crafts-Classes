const fs = require("fs")

fs.writeFile("myfile.txt", "Hello Node $$$$$$!", 'utf8', (err)=>{
    if (err) throw err;
    console.log('The file has been saved')
})

