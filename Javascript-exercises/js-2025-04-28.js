/*
Theory-Based Questions:
What is recursion in JavaScript, and what are the two essential parts every recursive function must have?

How does recursion differ from iteration (loops) in problem-solving?

What is a base case in recursion, and why is it important?

Explain what the spread operator (...) does in JavaScript.

What is the difference between the rest operator and the spread operator, even though they both use ...?

What are template literals in JavaScript, and how are they different from regular strings?

What is object destructuring in JavaScript, and why is it useful?

How do arrow functions differ from traditional functions in terms of this binding?

What is the purpose of default parameters in JavaScript functions?

How does recursion risk causing a "stack overflow" error, and how can it be avoided?





Problem-Solving Questions:
Write a recursive function that calculates the factorial of a number.

Create a recursive function that sums all numbers from 1 up to a given number n.

Write a function using the spread operator to merge two arrays into a new array.

Use object destructuring to extract the name and age properties from a person object.

Create an arrow function that accepts two numbers and returns their product.

Write a function that uses recursion to count down from a given number to 1.

Use rest parameters to write a function that accepts any number of numbers and returns their sum.

Using template literals, write a function that accepts a first name and last name and returns a full greeting like "Hello, John Doe!".

Create a function that recursively finds the nth number in the Fibonacci sequence.

Use the spread operator to make a shallow copy of an object and modify a property in the copy without affecting the original.
*/

/* Write a recursive function that prints numbers from n down to 1.
const printNum = (n) => {
  if (n === 0) return "End";
  console.log(n);
  printNum(n - 1);
};

printNum(4);
*/

/* Write a recursive function reverseString(str) that returns the reverse of a string.
function reverseString(str) {
  if (str.length === 0) return "";

  let lastChr = str.slice(-1);
  let exrChrs = str.slice(0, -1);

  return lastChr + reverseString(exrChrs);
}

const result = reverseString("Pineapple");
console.log(result);
*/

/* Write a simple fibonacci code.
function fib(n) {
  let fibArray = [0, 1];

  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return fibArray;
  } else if (n > 1) {
    while (fibArray.length <= n) {
      const index =
        fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
      fibArray.push(index);
    }
  }

  return fibArray;
}

console.log(fib(1));
*/

function fib(n) {
  if (n <= 1) {
    return n; // Base case: fib(0) = 0, fib(1) = 1
  }
  return fib(n - 1) + fib(n - 2); // Recursive case
}

console.log(fib(1)); // Output: 8
