const colors = require("./colors.json");
const coffee = require("./coffee.json");
const products = require("./products.json");

const onlyOneColor = (arr, string) => {
    const newArr = arr.filter((c) => c === string);
    return newArr;
}

console.log(onlyOneColor(colors, "orange"))

// const res = colors.filter(color => color === "orange")
// console.log(res)

//need to figure out part2

//2

// const transactions = (array, item) => {
//     const itemsArray = array.filter(transaction => transaction.order === item).map(item => item.cost).reduce((a,b)=> a+b)
//     return itemsArray
// }


// console.log(transactions(coffee, 'espresso'))

//we want the total cost for "espresso"

function calculateTotal(arr) {
    const orderType = 'espresso';

    //get everything matching 'espresso
    const justEspresso = arr.filter(o =>{
            //does the o.order === 'espresso'?
        //     if (o.order === orderType){
        //         return true;
        //     } else {
        //         return false;
        //     }
        return o.order === orderType;
    });
    console.log(justEspresso)
    
    //grab just the costs
    const justCosts = justEspresso.map(o => {
        return o.cost
    });
    // console.log(justCosts)
    // //add it up
    // let total = 0;
    // for (let cost of justCosts) {
    //     total = total + cost;
    // }
    // console.log(total)
    console.log("*****************************")

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    let finalTotal = justCosts.reduce((runningTotal, curr)=>{
        //add the current item to the running total
        let sum = runningTotal + curr;
        console.log(`${runningTotal} + ${curr} + ${sum}`)

        runningTotal = sum;
        return runningTotal
    }, 0);
    console.log(finalTotal);
}

calculateTotal(coffee);