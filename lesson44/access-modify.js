// access modify
 class Person {
    // private - public
    #firstName ;
    #lastName ;
    skill ;
    constructor(name, family, skill = "student") {
        this.#firstName = name ;
        this.#lastName = family ;
        this.skill = skill ;
    }
    getFullName() {
        return [this.#firstName, this.#lastName]
    }
 }
 const papal = new Person("Parnian", "Alasvandian", "Backend Developer") ;
 //console.log(papal.getFullName().join(" "));
 const [firstName, lastName] = papal.getFullName() ;
 console.log(firstName);
 console.log(lastName);
 papal.skill = "Programmer" ;
 console.log(papal.skill);