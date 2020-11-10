// let numbers = [5,3,-10,3,-21,78,-54,-1,8]
// let positive = numbers.filter(num=>num>0)
// console.log(positive)

//filter will create a new array of all items that the expression would return true
//filter limits the amount of items in te array
// let numbers = [5,3,-10,3,-21,78,-54,-1,8]
// bigNumbers = numbers.filter(num=>num > 100)
// console.log(bigNumbers)

// let ships = [
//     {
//         type:"freighter",
//         name:"falcon"
//     },
//     {
//         type:"fighter",
//         name:"xwing"
//     },
//     {
//         type:"bomber",
//         name:"ywing"
//     },
//     {
//         type:"fighter",
//         name:"tie-fighter"
//     }
// ]

// let justNames = ships
// .filter(ship=>ship.type == "fighter")
// .map(fighter => fighter.name)
// // let justNames = fighters.map(fighter => fighter.name)

// console.log(justNames)

//FIND

// let numbers = ["a","b","c"]
// let a = numbers.find(num=>num == "a")
// let d = numbers.find(num=>num == "d")
// console.log(a,d)

// let numbers = [1,2,3,7,4,5,6,8]
// let more = numbers.find(num=>num > 5)

// console.log(more)

//find returns only one item (the first) or undefined

//exercise 1
//timestamp is the number of milliseconds since 1970
let timestamp = new Date('10/12/1988').getTime()
console.log(timestamp)

let items =[
    {
        id:"1",
        todo:"wash",
        status:"complete",
        deadline:new Date("11/16/2020")
    },
    {
        id:"2",
        todo:"scrub",
        status:"in-progress",
        deadline:new Date("11/15/2020")
    },
    {
        id:"3",
        todo:"vacuum",
        status:"todo",
        deadline:new Date("11/01/2020")
    },
    {
        id:"4",
        todo:"dust",
        status:"complete",
        deadline:new Date("11/12/2020")
    },
    {
        id:"5",
        todo:"mop",
        status:"in-progress",
        deadline:new Date("11/11/2020")
    },
    {
        id:"6",
        todo:"sweep",
        status:"todo",
        deadline:new Date("10/01/2020")
    },
]

// let completed = items.filter(todo => todo.status === "todo" ? true : false)


// console.log(completed)

// let soonest = items.sort(item => new Date(item.deadline).getTime() - Date.now() );

// console.log(soonest)
// console.log(Date.now())
//still need to do last two bullet points

// let pastDue = items
//     .filter()


// let now = new Date().getTime()
// let soonest = items.sort((a,b)=>a.deadline.getTime() - b.deadline.getTime())
// .find(t=>{
//     if(t.deadline.getTime() > now && t.status=="todo"){
//         return true;
//     }
// })


// // console.log(soonest)

// let past = items.filter(t=>t.deadline.getTime() < now && t.status == 'todo')
// console.log(past)


//PM exercise
//let completed = items.filter(todo => todo.status ==="complete" ? true : false)

// console.log(completed)

let pastDue = items.filter(item => item.status ==="todo" )

console.log(pastDue)

let soonest = items. 