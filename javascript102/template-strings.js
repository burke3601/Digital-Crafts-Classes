`template

strings


`

let a = "Awesome"
  let b = "Super"
  console.log(`the letter a = ${a} and b is ${b}`)

let myName = "Clint Fleet"
let output = `Is ${myName} longer than 6 ? ${myName.length>6 ? 'YES!': 'No'}`
console.log(output)

//first option is TRUE, second option is FALSE

let myFunc = function(){
    return 'this is okay'
}
console.log(`this is ... ${(myFunc())}`)