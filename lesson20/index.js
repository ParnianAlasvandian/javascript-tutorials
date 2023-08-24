//Expression function
let sum = function(num1, num2) {
    return num1 + num2 ;
}

let min = function(num1, num2) {
    return num1<num2 ? num1 : num2 ;
}

let pow = function (num1, num2) {
    let temp = 1 ;
    for (let counter = 0; counter<num2 ; counter++) {
        temp *= num1 ;
    } 
    return temp ;
}
//--------------------------------------------------------------
// Arrow function
let sum1 = (num1, num2) => num1 + num2 ;
console.log(sum1(3,6));

let min1 = (num1, num2) => num1<num2 ? num1 : num2 ;
console.log(min1(2,5));

let pow1 = (num1, num2) => {
    let temp = 1 ;
    for (let counter = 0; counter<num2 ; counter++) {
        temp *= num1 ;
    } 
    return temp ;
}
console.log(pow1(2,3 ));