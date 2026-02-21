const price = 6000;

if( price >= 5000 ){
    // 10% discount
    const discount = price * 10 / 100;
    const payMent = price - discount;
    console.log(payMent);
}
else{
    console.log(price);
}
