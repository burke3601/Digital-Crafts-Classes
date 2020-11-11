//spread operator will takes items and spread it out 
// let array1 = [1,2,3]

// console.log(array1)
// console.log(...array1)
// console.log(1,2,3)

// let array2 = [...array1,4,5]
// console.log(array2)

// let array3 = [...array1, 100,200, ...array2]
// console.log(array3)

//spread operator does not impact original array

// let me = {firstName:"Clint",lastName:"Fleetwood", email:"clint@digitalcrafts.com"}
// let newPerson = {age:39, ...me}
// console.log(newPerson)

// let family = [
//     {
//         name:"clint",
//         age:38
//     },
//     {
//         name:"Anna",
//         age:37
//     },
//     {
//         name:"Olivia",
//         age:11
//     },
//     {
//         name:"Alle",
//         age:9
//     },
//     {
//         name:"Mark",
//         age:7
//     }
// ]

// const updated = family.map(member=>( {...member, surName:'Fleetwood' }))
// console.log(updated)
// console.log(family)

// let updated = [...family.filter(p=>p.name == 'Mark'), {name:'MarkyMark', age: 99}] 
// console.log(updated)
// console.log(family)


// let oliviaMarried = {
//     name:"Olivia",
//     surname:"Musk",
//     age:24
// }
// let updated = [...family.filter(p=>p.name != 'Olivia'), oliviaMarried]
// .sort((a,b)=>b.age-a.age)
// console.log(updated)

//exercise 1

let letters = ['a','b','c']
let numbers = [4,5,6]
let combined = [...letters, numbers]
console.log(combined)

let numbersfirst =[...numbers,letters]
console.log(numbersfirst)


//exercise2

const cars = [
    {
        make:"Chevy",
        model:"Corvette",
        year:2019
    },
    {
        make:"Ford",
        model:"Mustang",
        year:2018
    },
    {
        make:"Tesla",
        model:"Model 3",
        year:2020
    },
    {
        make:"GMC",
        model:"h2",
        year:2010
    }
]

let updated =[{
    make:"Honda",
    model:"Civic",
    year:2015
},
{
    make:"Nissan",
    model:"350Z",
    year:2014
}]

bigArray = [...cars, ...updated]

console.log("****new cars***")
let newnew = [...bigArray.filter(y=>y.year >= 2018)]
console.log(newnew)
console.log(cars)
console.log(bigArray)


let bigArray1 =[{
    make:'Ford',
    model:'Focus',
    year: 2010
}]

addFocus = [...bigArray1, ...bigArray]
console.log(addFocus)



dateSort = [cars.filter(d=>d.year)]
console.log(dateSort)

console.log('***************')



//ex 1 PM

lett = ['a','b','c','d','e']
numb = [1,2,3,4,5]

both = [...lett, ...numb]
console.log(both)

dos = [...numb, ...lett]
console.log(dos)