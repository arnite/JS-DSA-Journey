/*
Theory-Based Questions:
What is the difference between function declarations and function expressions in JavaScript?

How does the scope chain work in JavaScript, and how does it relate to closures?

What is a closure in JavaScript, and how is it created?

What happens when a variable is declared inside a function using var, let, or const in terms of scope?

Explain the concept of lexical scoping and how it affects variable access in nested functions.

What is the difference between global scope, local scope, and block scope in JavaScript?

How does the this keyword behave in different contexts (e.g., in a function, in an object method, or inside an arrow function)?

What is the purpose of the arguments object in JavaScript, and how is it used in traditional functions?

How do arrow functions differ from regular functions in terms of scope and behavior of this?

Can a function in JavaScript return another function? If so, what is this called, and how is it useful?

Problem-Solving Questions:
Write a function that returns a function, which when called, increments a counter each time it is invoked.

Create a function that accepts a number and returns a function that adds that number to another number passed to it.

Write a function sum that accepts two numbers and returns their sum. Then, write another function multiply that accepts two numbers and returns their product. Use these two functions in a third function that calculates the sum of the two numbers first, then multiplies the result by a third number.

Write a function that takes a string as an argument and returns a function that checks if a given string matches the original string.

Create a function that accepts a callback and invokes that callback inside a setTimeout, logging "Done!" after 2 seconds.

Write a function that uses a closure to track how many times it has been called and returns the count each time it is invoked.

Create a function that demonstrates variable shadowing by declaring a variable inside a nested function.

Write a program that uses a closure to store and retrieve an object’s properties without modifying the original object directly.

Create an arrow function that takes an array and returns the sum of all the elements in that array.

Write a function that accepts another function as a parameter and calls that function twice—once with a fixed argument and once with a dynamic argument.
*/

/* Write a function that returns a function, which when called, increments a counter each time it is invoked.

function counterIncreaser() {
  let counter = 1;

  return function () {
    counter++;
    return counter;
  };
}

const adder1 = counterIncreaser();
console.log(adder1());
console.log(adder1());
console.log(adder1());
*/

/* Create a function that accepts a number and returns a function that adds that number to another number passed to it.

function adderMachine(num) {
  return function (nv) {
    const result = nv + num;
    return result;
  };
}

const gotten = adderMachine(6);
console.log(gotten(7));
console.log(gotten(7));
*/

/*
Write a function sum that accepts two numbers and returns their sum. Then, write another function multiply that accepts two numbers and returns their product. Use these two functions in a third function that calculates the sum of the two numbers first, then multiplies the result by a third number.


function adder(num1, num2) {
  return num1 + num2;
}

function multiplier(num1, num2) {
  return num1 * num2;
}

function modifier(num1, num2, num3) {
  const sum = adder(num1, num2);
  const multiply = sum * num3;

  return `Sum of the numbers: ${sum}, Sum multiplied by (${num3}): ${multiply}`;
}

console.log(modifier(4, 5, 7));
// Sum of the numbers:9, Multiply of numbers:20
*/

/*
Write a function that takes a string as an argument and returns a function that checks if a given string matches the original string.
*/

function stringChecker(str) {
  return function (secString) {
    return secString === str ? "Strings match" : "Strings don't match";
  };
}

const fruit = "bananna";
const word = "bananna";

const checker = stringChecker(fruit);
console.log(checker(word));
// How did i do?
