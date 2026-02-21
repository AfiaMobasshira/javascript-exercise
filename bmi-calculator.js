// BMI Calculator

const weight = 70;
const height = heightMeter(5,6);

function heightMeter(feet, inch){
    const ftToInch = feet * 12 + inch;
    const inchToMeter = ftToInch * 0.0254;
    // const result = inchToMeter ** 2;
    // const finalResult = result.toFixed(2);
    return inchToMeter; 
}

// const bmiCalc = weight / height; // if inside the heightMeter function we calculate the finalResult
const bmiCalc = weight / height ** 2;
const bmi = bmiCalc.toFixed(1);
console.log(bmi);

if( bmi <= 18.5 ){
    console.log('Underweight');
}
else if( bmi <= 24.9 ){
    console.log('Normal Weight');
}
else if( bmi <= 29.9){
    console.log('Overweight');
}
else if( bmi > 30 ){
    console.log('Obese');
}



