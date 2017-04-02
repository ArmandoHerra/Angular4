//let & const.
var variable = "Test";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
//Block scope.
function reset() {
    var aVariable = null;
    console.log(aVariable);
}
reset();
//Arrow functions.
console.log("Arrow Functions");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log("Hello!");
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Manu");
//Default Parameters.
console.log("Default Parameters");
var countdown = function (start) {
    if (start === void 0) { start = 20; }
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log("Done!");
};
countdown(10);
//Rest & Spread Operators.
console.log("Rest & Spread Operators.");
//Spread Operator.
var numbers = [1, 10, 99, -5];
console.log(Math.max.apply(Math, numbers));
//Rest Operator.
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2));
//Destructuring Arrays.
console.log("Destructuring Arrays.");
var myHobbies = ["Programming", "Playing Videogames"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
//Destructuring Objects.
console.log("Destructuring Objects");
var userData2 = { userName: "Armando", age: 21 };
var myName2 = userData2.userName, myAge2 = userData2.age;
console.log(myName2, myAge2);
//Template Literals.
var userName2 = "Armando";
var greeting2 = "This is a heading!\nI'm " + userName2 + ".\nThis is cool!";
console.log(greeting2);
//# sourceMappingURL=es6.js.map