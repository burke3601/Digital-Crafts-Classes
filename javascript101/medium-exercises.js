
//MEDIUM TRAINING EXERCISES

//Madlib
function madlib(name, subject){
    return `My name is ${name} and my favorite subject is ${subject}`
}
madlib('Will', 'history')

//works in browser

//tip Calculator

let good = .20
let fair = .15
let poor = .10

function tipAmount(bill, service){
    return(bill * service)
}
tipAmount(100, good)

//works in Chrome

//Tip Calculator 2



function totalAmount(bill, service){
    if (service == good){
        return(bill + (bill*service));
    }else if (service == fair){
        return(bill + (bill*service));
    }else if (service == poor){
        return(bill + (bill*service));
    }
    
}
   
totalAmount(100, good)

//works in browser

//print numbers

//while
function printNumbers(x,y){
while (x <= y){
    console.log(x);
    x++;
}
}
printNumbers(1,10)

//for
function printNumbers(x,y){
    for (x =0; x<=y; x++){
        console.log(x)
    }
}
printNumbers(1,10)

//Print a Square

function printSquare(size){
    let i = 8
    while (i < size) {
        let row = ""
        j = 8
        while 
    }
}

function printSquare(size) {
    let string = "---\n";
    console.log(string.repeat(size));
}

printSquare(5)

//clint going over

const printSquare = function(v){
    let s = "-".repeat(v) = '\n'
    console.log(s.repeat(v))

}

printSquare(3)
printSquare(4)
printSquare(5)



// function printSquare(x){
//     for (x=0; x < 5; x++){
//         console.log(x * '*')
//     }
// }
// printSquare(5)

//Print a box
function printSquare(x){
var x = 5;
var i = 0;

for (var i = 0; i < x; i++){ 
  for (var j = 0; j < x; j++) 
      console.log("*");
  console.log("\n") 
}
}
printSquare(5)


function printBanner (x){
    console.log('-----------')
    printBanner(`${x}`)
    console.log('------------')
    
}

//leetspeak


//just positives

function positiveNumbers([]){
    var res

}
    