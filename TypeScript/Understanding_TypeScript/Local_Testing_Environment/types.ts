//String.
let myName: string = "Armando";

//Number.
let myAge: number = 21;

//Boolean.
let hasHobbies: boolean = true;

//Asign types.
let myRealAge: number;
myRealAge = NaN;

//Array.
let hobbies: any[] = ["Programming", "Playing Videogames"];
console.log(hobbies[0]);

//Tuples.
let address: [string, number] = ["Superstreet", 99];

//Enums.
enum Color {
    Gray,           // Enums start counting from 1.
    Green = 100,    //Now Blue = 101.
    Blue  = 2       // Since I changed it this emun element's value is 2.
}

let myColor: Color = Color.Green;
console.log(myColor);

//Any.
let car: any = "BWM";
console.log(car);
car = {
    brand: "BMW",
    series: 3
};
console.log(car);

//Functions.
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

//Void.
function sayHello(): void {
    console.log("Hello!");
}

// Argument types.
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(21, 25));

//Function types.
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 5));

//Objects.
let userData: {
    name: string,
    age: number
} = {
    name: "Armando",
    age: 21
};
console.log(userData);

//Complex Object.
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};
console.log(complex);

//Type alias.
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [1, 2, 3],
    output: function (all: boolean): number[] {
        return this.data;
    }
};
console.log(complex2);

//Union types.
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
console.log(typeof myRealRealAge);

//Check types.
let finalValue = "A string";
if (typeof finalValue == "string") {
    console.log("Final value is a string!");
}

//Never type.
function neverReturns(): never {
    throw new Error("An error!");
}

//Nullable types.
// Variable declared as union of types number & null and initialized as null.
let canBeNull: number | null = null;
//Undefined because not initialized.
let canAlsoBeNull;
canAlsoBeNull = null;
