/*Bakend study (Authentication and authorization)
so i mostly just studied it and asjusted the guide for future implementation
*/

/* Javascript questions

Theory-Based Questions:
What is the difference between undefined and null in JavaScript?

How does JavaScript handle variable hoisting when using var, let, and const?

What is the purpose of the typeof operator in JavaScript, and what are its limitations?

Can you explain the concept of "truthy" and "falsy" values in JavaScript? Provide examples.

What is the difference between primitive types and reference types in JavaScript?

How does JavaScript handle type coercion, and what are some common scenarios where it occurs?

What happens when you try to assign a value to a constant declared with const?

How do you compare NaN with another value, and why does it behave the way it does in comparisons?

What is the result of adding a number and a string in JavaScript, and why does this happen?

Explain the difference between == and === in JavaScript. Why is === generally preferred?

Problem-Solving Questions:
Write a function that takes a string and returns the number of occurrences of each character in that string.

Create a function that accepts two variables: a number and a boolean. If the boolean is true, return the number multiplied by 10; otherwise, return the number divided by 10.

Given an array of mixed data types (numbers, strings, etc.), write a function that returns a new array containing only the numbers.

Write a function that checks if a given variable is of type object and returns true or false.

Create a function that swaps the values of two variables without using a third variable.

Write a program that converts a string to a number, ensuring that it handles any invalid inputs gracefully (e.g., returning NaN when the input is not convertible).

Write a function that accepts a number and returns a boolean indicating whether the number is even or odd.

Given an array of integers, write a function that returns the largest number in the array.

Create a function that accepts a variable and checks whether it is a "falsy" value (e.g., false, null, undefined, 0, NaN, or an empty string).

Write a function that accepts two strings and checks whether they are anagrams (contain the same characters in any order).
*/

/* Write a function that takes a string and returns the number of occurrences of each character in that string.

function stringManipulator(str) {
  //Check if value is a string
  if (typeof str !== "string") {
    return "Value must be a string";
  }

  const charCount = {};

  for (let c of str) {
    if (charCount[c]) {
      charCount[c] += 1;
    } else {
      charCount[c] = 1;
    }
  }

  return charCount;
}

const str = "dogg";
console.log(stringManipulator(str));
*/

/* Create a function that accepts two variables: a number and a boolean. If the boolean is true, return the number multiplied by 10; otherwise, return the number divided by 10.

function divMulMachine(num, bool = true) {
  let result;

  if (bool === true) {
    result = num * 10;
  } else if (bool === false) {
    result = num / 10;
  } else {
    return "Please specify the correct boolean";
  }

  return result;
}

const num = 4;
const boolean = false;

console.log(divMulMachine(num, boolean));
*/

// Given an array of mixed data types (numbers, strings, etc.), write a function that returns a new array containing only the numbers.

function mixedOperator(array) {
  let newArray = [];

  for (let c of array) {
    if (typeof c === "number") {
      newArray.push(c);
    }
  }

  return newArray;
}

const mixedTypes = [12, "hello", false, 34];
console.log(mixedOperator(mixedTypes));
