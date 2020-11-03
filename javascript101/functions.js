//Number 1
function test(numberOne, numberTwo, numberThree){
    return numberOne + numberTwo + numberThree
    
}
test(1,2,3);
//works in browser, not vscode for some reason


//Number 2 
function firstFunction(secondFunction, num){
    console.log('Test Test Test')
    secondFunction()
}





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