// Ternary operator

const age = 24;

// if(age < 18){
//     console.log('You can not vote')
// }
// else{
//     console.log('You can vote');
// }

// In ternary operator

age < 18 ? console.log('You can not vote') : console.log('You can vote');

// another example

let price = 1200;
const isLeader = true;

// if( isLeader === true ){
//     price = 0;
// }
// else{
//     price = price + 100;
// }

// console.log(price);

// In ternary operator

// price = isLeader === true ? 0 : price + 100; 

// console.log(price);

// semi-advance ternary

// if(isLeader === true){
//     if(price > 1000){
//         price = price / 2;
//     }
//     else{
//         price = 0;
//     }
// }
// else{
//     price = price + 1000;
// }

// In ternary
price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;

console.log(price);