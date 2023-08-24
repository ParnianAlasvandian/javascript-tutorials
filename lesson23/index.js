let arr = new Array() ;
let arr2 = [1,2,3,4,5,6] ;
const userAge = [12,13,25,52,47] ;
const userName = ["Parnian","Aria","Parvin","Gholam"];
const places = ["School","Home","Resturant","Shop"];
console.log(userAge);
console.log(userName);
console.log(places);

console.log(userName[0],"-", userAge[0],"-", places[0]);
let titles = ["ID","Name","UserName","Age","Email"] ;
let user = [1, "Parnian Alasvandian", "Par2002", 21, "parals@gmail.com"];
let users = [
    ["ID","Name",                "UserName","Age","Email"],
    [1,   "Parnian Alasvandian", "Par2002",  21,  "parals@gmail.com"],
    [2,   "Parvin AlasvandianS", "Parvin3",  48,  "parals@gmail.com"],
    [3,   "Aria AlasvandianShe", "Ari1995",  28,  "parals@gmail.com"],
    [4,   "GholamM Alasvandian", "Gholam1",  58,  "parals@gmail.com"],
    [5,   "Elham Khosravi12344", "Eli1368",  33,  "parals@gmail.com"],
    [6,   "yasmin9 Alasvandian", "Yas2003",  21,  "parals@gmail.com"],
]

console.log(users.length, userName.length, userAge.length);
console.log(users[1]);
console.log(users.at(-1)); 

console.log(userAge);
userAge.push(29);
userAge.push(63);
userAge.pop() ;
console.log(userAge.pop() );
 
userAge.shift() ;
console.log(userAge.shift());
userAge.unshift("Item") ;
userAge.unshift(46) ;
userAge[3] = 999 ;
userAge[50] = 500 ;
console.log(userAge);

console.log([1][0] == [1][0]);

//shift <-                   pop ->
//           0, 1, 2, 3, 4
//unshift ->                 push <-  