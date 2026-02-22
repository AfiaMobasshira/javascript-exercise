// Nested if-else

const score = 42;

if(score >= 80){
    console.log('Go for a lunch'); 
}
else{
    if(score < 80 && score >= 60){
        console.log('good luck next time');
    }
    else{
        if(score < 60 && score >= 40){
            console.log('message unseen');
        }
        else{
            console.log('block');
        }
    }
}

// if(score > 80){
//     console.log('Go for a lunch');
// }
// else if((score < 80) && (score >= 60)){
//     console.log('good luck next time');
// }
// else if((score < 60) && (score >= 40)){
//     console.log('message unseen');
// }
// else{
//     console.log('block'); // under 40
// }
