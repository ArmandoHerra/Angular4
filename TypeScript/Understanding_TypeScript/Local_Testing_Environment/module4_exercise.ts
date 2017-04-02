// Exercise 1 - As Arrow Function
const double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2 - Default Params
const greet = (name = "Armando") => {
  console.log("Hello " + name);
};
greet();
greet("Herra");

// Exercise 3 - Spread Operator
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4 - Spread Operator
const newArray = [66, 2];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5 - Destructuring Arrays
const testResult = [1.28, 4.33, 2.29];
const [result1, result2, result3] = testResult;
console.log(result1, result2, result3);

// Exercise 6 - Destructuring Objects
const scientist = {firstName: "WillSmith", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);
