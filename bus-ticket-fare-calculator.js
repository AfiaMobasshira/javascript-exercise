// Bus Ticket Fare Calculator

const ticketPrice = 800;
const age = 20;
isStudent = true;

if(age < 10){
    console.log('Free');
}
else if(age >= 60){
    // 15% discount
    const discount = ticketPrice * 15 / 100;
    const price = ticketPrice - discount;
    console.log(price);
}
else if(isStudent){
    // 50% discount
    const discount = ticketPrice * 50 / 100;
    const price = ticketPrice - discount;
    console.log(price);
}
else{
    console.log(ticketPrice);
}