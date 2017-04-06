var Person = (function () {
    function Person(name, username) {
        this.age = 21;
        this.name = name;
        this.username = username;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Armando", "SekethThoth369");
console.log(person);
person.printAge();
person.setType("Cool guy");
//# sourceMappingURL=classes.js.map