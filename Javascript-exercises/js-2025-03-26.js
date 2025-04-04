/*Question 1 (Beginner)
You are building a simple budgeting app. You need to store a user's monthly income and expenses.

Write JavaScript code that:

Declares a variable monthlyIncome using const and assigns it a value of 5000.

Declares a variable monthlyExpenses using let and assigns it a value of 2000.

Attempts to reassign monthlyIncome to 6000.

What happens when you try to run the code? Why?


//Answer
const monthlyIncome = 5000;
let monthlyExpenses = 2000;

monthlyIncome = 4000;
//I got "TypeError: Assignment to constant variable", i think this may be due to the fact that const variable cant be reassigned

/*
Next Question (Intermediate)
You're still working on your budgeting app. Now, you need to store a user's name, whether they have debts, and their list of expenses.

Write JavaScript code that:

Declares a variable userName using var and assigns "John Doe".

Declares a variable hasDebt using let and assigns false.

Declares a variable expenses using const and assigns an array of numbers [500, 1200, 800].

Tries to reassign expenses to [1000, 500, 200].

Instead of reassigning, modifies the first element of expenses to 1000.

What happens when you try to reassign expenses? Why? What about modifying its elements?


//Answer
var userName = "john doe";
let hasDebt = false;
const expenses = [500, 1200, 800];
//Reasigning expenses
expenses = [1000, 500, 200];
//Reasigning the first element.
expenses[0] = 500;
console.log(expenses);
//How did i do, meanwhile, when i ran the code, i got this error message "TypeError: Assignment to constant variable."
*/

/*
Challenge (Advanced Beginner)
Write JavaScript code that:

Declares a variable savingsGoal using let and assigns it 10000.

Declares an object user using const, containing:

name: "Alice"

age: 30

goal: savingsGoal

Updates user.age to 31.

Tries to reassign user to a new object { name: "Bob", age: 25, goal: 5000 }.

❓ What happens when you try to reassign user? Why? Does modifying user.age work?


//Answer
let savingsGoal = 1000;
const user = {
  name: "Alice",
  age: 30,
  goal: savingsGoal,
};
//updating user
user.age = 31;
console.log(user);
//Reassigning user to a different object
user = { name: "Bob", age: 25, goal: 5000 };
//Conclusion: I got a typeError "Assignment to constant variable"
*/

/*
1. Variables & Data Types
Concept Focus: Variables & Data Types (let, const, var, primitives vs. reference types)
Problem Statement:
Create a program that tracks a user's profile information, including name, age, and favorite hobbies. Ensure that the name and age are immutable, but hobbies can be updated later.

Input & Output Requirements:
Input: A name (string), age (number), and an array of hobbies.

Output: Display the user's profile and allow adding a new hobby.
*/
/*Answer
const name = "Daniel";
const age = 6;
let hobbies = ["flying", "swimming", "chess"];

//Adding new hobbies
hobbies.push("cooking");

console.log(
  `User's profile: age = ${age}, name = ${name}, and hobbies = ${hobbies.join(
    ", "
  )}`
);
*/
