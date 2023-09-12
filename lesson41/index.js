//timer in js
console.log("First Log");
setTimeout(function() {
    //console.log("Hello SetTimeOut");
    console.log("Third Log");
}, 10);
console.log("Second Log");
setTimeout(() => {
   console.log("Fourth Log"); 
}, 10);

setInterval(saHello,1000);

function saHello () {
    console.log("Hello...");
}