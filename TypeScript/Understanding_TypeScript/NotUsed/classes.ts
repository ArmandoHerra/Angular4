class Person {
    public name: string;
    public username: string;
    private type: string;
    protected age: number = 21;

    constructor(name: string, username: string) {
        this.name = name;
        this.username = username;
    }

    printAge() {
        console.log(this.age);
        this.setType("Old guy");
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }

}

const person = new Person("Armando", "SekethThoth369");
console.log(person);
person.printAge();

//Inheritance.
class Seketh extends Person {
    constructor(name: string, username: string) {
        super(name, username);
        this.age = 25;
    }
}

const newSeketh = new Seketh("Seketh123", "Seketh123");
console.log(newSeketh);

// Getters & Setters.
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "Equisetum telmateia";
console.log(plant.species);

//Static Properties & Methods.
class Helpers {
    static PI: number = 3.141592654;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(Helpers.calcCircumference(10));

//Abstract Classes.
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void;
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject;
console.log(newProject);
newProject.changeName("Main IT Project");
console.log(newProject);

//Private Constructors.
class OnlyOne {
    private static instance: OnlyOne;
    public readonly name: string;

    private constructor(name: string) {
        this.name = name;
    }
    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One!");
        }
        return OnlyOne.instance;
    }
}

let one = OnlyOne.getInstance();
console.log(one.name);
