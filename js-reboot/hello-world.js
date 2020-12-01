

function helloLiz(){
    console.log('Hello Liz');
}
//a function is like a recipe
//you have to "make the recipe" (call the function)

function helloTurkey(){
    console.log('Hello turkey');
}
//"function declaration syntax"
// function helloWhom(person){
//     console.log(`hello ${person}`)
// }

//1. use function name as const variable
//2. on the RHS, copy paste the function//
//3. delete name from RHS

//"function expression assigned to a variable
// const helloWhom = function (person){
//         console.log(`hello ${person}`)
//     }

//Fn expression as arrow function
//1. copy/paste your fn expression as a variable
//2. delete the word function
//3.arrow function after the parentheses
const helloWhom = (person)=>{
    console.log(`hello ${person}`)
}
//implicit return is even shorter hand return for a function
const makeSandwich = (toppings) => `[pita] ${toppings} [pita]`;

const mySandwich = makeSandwich('tofu')
console.log(mySandwich)

helloWhom('Bobby Joe');


function hey(){
    const whom = 'Oakley';
}

// helloLiz();
// helloTurkey();


