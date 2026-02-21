// if condition

const mobilePrice = 26000;
const budget = 24000;
const canAdd = budget + 2000;
// console.log(canAdd);

if(mobilePrice <= budget || mobilePrice <= canAdd){
    console.log("I can buy it");
}
else{
    console.log("I can not buy it");
}