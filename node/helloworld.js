const { eventNames } = require("process")

console.log("Hello World")

//Exercise 1
for(let i = 0; i <= 100; i ++){
    console.log(i)
}

console.log('$$$$$$$$$$$$$$$$$$')

//Exercise 2




let sayMoo = (a) => {
    return "the cow says " + `${a}`
}
let a = ""

console.log(sayMoo("moo"))
console.log(sayMoo("quack"))
console.log(sayMoo("meow"))

console.log('$$$$$$$$$$$$$$$$$$')
//Exercise 3

let people = [{name:"batman", powers:"none"}, {name:"iron man", power:"rich"}, {name:"The Hulk", powers:"being green"}, {name:"Superman", powers:"Being an Alien"}]

let onlyNames = people.map((obj) => {
    name})

console.log(onlyNames)




// let newPeople = [{name:"jojo", powers:"none"},{name:"deedee", powers:"none"}]

// const func1 = () => {
//     let myArr = [people.map(newPeople)];
//     return myArr
// }

// func1()
