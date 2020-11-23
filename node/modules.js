const os = require("os")

// console.log(os.hostname())
// console.log(os.platform())

// const getInfo = () => {
//     console.log(os.platform(), os.homedir(), os.hostname())
// }

// getInfo()

// console.log(Object.keys(os))


// Exercise 1
// console.log(os.freemem(), os.networkInterfaces(), os.userInfo())

const func1 = () => {
    let myArr = [os.freemem(), os.networkInterfaces(), os.userInfo()];
    return myArr
     
}




