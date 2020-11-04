let spaceship = {
    speed:100,
    acceleration:80,
    passengers:3,
    fuel:200
}
spaceship.payload = 35
console.log(spaceship)

spaceship.fuel = ((200 * 2) / 3)
console.log(spaceship)

for(key in spaceship){
    if(!spaceship.hasOwnProperty(key)) continue
    
    console.log(key, ":", spaceship[key])  
}



// let myObj = {}

// let newObject = {
//     name:"Clint",
//     age:38,
//     tall:false
// }

// let searchBy= 'name'

// console.log(newObject[searchBy])

// console.log(newObject.name, newObject.age, newObject.tall)

// newObject.name = "Will Burke"
// console.log(newObject)

// newObject.favcolor = "blue"
// console.log(newObject)

// newObject.favcolor = "green"
// console.log(newObject)

// for(attrib in newObject){
//     console.log(attrib, newObject[attrib])
  
// }

// for(attrib in newObject){
//     if (!newObject.hasOwnProperty(attrib)) continue;
//     console.log(attrib, newObject[attrib])
// }

