/*
1. Variables & Data Types

1. Declare a variable x and assign it the value of 10. Then, reassign it to a string "Hello". What happens?


2. What is the difference between undefined and null in JavaScript? Write a function that demonstrates the difference.


3. Create an array called fruits with 5 different fruits. Modify the second item in the array to "Mango".


4. Create a function that accepts a parameter of type boolean and returns a string, either "True" or "False".


5. What happens when you try to assign an object to a variable declared with const? Can the object’s properties still be changed?


const x = 10;
const x = "Hello";
console.log(x);
//Observation: I got "Cannot redeclare block-scoped variable"

function showUndefinedNull(){
    const a = 
    const b = 0;

    console.log(`what is a?: ${a}`)
     console.log(`what is a?: ${b}`)
}
//observation, i got unexpected token "const"
*/

const fruits = ["tangerine", "orange", "pineapple", "avocado", "bannana"];
fruits[1] = "mango";
console.log(fruits);
//observation: i got this "[ 'tangerine', 'mango', 'pineapple', 'avocado', 'bannana' ]"
