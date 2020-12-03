/*
1. add up number of likes
each number in the array is the number of like per post



*/
//require() knows how to import JSON
const likes = require('./numbers.json');

// // console.log(likes)

// if (Array.isArray(likes)) {
//     console.log('yes this is an array')
// } else{
//     console.log('no array here')
// }

// console.log(likes[0])

// if(likes[2] %2 ==0){
//     console.log("it is even") 
// }else {
//     console.log('its odd')
// }


// function evenSteven(n) {
//     return (n % 2) ===0;
        
//     }

// console.log(`likes[0] is even? ${evenSteven(likes[1])}`)

const isEven = (n) => (n % 2) === 0;

// console.log(`likes[0] is even? ${isEven(likes[1])}`)

//.filter to produce a new array, that only contains evens
const onlyEvens = likes.filter(isEven);
console.log(onlyEvens.length);
console.log(likes.length);

const bigLikes = n => n >20000;

const highLikes = likes.filter(bigLikes);

console.log(highLikes.length)

