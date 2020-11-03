// let b = 20

// if(b == 30){
//     console.log('it is thirty')
// } else if(b == 21){
//     console.log('over 21')
// }else {
//     console.log('donezo')
// }

// let a = 10


// a == 10 ? 'yes!' : 'no'
// console.log(a)

// //assign from the expression
let a = 10
let b = a == 20 ? 'yes!' : 'no'
console.log(b) //no

let temp;
temp = 100
color = null
switch(true) {
    case (temp < 0):
        color = '#1400e2'
        break;
    case (temp < 30):
        color = '#1494e2'
        break;
    case (temp < 50):
        color = '#14dde2'
        break;
    case (temp < 75):
        color = '#763134'
        break;
    case (temp < 80):
        color = 'b86501'
        break;
    case (temp < 90):
        color = '#e38801'
        break;
    case (temp < 110):
        color = '#fb3501'
        break;
    default:
        color = 'fb889b'
}
console.log(color)


// let a = 10, b = 20, c = 30

// if(a == 10){
//     console.log('a is 10')
// }
// if(a == 16){
//     console.log('a is 16')
// } else {
//     console.log('a is not 16')
// }


// if(a == 10){
//     if(b == 20){
//         if(c != 30){
//             console.log('nesting to the third!')
//         } else {
//             console.log('a lot of effort for nothing')
//         }
//     }
// }

// if(a == 10){
//     if(b == 20){
//         if(c != 30){
//             console.log('I new c wasnt 30')
//         } else {
//             console.log('c must be 30')
//         }
//     }
// }

// let a = 10

// a == 10 ? 'yes!' : 'no' //yes!


// let result = a ==11 ? 'yes!' : "guess again!"
// //assign from the expression
// let b = a == 20 ? 'yes!' : 'no'
// console.log(b)
// let a = 10

// if(a>5) console.log("Correct more than 5")

// let a = 21

// switch (a) {
//     case 20:
//         console.log('a is 20')
//         break;
//     case 15:
//         console.log('a is 15')
//         break;
//     case 10:
//         console.log('a is 10')
//         break;
//     default:
//         console.log("I really don't know")
// }

// switch(true) {
//     case false:
//         console.log("it's false")
//         break;
//     case true:
//         console.log("it's true")
//         break;
// }

// let number = 2 //random input from user

//   switch(true){ //doing this compares to see if each expression is true
//       case (number < 3):
//           color = 'low'
//           break;
//       case (number < 7):
//           color = 'med'
//           break;
//       case (number < 14):
//           color = 'high'
//           break;
//       default:
//           color = 'very high'
//   }
//   console.log(color)