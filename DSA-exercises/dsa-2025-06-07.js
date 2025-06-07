/*
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.


*/

function sortArrayByParity(arr) {
  const odd = [];
  const even = [];

  for (let num of arr) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }

  return even.concat(odd);
}

const arr = [6, 3, 5, 2, 9];
const output = sortArrayByParity(arr);
console.log(output);
