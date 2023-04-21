var P= /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.info = function () {
        console.log(this.name, this.age);
    };
    return Person;
}());
var p1 = new P("John", 30);
p1.info();
