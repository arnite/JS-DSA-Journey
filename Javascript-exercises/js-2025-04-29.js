/*
// Can you write a function that takes an array and returns a new array with only the even numbers, without looking anything up?
function evenFinder(arr) {
  let evenArray = [];

  for (let num of arr) {
    if (num % 2 === 0) {
      evenArray.push(num);
    }
  }
  return `This are your even numbers: [${evenArray}]`;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 14];
console.log(evenFinder(numbers));


// Can you explain how to reverse a string step-by-step?
function strRev(str) {
  if (str.length === 0) return "";
  
  let lastChar = str.slice(-1);
  let remChar = str.slice(0, -1);

  return lastChar + strRev(remChar);
}

const string = "mango";
console.log(strRev(string))
// First thing is, i implemented this using recursion, so i created a base case to avoid stack overflow, then i continued the implementing the logic by capturing the last character of the string before removing it and pasiing the remaining string to the next recursion so this way each function captures the last character and passes the remaining to the next and it does this recursively till the base case

// Write a program that checks for palindrome.
function palindromeCheck(str) {
  const stringRev = str.split("").reverse().join("");
  return stringRev === str;
}

const string = "lel";
console.log(palindromeCheck(string));


FizzBuzz
function fizbuzz(n) {
  let numbers = [];

  while (numbers.length < n) {
    if (numbers.length === 0) {
      numbers.push(1);
    } else {
      numbers.push(numbers[numbers.length - 1] + 1);
    }
  }

  let fizbuzz = [];
  for (let fiz of numbers) {
    if (fiz % 5 === 0 && fiz % 3 === 0) {
      fizbuzz.push("fizzbuzz");
    } else if (fiz % 5 === 0) {
      fizbuzz.push("buzz");
    } else if (fiz % 3 === 0) {
      fizbuzz.push("fizz");
    } else {
      fizbuzz.push(fiz);
    }
  }

  return fizbuzz;
}
  console.log(fizbuzz(10));


// Find the Maximum Number in an Array
function maxNum(arr) {
  if (arr.length === 0) return "Please don't pass in an empty array.";
  let num = arr[0];

  for (let i of arr) {
    if (i > num) num = i;
  }

  return `The biggest number is [${num}]`;
}

const array = [13, 7, 2, 9, 5];
console.log(maxNum(array));


// Count Vowels in a String
function vowelConsonantIdentifier(str) {
  const vowels = "aeiou";
  let vowelCount = 0;
  let consonant = 0;

  for (let i of str) {
    if (vowels.includes(i)) {
      vowelCount++;
    } else {
      consonant++;
    }
  }
  return `Vowel count: ${vowelCount}, Consonant count: ${consonant}`;
}

const word = "aeiou";
console.log(vowelConsonantIdentifier(word));


// Remove Duplicates from an Array
function dupRemove(arr) {
  let sortedArray = [];

  for (let i of arr) {
    if (sortedArray.includes(i)) {
      continue;
    } else {
      sortedArray.push(i);
    }
  }

  return sortedArray;
}

const array = [1, 2, 2, 3, 4, 4, 5];
console.log(dupRemove(array));
*/

// Sum of All Even Numbers in an Array
function evenSum(arr) {
  let even = [];
  let evenAddition = 0;

  for (let i of arr) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      continue;
    }
  }

  if (even.length > 0) {
    evenAddition = even.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  }

  return evenAddition;
}

const array = [6, 1, 2];
console.log(evenSum(array));
