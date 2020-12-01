/*
better for multiline, planning out comments

*/

const names = [
    'Alice',
    'Bob',
    'Charlie',
    'Dom',
    'Elle'
];
//for loop is when you need more control
// for (let i=0; i<names.length; i++){
//     const oneName = names[i];
//     console.log(`${i}: ${oneName}`);
// }

//for-of is when you only need the array elements, one at at time
// for (let oneName of names) {
    
//     console.log(`Hello ${oneName}`);
//     console.log(`Goodbye ${oneName}`);
// }

const hello = (whom) =>console.log(`Hello ${whom}`);
const bye = (whom) => console.log(`Bye ${whom}`);

// names.forEach(hello);
// names.forEach(bye);

// const combo = (name) => {
//     hello(name);
//     bye(name);
// };
// combo('Alice');

//callback pattern
// names.forEach((name) => {
//     hello(name);
//     bye(name);
// });

//demo of .filter
//say hello to names longer than 4 letters
const helloLongName = (n) => {
    //n is the name of the person
    if (n.length > 4){
        hello(n);
    } 
}

// const isNameLong = (n) =>{
//     return n.length >4;
//     //is a better way t write if/else
//     // if(n.length > 4){
//     //     return true;
//     // } else {
//     //     return false;
//     // }
// }

//isNameLong is an arrow function uses implicit return
const isNameLong = (n) => n.length > 4;
//we use isNameLong as a callback to names.filter

// helloLongName('bob')
const longNames = names.filter(isNameLong);
console.log(longNames);

//const longNames3 = names.filter((n) => n.length > 4)
//^^very short, one line version





