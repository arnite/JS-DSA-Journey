/*Create a function that swaps the values of two variables without using a third variable.

Write a program that converts a string to a number, ensuring that it handles any invalid inputs gracefully (e.g., returning NaN when the input is not convertible).
*/

function variableSwapper(string, num) {
  [num, string] = [string, num];

  return [string, num];
}

const string = "nonso";
const num = 45;

console.log(variableSwapper(string, num));

//Next question
function stringConverter(str) {
  const cnvStr = Number(str);

  if (isNaN(cnvStr)) {
    return "NaN, input not convertible.";
  }

  return `Converted String: ${cnvStr}`;
}

const str = "4500";
console.log(stringConverter(str));
