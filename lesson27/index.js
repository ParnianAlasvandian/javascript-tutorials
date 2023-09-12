const skills = ["js", "Nodejs", "mongodb", "html", "react"];
console.log(skills.includes("js"));
if (skills.includes("js")) {
    console.log("We have js and it's index is : ", skills.indexOf("js"));
}
else {
    console.log("We don't have js here.");
}


console.log(skills.some(item => item == "js"));
console.log(skills.some(item => item == "mongodb"));
console.log(skills.some(item => item == "web"));

console.log("-----------------------------------------");
console.log(skills.every(item => item == "js"));
console.log(skills.every(item => item.length > 1 ));
console.log(skills.every(item => item.length > 2 ));

console.log("-----------------------------------------");
console.log(skills.findIndex(item => item == "Nodejs"));
console.log(skills.findIndex(item => item == "web"));