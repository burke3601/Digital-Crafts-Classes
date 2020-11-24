// const fs = require("fs")

const { fstat } = require("fs")

// let ships = JSON.parse(fs.readFileSync("ship-data.json" ))

//let newShip ={type:"speeder",speed:"Fast", cargo:"none", payload:"none"}

// ships.push(newShip)
// console.log(ships)

// const addShip = (data) =>{
//     ships.push(data)
//     fs.writeFile(
//         "ship-data.json",
//         JSON.stringify(ships),
//         (err) =>{
//             if (err) throw err;
//             console.log("new ship data saved")
//         }
//     )
// }

//addShip(newShip)


// let ships = [
//     {
//         type:"Freighter",
//         speed:"medium",
//         cargo:"large",
//         payload:"low"
//     },{
//         type:"Fighter",
//         speed:"fast",
//         cargo:"none",
//         payload:"medium"
//     },{
//         type:"Bomber",
//         speed:"slow",
//         cargo:"none",
//         payload:"high"
//     }
// ]

// fs.writeFile("ship-data.json", JSON.stringify(ships), 'utf8', (err)=>{
//     if (err) throw err;
//     console.log("The JSON file has been written")
// })


//exercise 1

// const fs = require("fs")

//   fs.writeFile("paragraph.txt",
//         "here is my paragrpah lsdjfl;jsdfljsdlkfjsdl;fjdlsjfldksfsdl;fjl;sdf", 
//         'utf8', 
//         (err)=>{
//         if (err) throw err;
//         console.log('The file has been saved')
//   })

//exercise 2
const fs = require("fs")
let moreCars = [
    {
        name:"mercedes",
        speed:"97",
        year:"2021"
    },
    {
        name:"maserati",
        speed:"98",
        year:"2020"
    },
    {
        name:"bmw",
        speed:"99",
        year:"2019"
    }
]
let cars = JSON.parse(fs.readFileSync("car-data.json"))

const addCars = (newCars)=>{
    cars.push(newCars)
    fs.writeFile(
        "car-data.json",
        JSON.stringify(newCars),
        (err) =>{
            if (err) throw err;
            console.log("new cars, who dis?")
        }
    )
}



addCars(moreCars)

// fs.writeFile("car-data.json", JSON.stringify(cars), 'utf8', (err) =>{
//     if (err) throw err;
//     console.log("json file writing worked")
// })
