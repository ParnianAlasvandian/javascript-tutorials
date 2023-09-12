// polymorphism

class Animal {
    name ;
    constructor(name) {
        this.name = name ;
    }

    eat() {
        console.log("eat...");
    }
}
//
class Dog extends Animal {
    constructor(name) {
        super(name) ;
    }
    eat() {
        console.log(`${this.name} is eating food ...`);
    }
}
console.log(new Dog("Hapo").eat());