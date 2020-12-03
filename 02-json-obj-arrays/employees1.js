const employees = require('./employees-array.json')
const employee = employees[0]


const bDay = () => employee.birthDate


console.log(bDay())
console.log('$$$$$$$$$$$$$$$$$$$')

const jArea = () => {
    for(let j of Object.keys(employee))
    return employee['jobArea']
}

console.log(jArea())
console.log('$$$$$$$$$$$$$$$$$$')

const getValue = (key) => employee[key]
console.log(getValue("lastName"))
console.log(getValue("prefix"))
console.log(getValue("suffix"))

// const anyOne = () => {
// for (let k of Object.keys(employee)){
    
//     console.log(employee[k]);

// }
// }
// console.log(anyOne('prefix'))

// const getValue = (value) => {
//     for(let value of Object.keys(employee))
//     return employee[value]
// }
