const breakfastOptions = [
    'banana',
    'cereal',
    'croissant',
    'coffee',
    'granola + yogurt',
    'smoothie',
    'menthols and diet coke'
];

for (let i=0; i<breakfastOptions.length; i++) {
    console.log(`I would like ${breakfastOptions[i]} to go.`);
}

//this code creates an array of breakfast options
//the for loop "loops" through the length of the array and
//prints out the options in the index 









//number 3


const breakfast = breakfastOptions.forEach((item)=>{
    console.log(item)
})