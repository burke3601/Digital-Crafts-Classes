// let letters = ["a","b","c","d"]
// let letterPlus = letters.map(function(letter){
//     return letter+letter
// })
// console.log(letters)
// console.log(letterPlus)

// //could also print let letterPlus = letters.map((letter)=>{
//     // return letter+letter

// // let LetterPlus = letter.map(letter=>letter+letter)

// let letterObj = letters.map((letter,idx)=>{
//     return{
//         name:letter,
//         index:idx,
//         letterIdx:letter+idx
//     }
// })
// console.log(letterObj)

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
//         age:9
//     }
// ]

// let justNames = family.map((member)=>{
//     return member.name
// })
// console.log(justNames)


//adding a variable (string last name) to the justNames function
// let justNames = family.map(member=>member.name + " last name")
// console.log(justNames)

//you should not be modifying the original array
// let updated = family.map((member)=>{
//     member.surName = "Fleetwood"
//     return member
// })
// console.log(updated)
// console.log(family)

//better to create a new member
//better way ... create a new object
// let updated = family.map((member)=>{
//     let newMember = {}
//     for(key in member){
//         newMember[key] = member[key]
//     }
//     newMember.surName = 'Fleetwood'
//     return newMember
// })
// console.log(updated)
// console.log(family)//no change


//exercise 1

// let cars = [
//     {
//         name:"car",
//         speed:"80",
//         passengers:"5"
//     },
//     {
//         name:"van",
//         speed:"70",
//         passengers:"7"
//     },
//     {
//         name:"motorcycle",
//         speed:"100",
//         passengers:"2"
//     }
// ]

// let carNames = cars.map(function(member){
//     return member.name
// })

// console.log(carNames)


// let todo =[
//     {
//         task:"bathroom",
//         status:"complete",
//         items:["clean sink", "clean tub"]
//     },
//     {
//         task:"kitchen",
//         status:"complete",
//         items:["wipe down coutners", "do dishes"]
//     },
//     {
//         task:"living room",
//         status:"in-progress",
//         items:["sweep", "dust"]
//     },
//     {
//         task:"yard",
//         status:"in-progress",
//         items:["mow", "rake"]
//     },
//     {
//         task:"sidewalk",
//         status:"to do",
//         items:["sweep", "pressure wash"]
//     },
//     {
//         task:"bedroom",
//         status:"to do",
//         items: "make bed, vacuum"
//     },   
// ]

//2 bad question by Clint

// let status = todos.map(todo=>todo.status)

//PM exercise

//ex 1



let cars = [
    {
        name:"car",
        speed:"80",
        passengers:"5"
    },
    {
        name:"van",
        speed:"70",
        passengers:"7"
    },
    {
        name:"motorcycle",
        speed:"100",
        passengers:"2"
    }
]

let new1 = cars.map(item=>item.name)
console.log(new1)

let new2 = cars.map((thing)=>{
    thing.horsepower = "3000"
    return thing
})
console.log(new2)
console.log(new1)
