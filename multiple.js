const price = 9000;

if( price >= 4000 ){
    // 10% discount
    const discount = price * 10 / 100;
    const payment = price - discount;
    console.log(payment);
}
else if( price >= 10000 ){
    // 30% discount
    const discount = price * 30 / 100;
    const payment = price - discount;
    console.log(payment);
}
else{
    console.log(price);
}
