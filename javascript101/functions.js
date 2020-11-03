//Number 1
// function test(numberOne, numberTwo, numberThree){
//     return numberOne + numberTwo + numberThree
    
// }
// let answer = test(1, 2, 3)
// console.log(answer)

// const myFunc = function(a,b,c){
//     return(a+b+c)

// }
// let res = myFunc('I', 'am', 'cool')
// console.log(res)


console.log('************************')
//Number 2 
const nextFunc = function(subFunc, aNumber){
    for (let i = 0; i <= aNumber; i++) {
        console.log(i)
    }
    subFunc()
}

nextFunc(function(){
    console.log('Yee haw')
}, 20)

nextFunc(function(){
    console.log('Hubba Hubba')
}, 2)


const anotherFunc = function(){
    console.log('I am here')
}
nextFunc(anotherFunc, 12)



// function foo(bar){
//     bar()
// }
// foo(function(){
//     console.log('print foo bar')
// })





// const myFunc = function(someArg){
//     console.log('Im anonymous', someArg)
// }
// myFunc('Do it')

// function hasArgumentFunction(argFunction, passedArg){
//     console.log('I have a function as an arg')
//     argFunction(passedArg)
// }
// hasArgumentFunction(function(myArg){
//     console.log('this is going to happen a lot in JS')
//     console.log('my argument is ' + myArg)
// }, 'This is Amazing')
// hasArgumentFunction(myFunc, 'this is amazing')

// function foo(bar1,bar2,bar3){
//     if(!bar3) bar3 = 0
//     //bar3 = bar3 || 0
//     return bar1 + bar2 + bar3
// }
// console.log(foo(1,2))

//you can call the function foo before it is defined in javascript


// function funcName(yourName, myName){
//     return('I, ${myName} can do someting')
// }



// let result = funcName()+' more words'

// console.log(result)