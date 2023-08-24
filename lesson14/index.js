//Ternery Operator - Nulish Operator 
let isLogedIn1;
let username = "user" , password = "pass" ;
if (username == "user" && password == "pass") {
    isLogedIn1 = true ;
} else {
    isLogedIn1 = false ;
}

let condition = username == "user" && password == "pass" ; //این یک شرط است
let isLogedIn2 = condition ? true : false ;
let isLogedIn3 = condition ;

console.log(isLogedIn1, isLogedIn2, condition, isLogedIn3 ); 

//Nulish Operator
const blogs  = "blogs" ;//get data from server
console.log(blogs ?? "Not found any blogs");
console.log(null??true, undefined??54, false??"anything", 0??5);
let myVar = null??"" ;
let myVar2 = "ali"??0;
console.log(myVar, myVar2 );