var Person = (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
    }
    return Person;
}());
var person = new Person("Armando", "SekethThoth");
console.log(person);
//# sourceMappingURL=classes.js.map