// Exercise 1 - How was your TypeScript Class?
class Car {
    public name: string;
    public acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    honk() {
        console.log("Toooooooooot!");
    }

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class BaseObject {
    public width: number = 0;
    public height: number = 0;
}

class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.height = 10;
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
    private _firstName: string = "";

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if(value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    }
}

const person = new Person();
console.log(person.firstName);
person.firstName = "Mando";
console.log(person.firstName);
person.firstName = "Armando";
console.log(person.firstName);
