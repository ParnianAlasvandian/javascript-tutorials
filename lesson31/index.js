let object = {
    str : "value1",
    num : 2,
    arr : [1,3,54],
    bool : true,
    func : function() {
        console.log("Hello Objects");
        //return "Hello Objects"
    }
}
console.log(object.str );
console.log(object.num );
console.log(object.arr );
console.log(object.bool );
console.log(object.func() );

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
    }
}
console.log(user.firstName);
console.log(user.id);
console.log(user.address.alley);
console.log(user.address.street);
console.log(user.address.zipCode);