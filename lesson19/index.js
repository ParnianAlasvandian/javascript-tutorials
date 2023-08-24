//Expression Function
//----------------------------------------------------

let sayHello = function () {
    alert("Hello javascript. ");
}
//  let sayHi = sayHello
sayHello();

let showOk = function () {
    alert("You agreed the request. ");
}

let showCancel = function () {
    alert("You canceled the request. ");
}

let Ask = function (question, yes, no) {
    confirm(question) ? yes() : no() ;
}

console.log(Ask("Do you want to go out ?", showOk, showCancel) );

let sum = function (num1, num2) {
    return num1 + num2 ;
}
console.log(sum(12,3));
