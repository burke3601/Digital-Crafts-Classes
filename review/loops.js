//don't use while loops often in javascript
let myArr = ['a','b','c','d']

for(let i = 0; i < myArr.length; i++){
    // console.log(i)
    console.log(myArr[i])
}

myArr.forEach(function(letter,index, sourceArray){
    console.log(letter, index, sourceArray)
})


// let output = {}
// myArr.forEach(function(letter,index){
//     output[letter] = index
// })

// // myArr.forEach((letter,index)=>{output[letter] = index})

// console.log(output)

//map,filter, find, forEach - worth fully understanding and commiting to memory

let output = []

myArr.forEach((letter,index)=>{
    let outObj = {
        letter:letter,
        index:index
    }

    // outObj[letter] = index;
    output.push(outObj)
})

console.log(output)

let output2 = myArr.map((letter, index) =>{
    return {
        letter:letter, //don't need the letter: or index:, returns the same
        index:index
    }
})

console.log("$$$$$$$")
console.log(output2)

//map essentially creates an array and pushes the return to it


