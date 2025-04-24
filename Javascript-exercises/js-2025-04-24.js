/*
What is the main difference between if...else and switch statements in JavaScript, and when might one be preferred over the other?

How does a do...while loop differ from a while loop?

Explain the difference between for...of and for...in loops in JavaScript. What types of values do they iterate over?

What are the key differences between slice() and splice() in array manipulation?

How does the reduce() method work on arrays, and what kind of problems is it best suited for?

In JavaScript, how can you check if an object has a specific property?

What happens when you try to access a non-existent property on an object? How does JavaScript handle this?

Explain how map() and filter() differ in what they return and how they process array elements.

Can you modify an object’s properties that are nested within a const object? Why or why not?

What is the difference between shallow copy and deep copy when working with arrays or objects?



Problem-Solving Questions:
Write a function that checks if a number is positive, negative, or zero using if...else and logs the result.

Given a number, use a while loop to print all numbers from that number down to 1.

Create a switch statement that takes a string representing a day of the week and logs whether it's a weekday or weekend.

Create an array and use push(), pop(), shift(), and unshift() to demonstrate how elements are added and removed from both ends.

Write a function that takes an array of numbers and returns a new array with only the numbers that are greater than 10 using filter().

Create an array of strings and use map() to return an array of string lengths.

Use reduce() to find the total sum of numbers in an array.

Write a function that accepts an object and logs all its keys and values using a for...in loop.

Create an object representing a person with nested address details. Access and log the city value.

Given an object, write a function that removes a specified property from the object and returns the updated object.
*/

/* Write a function that checks if a number is positive, negative, or zero using if...else and logs the result.

function numChecker(num) {
  // Check if input is valid
  if (isNaN(num)) return "Invalid input";

  if (num < 0) {
    return "Negative.";
  } else if (num > 0) {
    return "Positive.";
  } else {
    return "Zero.";
  }
}

const result = numChecker("4");
console.log(result);
*/

/* Given a number, use a while loop to print all numbers from that number down to 1.

function numPrinter(num) {
  let number = num;
  let result = [];

  if (num > 1000) {
    return `Can't comput on digit above 1000, Your inputed ${num}`;
  }

  while (number > 0) {
    result.push(number);
    number--;
  }

  return `${num} printed down to 1: ${result}`;
}

const result = numPrinter(100);
console.log(result);
*/

// Write a function that takes an array of numbers and returns a new array with only the numbers that are greater than 10 using filter().

function numChanger(arr) {
  const newArr = arr.filter((num) => num > 10);
  return newArr;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16];
const result = numChanger(array);
console.log(result);
