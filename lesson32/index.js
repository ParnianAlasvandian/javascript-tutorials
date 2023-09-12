let title = "javascript" ;
let user = {
    firstName : "Parnian",
    lastName : "Alasvandian",
    age : 21,
    id : 1960684426,
    address : {
        province : "Isfahan",
        city : "Isf",
        town : "Baghdaryacheh",
        street : "Baghborj",
        alley : "Mahmood",
        zipCode : 1401
    },
    let : 2,
    return : 1,
    for : 5,
    [title + "-" + "150"] : 45,
    'کلید' : "name",

    0 : "zero"
}

user.role = "user" ;
user.security = {
    userName : "admin",
    password : 1234,
    email : "admin@gmail.com" 
}

user['birthday'] = "3/18/2002" ;
user['placeOfBorn'] = "MIS" ;

user.age = 22 ;

console.log(user["0"], user[0]);
console.log(user[title+'-'+150]);
console.log(user.role, user['birthday'], user['age']);
console.log(user);