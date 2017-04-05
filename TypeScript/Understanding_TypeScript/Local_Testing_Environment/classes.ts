class Person {
    public name: string;
    private type: string;
    protected age: number;

    constructor(name: string, public username: string) {
        this.name = name;
    }
}

const person = new Person("Armando", "SekethThoth");
console.log(person);
