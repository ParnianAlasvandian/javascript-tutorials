let user = {
    id : 1234567890,
    firstName : "Parnian",
    lastName : "Alasvandian",
    age : 21,
    obj : {
        key : "value"
    }
}
//document.write(JSON.stringify(user))
//console.log(JSON.stringify(user,null,4));
const obj = JSON.parse(JSON.stringify(user));
user.id = 456 ;
console.log(obj);
console.log(obj.firstName);
