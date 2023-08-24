const userName = ["Parnian","Aria","Parvin","Gholam"];
const numbers = [4,5,6,7,2,1]
console.log(userName.length);
for (let index = 0; index < userName.length; index++) {
  console.log(userName[index]);
}
console.log("--------------------------------");

for (const name of userName) {
    console.log(name);
}
console.log("--------------------------------");
let temp = 0 ;
for (const numb of numbers) {
     temp += numb
}
console.log(temp);