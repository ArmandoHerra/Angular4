//let & const.
let variable: string = "Test";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);

//Block scope.
function reset() {
    let aVariable = null;
    console.log(aVariable);
}
reset();

//Arrow functions.
console.log("Arrow Functions");
const addNumbers = function(number1: number, number2: number): number{
    return number1 + number2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3));

const greet = () => {
    console.log("Hello!");
}
greet();

const greetFriend = friend => console.log(friend);
greetFriend("Manu");

//Default Parameters.
console.log("Default Parameters");

const countdown = (start: number = 20): void => {
    while(start > 0){
        console.log(start);
        start--;
    }
    console.log("Done!");
};
countdown(10);

//Rest & Spread Operators.
console.log("Rest & Spread Operators.");

//Spread Operator.
const numbers: number[] = [1, 10, 99, -5];
console.log(Math.max(...numbers));

//Rest Operator.
function makeArray(...args: number[]){
    return args;
}
console.log(makeArray(1, 2));

//Destructuring Arrays.
console.log("Destructuring Arrays.");
const myHobbies = ["Programming", "Playing Videogames"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

//Destructuring Objects.
console.log("Destructuring Objects");
const userData2 = {userName: "Armando", age: 21};
const {userName: myName2, age: myAge2} = userData2;
console.log(myName2, myAge2);

//Template Literals.
const userName2 = "Armando";
const greeting2 = `This is a heading!
I'm ${userName2}.
This is cool!`;
console.log(greeting2);
