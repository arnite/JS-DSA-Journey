/*  Create a function that accepts a callback and invokes that callback inside a setTimeout, logging "Done!" after 2 seconds.

function delay(callback) {
  setTimeout(() => {
    console.log(callback());
    console.log("done");
  }, 2000);
}

function cooking() {
  return "Cooking spaghetti";
}

delay(cooking);
*/

/* Create a function that demonstrates variable shadowing by declaring a variable inside a nested function.

function outerFunction() {
  let message = "I’m from the outer function";

  function innerFunction() {
    let message = "I’m from the inner function"; // ← this shadows the outer variable
    console.log(message); // Will print: I’m from the inner function
  }

  innerFunction();

  console.log(message); // Will print: I’m from the outer function
}

outerFunction();
*/

/* Write a program that uses a closure to store and retrieve an object’s properties without modifying the original object directly.

const data = {
  name: "Arnold",
  occupation: "Programmer",
  MOB: "jULY",
};

function dataManager(data) {
  const mData = { ...data };

  return {
    getData(key) {
      return mData[key];
    },
    setData(key, value) {
      mData[key] = value;
      return "Data set";
    },
  };
}

const mod = dataManager(data);
console.log(mod.setData("name", "donald"));
console.log(mod.getData("name"));
*/

// Create an arrow function that takes an array and returns the sum of all the elements in that array.

const modifier = (array) => {
  const sum = array.reduce((sum, num) => sum + num, 0);
  return sum;
};

const array = [2, 4, 5, 6];
console.log(modifier(array));
