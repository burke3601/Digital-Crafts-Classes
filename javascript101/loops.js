// let i = 1
// while(i <= 10){
//     console.log(i)
//     i++
// }
// console.log('************************')
// let w = 50
// while(w <= 69){
//     console.log(w)
//     w++

// }
// console.log('************************')

// for(let a = 6;a >=2;a-- ){
//     console.log(100 / a)
// }
// console.log('*************************')
// let num = 100;
// for(let x = 6; x >= 2; x--){
//     num/=x;
//     console.log(num)
// }
// console.log('****************')

let number = 200
// if(number % 2 != 0  && number % 3 != 0){
//     console.log('not divisible by 2 and 3')  
// }
// if(!(number % 2) && !(number % 3)){
//     console.log('not divisible by 2 and 3')
// }
let value = 0
while (number > 0){
    if((number % 2) && (number % 3)){
        value += number
    }
    number --
}
console.log(value)

for(let i = 0; i < number; i++){
    value += ( i %2 != 0 && i % 3 != 0) ? i : 0
}
console.log(value)
// let i = 1;

//   while(i < 10){
//       console.log(i)
//       i++
//   }
//   console.log(i)

//   while(i>0){
//       console.log(i)
//       i--
//   }


// num = 10
// for(let i = 0; i < num; i++){
//     console.log(i)
// }
// let i = 1
// for(; i < 20; i+=2){
//     console.log(i)
// }

// let i = 0;
//   while(i < 10){
//       if(i > 7) break;//breaks the loop
//       console.log(i)
//       i++
//   }


// for(let i = 0;i<20;i++){
//     if((i % 2 == 0)) continue;
//     console.log(i)
// }

// for(let i = 0;i<20;i++){
//     if(!(i % 2)) continue;
//     console.log(i)
// }