// static methods / properties
class Student {
    static #students = [] ;
    
    static count() {
        return this.#students.length ;
    }
    static search(id) {
        return this.#students.find(std => std.id == id) ;
    }
    constructor(){
        this.#init() ;
    }
    #init() {
        Student.#students.push({id:1, name:"Parnian"}) ;
        Student.#students.push({id:2, name:"Parvin"}) ;
        Student.#students.push({id:3, name:"Aria"}) ;
        Student.#students.push({id:4, name:"Gholam"}) ;
        Student.#students.push({id:5, name:"Yasmin"}) ;
    }
}
//
class BestSudents extends Student {
    constructor() {
        super() ;
    }

    static any(){
        return super.count() ;
    }

    normal(id) {
        return Student.search(id)
    }
}
//
new Student() ; //اینجا نیو کردیم برای مقدار دهی اولیه
console.log(Student.count());
console.log(Student.search(4));
console.log("--------------------");
console.log(BestSudents.any());

 