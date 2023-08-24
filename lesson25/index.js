let names = ["Parnina","Ali","Yasmin","Ali","Parvin","Eli"];
console.log(names);
//names.splice(1,2); 
//names.splice(1,1);
//names.splice(2,2);  
//names.splice(2,0, "Papal", "Gholam");
const middOfArray = names.length/2 ; 
names.splice(middOfArray, 0 , "Papal","gholam","Azin");
console.log(names);
console.log(names.slice(2,4));
console.log(names.slice(-2));

let numbers1 = [1,2,3,4,5] ;
let numbers2 = [6,7,8,9] ;
const newNumbers = numbers1.concat(numbers2);
console.log(newNumbers);

console.log(names.indexOf("Papal"));
console.log("Ali : ",names.indexOf("Ali"));
console.log(names.indexOf('Yasmin', 1));
console.log(names.lastIndexOf("Azin"));
console.log("Ali : ",names.lastIndexOf("Ali"));
