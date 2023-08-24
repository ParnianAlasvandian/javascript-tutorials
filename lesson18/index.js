//Declaration Function 
//---------------------------------------------------------

// تشخیص عدد اول
let input3 = 29 ;
let temp = 0 ;
for (let counter = 0; counter <= input3; counter++) {
     if (input3 % counter == 0) {
        temp ++ ;
     }    
}

if ( temp == 2) {
    console.log("Adade Aval : ",input3);
}

//-----------------------------

function sayHello() {
    console.log("Hi there.");
}
sayHello();

//-----------------------------
function log(message) {
    console.log(message);
}
log("Parnian is here.")
alert("Hello Alert.")
//-----------------------------


function primeNumber(userInput) {
    if(typeof userInput == "number") {
        let temp = 0;
        for (let count = 0; count <= userInput; count++){
        if (userInput % count == 0) {
            temp++ ;
          }
        }
        if(temp == 2) {
          console.log("It's Prime Number : ", userInput);
        }
     }else {
         console.log("Invalid input. ");
     }
}

//---------------------------------

function showMessage(text) {
    //if ( text === undefined){
    //if(!text){
    //  text = "Empty message. " ;
    //}

    //text = text || "Empty message." ; 
    text = text ?? "Empty message." ;
    alert(text);
}
showMessage();

function sum(num1, num2) {
    if(typeof num1 == "number" && typeof num2 == "number") {
       return num1 + num2 ;
    }
      console.log("Please enter valid number. ");
}
//let result = sum(12,2);
console.log(sum(2,6));

//---------------------------------
function min(num1,num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {

       //if (num1 < num2) return num1 ;
       //else return num2 ;

       //if (num1 < num2) return num1 ;
       //else return num2 ;

       return (num1 < num2) ? num1 : num2 ;
   
    }
    console.log("Please enter valid number. ");
}
console.log(min(2,7));

//----------------------------------------

function pow(num1, num2) {
    /*
    let temp = 1 ;
    for (let counter = 0; counter<num2 ; counter++) {
        temp *= num1 ;
    } 
    */
    let temp = num1 ;
    for (let counter = 1; counter<num2 ; counter++) {
        temp *= num1 ;
    } 
    return temp ;
}

console.log(pow(2,6));