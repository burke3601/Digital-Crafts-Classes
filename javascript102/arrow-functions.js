const myArrowFunc = (foo)=>{
    console.log(foo)
}
//called the same way, arrow function usage is the same
//the difference is in how you create it
myArrowFunc('got some data for ya')

const myFunc = (foo) => {
    console.log(foo)
}

//remove 'function' and add fat arrow to convert to arrow function

// const returnStuff = (arg)=>{
//     return 'stuff'+arg
// }
// console.log(returnStuff('something'))

//single argument, parenthesis not needed

//condenses callback

const returnStuff = arg =>'stuff' + arg

let result = returnStuff("My text")
console.log(result)

const doSomething = (callback)=>{
    console.log('I did something')
    callback()
}

doSomething(()=>console.log('This happens last'))

//condensed callback below
// let myArr = ['a','b','c','d']
// myArr.forEach((letter,idx)=>console.log(letter, idx))

//when passing a function as argument, if the function needs results, then you are calling the function

const forEachFunc = letter=>console.log(letter)
let myArr = ['a','b','c','d']

myArr.forEach(forEachFunc)

//exercise 1
const func1 = (num)=> console.log(num * num)
func1(5)



//exercise2

// const fun2 = (a,b) => (a + b);
// console.log(fun1(2,4));

const fun2 = (a,b) =>{
    return (a + b)
} 
console.log(fun2(3,5))

//exercise3

let names = ["will", "kamber", "buster"]

// const newFunc = () =>{
//     return names.forEach(name => console.log(name));
// }
// newFunc();
names.forEach((name, idx) =>console.log(name, idx+1))

