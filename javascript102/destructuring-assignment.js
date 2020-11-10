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

// let [x,y, ...rest] = [20, 30, 40, 50, 22, 23, 24]
// console.log(x,y,rest)

//rest is not a keyword, but it is the most popular

//destructuring objects

// let me = {name:"Clint", age:29, email:"clint@digitalcrafts.com"}
// const {name, age, email} = me


// console.log(`${name} is my name!`)

// const {name} = me
// console.log(name)

//Exercise 1
let myArray = [1,2,3,4]
let [a,b,c,d] = myArray

console.log(b)

let [,second,,] = myArray

console.log(second)

let[first, ...rest] = myArray
console.log(first)

//Exercise 2

let ship = 
    {
        name:'ship1',
        age:20,
        speed:100,
        acceleration:50
    }
    


// const {name, age} = ship;

// console.log(name, age)
//
const {acceleration} = ship;

console.log(acceleration)

const {age, speed} = ship
console.log(age, speed)

// const ship_speed = {speed}
// console.log(ship_speed)
// const ship_age = {age}
// console.log(ship_age, ship_speed)

let {age: ship_age, speed: ship_speed} = ship //how to do it in one line
console.log(ship_age, ship_speed)
console.log(ship)

