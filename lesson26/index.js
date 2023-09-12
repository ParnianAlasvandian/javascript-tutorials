const skills = ["js", "Nodejs", "mongodb", "html", "react","js"];
for (const item of skills) {
    console.log(item);
    if (item == "js") {
        console.log("This is the best language for web.");
    }
}
console.log("--------------------------------");
function itemCounter(item, key) {
    console.log(key," : ",item);
}
skills.forEach(itemCounter);

console.log("--------------------------------");
skills.forEach(function(item, key){
    console.log(key," : ", item);

}) 
console.log("--------------------------------");
skills.forEach( (item, key) => {
    console.log(item);

}) 
console.log("--------------------------------");
const result1 = skills.find((item) => {
    if (item == "Nodejs") {
        return item;
    } 
})
console.log(result1);

console.log("--------------------------------");
const result2 = skills.find(skill => skill == "mongodb")
const result3 = skills.find(skill => skill == "parnian"  )
console.log(result2);
console.log(result3);

console.log("--------------------------------");

const newarr = skills.filter(skill => skill == "js");
console.log(newarr);

console.log("--------------------------------");

const newarr2 = skills.filter(skill => skill.indexOf("js")> -1);
console.log(newarr2);