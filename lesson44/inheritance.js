// inheritance ارث بری 

class Human {
    fullName ;
    identity ;
    age ;
    gender ;

    constructor(fullName, identity, age, gender) {
        this.fullName = fullName ;
        this.identity = identity ;
        this.age = age ;
        this.gender = gender ;
    }

    walk() {
        return "walking...";
    }
    eat() {
        console.log("eating...");
    }
    sleep() {
        console.log("sleeping...");
    }
}

class Eployee extends Human {
    skill ;
    constructor(fullName, identity, age, gender,skill) {
        super(fullName, identity, age, gender)
        // this.fullName = fullName ;
        // this.identity = identity ;
        // this.age = age ;
        // this.gender = gender ;
        this.skill = skill ;
    }
    goToWork(){
        console.log(`${this.fullName} - ${this.walk()} - to work office.`);
    }

     eat(foodType, time) {
    console.log(`i'm eating lunch at ${time} and i eat ${foodType}`);
  }
}
/////
class Student extends Human {
    field ;
    constructor(fullName, identity, age, gender,field) {
        super(fullName, identity, age, gender)
        this.field = field ;
    }
    study(){
        console.log(`study...`);
    }

     eat() {
    console.log(`i'm student and i'm eating everything.`);
  }
}
/////
class Doctor extends Human {
    constructor(fullName, identity, age, gender ) {
        super(fullName, identity, age, gender)
    }
}
/////
const employee = new Eployee("Parnian Alasvandian", 1960684423, 21, "woman");
employee.goToWork() ;

console.log("---------------------------------------");
 class Animal {
    name ;
    constructor(name) {
        this.name = name ;
    }

    animalName() {
        return this.name ;
    }
 }

 class Pets extends Animal {
    #sound ;
    constructor(name, sound) {
        super(name);
        this.#sound = sound ;
    }
    getSound() {
        return this.#sound ;
    }
    //...methods
 }

 const dog = new Pets("Dog","hop-hop") ;
 const cat = new Pets("Cat","mew-mew") ;
 console.log(dog.animalName());
 console.log(dog.getSound());
 console.log(cat.getSound());

 console.log("--------------");
 const employee2 = new Eployee("Parnian Alasvandian", 1960684423, 21, "woman", "Programmer");
 console.log(employee2);

 //  override - overload
 console.log("------------------------");
 const student = new Student("Parnian Alasvandian", 1960684423, 21, "woman", "Nurse");
 
 console.log(employee2.eat("pasta", 5));
 console.log(student.eat());

 const doctor = new Doctor("Parnian Alasvandian", 1960684423, 21, "woman");
 console.log(doctor.eat());
