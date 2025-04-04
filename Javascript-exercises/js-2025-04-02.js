/*
Question 2: Sum of Digits Using Recursion
Write a function that takes a number and returns the sum of its digits using recursion.

Requirements:
Use recursion (a function that calls itself).

Use only basic arithmetic and function calls (no loops).

Encapsulate the logic in a function.

Hint:
Think about how to break down the number into smaller parts (last digit and remaining number).

The base case should stop when the number is 0.
*/

function sumDigits(n) {
  if (n === 0) return 0; // Base case: when n is 0, stop recursion
  return (n % 10) + sumDigits(Math.floor(n / 10)); // Add last digit & recurse on remaining
}

console.log(sumDigits(253)); // Output: 10
