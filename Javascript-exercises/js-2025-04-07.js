/*
What is the result when you perform the following operation in JavaScript?
console.log(2 + '2' - 1);

console.log(2 + "2" - 1);
//I got "21", but why
//Correction:
//turns out the reason why i got that output is bacause of the way javascript hanldes type coersion apperantly, so it converts 2 to a string, then adds it to '2' by concatenation, then when substracting, it recognizes as an airthmetic operation and converts to number then performs the operation


Explain the behavior of typeof with the following variables:
let x = null;
let y = undefined;
let z = NaN;

let x = null;
let y = undefined;
let z = NaN;
console.log(typeof x, typeof y, typeof z);
//This is what i got "object undefined number"


Write a function that converts two parameters of different types (e.g., a string and a number) to the same type and returns their sum.


function additionMachine(x, c) {
  const newX = Number(x);
  const newC = Number(c);

  const result = newX + newC;
  console.log(result);
}

additionMachine("4", "5");
//i got "9", as in a number not a string


What happens when you try to access an array index that is out of bounds?
const arr = [10, 20, 30];
console.log(arr[5]);
//I got undefined

Compare the behavior of == (loose equality) and === (strict equality) with the following comparison:

let a = 0;
let b = '0';

//Answer
let a = 0;
let b = "0";

console.log(a == b, a === b);
// i feel why it is like this is because when doing the first comparism, "a was converted the a string behind the scenes, but when using the strict comparism, no conversion was made so it returns false as expected"



What is the output when you log typeof [] and typeof {} in JavaScript?
// I got "object object", i think this is a common javascript quirk that that return type of "null" to be object, so in this case, both the array and object are empty, so it will return object

*/
console.log(typeof [], typeof {});
