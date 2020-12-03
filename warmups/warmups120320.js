//1.

function hey() {
    console.log( 'hello');
}
hey()

function hush() {
    console.log( 'shhhhh');
}
hush()


console.log("**********************")



// Warm up 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



const getNumbers=(arr,target)=>{
    if(target === 'even'){
        return arr.filter(num => num % 2 === 0)
    }
    else if (target === 'odd'){
        return(arr.filter(num => num %2 != 0))
    }

}

console.log(getNumbers(numbers,"even"))
console.log(getNumbers(numbers,"odd"))

console.log("**********************")
//3 

const callMeMaybe = (numbers, fun1, fun2)=>{
    if(numbers %2 === 0){
        hey();
    } else if (numbers %2 !== 0){
        hush();
    }
} 
callMeMaybe(3,hey,hush);