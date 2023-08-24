console.log(false && 5 && "HELLO" && []);

let accessAge = 18;
let userAge = 17;
//true,truthy,condition
if (true && 5 && "HELLO" && [] && 5>1 && userAge > accessAge ) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

//
if (false || 0 || "HELLO" || [] || 5>1 || userAge > accessAge ) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}