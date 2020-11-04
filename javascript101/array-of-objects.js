// let ships = [
//     {
//         name: "Speedy",
//         topSpeed: 300,
//         acceleration: 250,
//         cargo: 4
//     },
//     {
//         name: "Slowpoke",
//         topSpeed: 100,
//         acceleration: 50,
//         cargo: 40
//     },
//     {
//         name: "X Wing",
//         topSpeed: 275,
//         acceleration: 350,
//         cargo: 4
//     }
// ]

// console.log(ships[1].name, ships[1].topSpeed)

// console.log(ships)

// for (key in ships) {
//     if(!ships.hasOwnProperty(key)) continue
//     console.log(key, ":", ships[key])

// }
// ships.forEach(function(ship){
//     for (key in ship){
//         console.log(` ${key} : ${ship[key]} `)
//     }
// })

// for(topSpeed in ships) {
//     console.log(topSpeed)
// }

// ships.sort(function(a,b){
//     return a.topSpeed - b.topSpeed
// })

// console.log(ships)

// let people = [
//     {
//         name:"Clint",
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
// //just needs to be comma separated
// // console.log(people[0].name + ' is ' +people[0].age + ' years old')

// people.forEach(function(person){
//     console.log(person.name+' is '+person.age+' years old')
// })

function printSquare(x){
    var i = 0;
    
    for (var i = 0; i < x; i++){ // iterates rows
      for (var j = 0; j < x; j++) // iterates * in row
          console.log("*");
      console.log("\n") // moves to new row
    }
    }
    printSquare(5)
    