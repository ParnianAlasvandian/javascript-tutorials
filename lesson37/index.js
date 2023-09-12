// Spread , rest

function getArgs(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const nums = [2, 5, 6];
getArgs(... nums) ;

const numbers1 = [1,2,3,4,5];
const numbers2 = [6,7,8,9,10];
//const mixedNumbers = [... numbers1, ... numbers2] ;
const mixedNumbers = [... numbers2.reverse() , ... numbers1.reverse()] ;
console.log(mixedNumbers);
const chars = [... "Hello Nodejs"];
console.log(chars);

const object1 = {
    a : 1,
    b : 2,
    c : 3
}

const object2 = {
    c : 5,
    e : 6,
    d : 8
    
}
const obj = { c : 45} ;
const copy = {... object1 , ... object2 , ... obj , ... {c :78}}
console.log(copy);

console.log("------------------------------------- Rest ");

function adderFunction(... numbers) {
    console.log(numbers.reduce((prev , curr) => prev + curr , 0));
}
//adderFunction(... [1,2,3,4,5,6,7,8,9]);
adderFunction(1,33,44,22,5,7,3,8);