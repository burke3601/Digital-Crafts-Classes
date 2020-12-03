const employees = require('./employees-array.json')


/*
{
    lastName: "Orn",
    jobTitle: "Chief Communication Officer"
}
*/
// 0. declare a function
function summarize(e){
// 1. turn the variable into an argument
    //const e = employees[0]
    const newObj = {
        lastName: e.lastName,
        jobTitle: e.jobTitle,
        startDate: e.startDate
    }
    //3. turn the console.log into a return
    return newObj
    //console.log(newObj)
}

//console.log(summarize(employees[6]))

const summaryOfEmployees = employees.map(summarize)
console.log(summaryOfEmployees);