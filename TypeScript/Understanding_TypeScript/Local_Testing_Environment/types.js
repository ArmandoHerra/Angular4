//String.
var myName = "Armando";
//Number.
var myAge = 21;
//Boolean.
var hasHobbies = true;
//Asign types.
var myRealAge;
myRealAge = NaN;
//Array.
var hobbies = ["Programming", "Playing Videogames"];
console.log(hobbies[0]);
//Tuples.
var address = ["Superstreet", 99];
//Enums.
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // Since I changed it this emun element's value is 2.
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
//Any.
var car = "BWM";
console.log(car);
car = {
    brand: "BMW",
    series: 3
};
console.log(car);
//Functions.
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//Void.
function sayHello() {
    console.log("Hello!");
}
// Argument types.
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(21, 25));
//Function types.
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 5));
//Objects.
var userData = {
    name: "Armando",
    age: 21
};
console.log(userData);
//Complex Object.
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complex);
var complex2 = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
console.log(complex2);
//Union types.
var myRealRealAge = 27;
myRealRealAge = "27";
console.log(typeof myRealRealAge);
//Check types.
var finalValue = "A string";
if (typeof finalValue == "string") {
    console.log("Final value is a string!");
}
//Never type.
function neverReturns() {
    throw new Error("An error!");
}
//Nullable types.
// Variable declared as union of types number & null and initialized as null.
var canBeNull = null;
//Undefined because not initialized.
var canAlsoBeNull;
canAlsoBeNull = null;
