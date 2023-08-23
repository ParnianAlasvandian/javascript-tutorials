let Age = 18 ;

if (Age > 18) {
    let message = `Your age is ${Age} and you can access to this content.`
    console.log(message);
} else if (Age == 18) {
    console.log("Your age is exactly 18.");
} else if (Age < 8) {
    console.log("Your age is invalid.");
}else if(Age < 18){
    console.log(`Your age is ${Age} and it's lower than 18.`); 
} else{
    console.log("Age value is not a number.");
}

console.log("This code run in every condition.");