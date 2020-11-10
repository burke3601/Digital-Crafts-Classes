/* Looks odd but [x,y] is not an actual array it is assigning the variables */
// let [x,y] = [20, 30, 40, 50]
// console.log(x)
// console.log(y)

//you do not need everything
// let me = ["Clint", 29, "clint@digitalcrafts.com", 160]
// let [name,age, ,weight] = me
// console.log(name,age, weight)
// console.log(me)

//rest syntax

let [x,y, ...rest] = [20, 30, 40, 50, 22, 23, 24]
// console.log(x,y,rest)

//rest is not a keyword, but it is the most popular

//destructuring objects

// let me = {name:"Clint", age:29, email:"clint@digitalcrafts.com"}
// const {name, age, email} = me


// console.log(`${name} is my name!`)

// const {name} = me
// console.log(name)

//Exercise 1
