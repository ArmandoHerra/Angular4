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
    }

    setType(type: string) {
        this.type = type;
        console.log(this.type);
    }

}

const person = new Person("Armando", "SekethThoth369");
console.log(person);
person.printAge();
person.setType("Cool guy");
