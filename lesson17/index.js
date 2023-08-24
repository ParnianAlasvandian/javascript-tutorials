let temp = 0;
for(let index = 0; index <= 20; index++) {
   // temp = temp + index ;
    temp += index ;
}
console.log(temp);

console.log("----------------------"); 
for (let index = 0; index <= 40; index+=8) {
     console.log(index);
}
console.log("----------------------"); 
for (let index = 30 ; index >= 0; index-=6) {
    console.log(index);
} 
console.log("----------------------"); 

let var1 = 20 ;
//var1 = var1*2 ;
var1 *= 2;
console.log(var1);

let var2 = 24  ;
// var2 = var2 / 2 ;
var2 /= 2;
console.log(var2);

console.log(var2 **= 2);
console.log(var2 -= 44);