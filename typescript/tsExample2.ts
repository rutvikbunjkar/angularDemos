class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    info(){
        console.log(this.name, this.age);
    }
}
let p1: Person = new Person("John", 30);
p1.info();