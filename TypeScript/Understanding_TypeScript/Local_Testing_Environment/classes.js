var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name, username) {
        this.age = 21;
        this.name = name;
        this.username = username;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old guy");
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
//Inheritance.
var Seketh = (function (_super) {
    __extends(Seketh, _super);
    function Seketh(name, username) {
        var _this = _super.call(this, name, username) || this;
        _this.age = 25;
        return _this;
    }
    return Seketh;
}(Person));
var newSeketh = new Seketh("Seketh123", "Seketh123");
console.log(newSeketh);
//# sourceMappingURL=classes.js.map