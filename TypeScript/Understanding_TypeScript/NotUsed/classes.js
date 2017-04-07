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
// Getters & Setters.
var Plant = (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "Equisetum telmateia";
console.log(plant.species);
//Static Properties & Methods.
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    return Helpers;
}());
Helpers.PI = 3.141592654;
console.log(Helpers.calcCircumference(10));
//Abstract Classes.
var Project = (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    return Project;
}());
var ITProject = (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject;
console.log(newProject);
newProject.changeName("Main IT Project");
console.log(newProject);
//Private Constructors.
var OnlyOne = (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One!");
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var one = OnlyOne.getInstance();
console.log(one.name);
//# sourceMappingURL=classes.js.map