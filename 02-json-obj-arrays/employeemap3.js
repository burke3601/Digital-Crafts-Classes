const employees = require('./employees-array.json')
/*
//filter out short last names
//transform jobtitle to UPPERCASE
/*
{
    lastName: "Herman",
    jobTitle: "CHIEF"
}
*/

function summarize(e){
    // 1. turn the variable into an argument
        //const e = employees[0]
        const newObj = {
            lastName: e.lastName,
            jobTitle: e.jobTitle,
            //startDate: e.startDate
        }
        //3. turn the console.log into a return
        return newObj
        //console.log(newObj)
    }
    
    //console.log(summarize(employees[6]))
    
    // const summaryOfEmployees = employees.map(summarize)
    // console.log(summaryOfEmployees);

    //helper function returns true if last name longer than 5 chars
    // to be used with filter
// function isLastNameLong(e){
//     return e.lastName.length > 5;
// }
const isLastNameLong = e => e.lastName.length > 5;
// if (isLastNameLong(employees[1])){
//     console.log('yes')
// }else {
//     console.log('nope')
//}

function capTitle(e) {
    return{
        lastName: e.lastName,
        jobTitle: e.jobTitle.toUpperCase()
    }
}

// const emps2 = employees.filter(isLastNameLong);
// //console.log(emps2)

// const emps3 = emps2.map(summarize)
// //console.log(emps3)

// const emps4 = emps3.map(capTitle)
// console.log(emps4)

//console.table(capTitle(employees[0]));

const emps2 = employees.filter(isLastNameLong);
//console.log(emps2)

const emps3 = emps2.map(summarize)
//console.log(emps3)

//this just chains it all together

const emps4 = employees.filter(isLastNameLong).map(summarize).map(capTitle)
console.log(emps4)
