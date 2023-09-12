const skills = ["js", "Nodejs", "Angular", "vuejs", "mongodb", "html", "react"];
const numbers = [2, 4, 5, 6, 8, 14, 56, 3, 5];

numbers.sort((a,b) => {
    //return a - b ;
    //return b - a ;
    if (a > b) return 1 ;
    if (a == b) return 0 ;
    if (a < b) return -1 ;

});
//صعودی
numbers.sort((a,b) => {
    return a - b ;
});

//نزولی
numbers.sort((a,b) => b - a );

console.log(numbers);

console.log("--------------------------");
skills.sort() ;
console.log(skills );