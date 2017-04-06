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
