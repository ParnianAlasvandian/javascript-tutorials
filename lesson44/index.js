class User {
  //body of class 
  name;
  family;  
  constructor(firstName = "User", lastName = "Usery"){
    this.name = firstName ;
    this,this.family = lastName ;
  }

}

const user1 = new User() ;
console.log(user1.name, user1.family);