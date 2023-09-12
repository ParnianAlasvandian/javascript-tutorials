let user = {
    id : 1234567890,
    firstName : "Parnian",
    lastName : "Alasvandian",
    age : 21,
}
const keys = Object.keys(user) ;
const values = Object.values(user) ;
Object.defineProperty(user, "key" , {
    value : "some value",
    configurable : false,
    enumerable : true,
    writable : true
})

console.log(keys);
console.log(values);

user.key = "new value" ;
Object.freeze(user);
//delete user.key ; 
 user.firstName = "Papal" ;
 delete user.firstName ;
console.log(user);
console.log(user.firstName);

console.log(Object.getOwnPropertyDescriptor(user, "firstName"));