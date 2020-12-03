const likesAsStrings = require('./numbers-as-strings.json')

//transform the array of strings
//into an array of numbers

//use .map()
//1 write a function that can transform 1 value (return the new version of the value)
//2. pass the function as a callback to .map()
//3. store the result in a new variable

const stringToNumber = s => parseInt(s, 10); //pass 10 as second argument

// console.log(typeof likesAsStrings[0])
// console.log(typeof stringToNumber(likesAsStrings[0]))

const likes = likesAsStrings.map(stringToNumber);
console.log(likes)

//map does not mutate your original, it creates a new array


