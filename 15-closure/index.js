/* Task 1: 
Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result. 
*/

function outerFun() {
  const user = "Hii! I am from outer variable";
  return function innerFun() {
    console.log(`Inner Function : ${user}`);
  };
  //   return innerFun;
}

// Call the outer function to get the inner function
const myFunction = outerFun();
console.log(myFunction());

/* Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter. */

// function privateCounter() {
//   let counter = 0; // private variable
//   function increaseCounter() {
//     counter++;
//   }

//   function getCounterVal() {
//     return counter;
//   }

//   return { increaseCounter, getCounterVal };
// }

function privateCounter() {
  let counter = 0; // private variable

  return {
    increaseCounter: function () {
      counter++;
    },
    getCounterVal: function () {
      return counter;
    },
  };
}

const result = privateCounter();
console.log(`Couter Before Increment : ${result.getCounterVal()}`);
result.increaseCounter();
result.increaseCounter();
console.log(`Couter After Increment : ${result.getCounterVal()}`);

/* Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call. */

function generateID() {
  let lastID = 0;

  return function increaseID() {
    lastID++;
    return lastID;
  };
}

const trackID = generateID();
console.log(trackID());
console.log(trackID());
console.log(trackID());

/* Task 4: Create a closure that captures a user's name and returns a function that greet the user by name. */

function createUser(username) {
  return function greet() {
    console.log(`Hello ${username}!! Welcome Back.`);
  };
}

const newUser = createUser("Manisha");
console.log(newUser());

/* Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index. */

function createArray(size) {
  const functionArray = [];

  for (let i = 0; i < size; i++) {
    functionArray.push(
      (function (index) {
        return function () {
          console.log(`Function Index : ${index}`);
        };
      })(i)
    );
  }
  return functionArray;
}

const checkFun = createArray(5);
checkFun.forEach((fun) => fun());

/*
Explanation : 

1. createArray(size) : 

        This function creates an array of functions (functionArray).

        It uses a loop to push functions into the array. Each function is wrapped inside an immediately invoked function expression (IIFE) to capture the current value of i as index.

        The IIFE ensures that each function created during the loop has its own scope with the correct index value.

        The function then returns the array of functions.

2.  checkFun.forEach((fun) => fun());

        This line iterates over the array of functions and invokes each one.

Without the IIFE, all functions would have logged the final value of i after the loop completes, due to how closures capture variables by reference.

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items. */

function createItemList() {
  const items = [];

  return {
    addItem: function (item) {
      items.push(item);
      console.log(`Added Item : ${item}`);
    },
    removeItem: function (index) {
      if (items.length === 0) {
        console.log("NO items to remove");
        return;
      }

      if (index >= 0 && index < items.length) {
        // items.splice(index, 1)[0] : remove an element from an array and return the removed element.
        const removedItem = items.splice(index, 1)[0];
        console.log(`Removed Item : ${removedItem}`);
        return removedItem;
      } else {
        console.log("Invalid Index. Item not Removed.");
      }
    },
    listItems: function () {
      if (items.length === 0) {
        console.log("No items in the list");
      } else {
        console.log("Items added :", items);
      }
    },
  };
}

const myItems = createItemList();
myItems.addItem("Tea");
myItems.addItem("Biscuit");
myItems.addItem("Bread");
myItems.addItem("cake");

myItems.listItems();
myItems.removeItem(1);
myItems.listItems();
// myItems.removeItem(6);
// myItems.listItems();

// Remove all items
myItems.removeItem(0);
myItems.removeItem(0);
myItems.removeItem(0);

// Attempting to remove from an empty list
myItems.removeItem(0);

// Listing items in the empty list
myItems.listItems();

/*
Since splice returns an array, [0] accesses the first element of this array, which is the element that was removed from the original items array.
By adding [0] after the splice call, you're effectively extracting the removed element from the array returned by splice.


items.splice(index, 1)[0]:
        This expression removes the element at position index in the items array and directly returns that element.
        
        If you just used items.splice(index, 1), you would get an array containing the removed element (e.g., ['Apple'] if the removed item was "Apple").
        
        By using [0], you extract the "Apple" string from the array, so the result is just "Apple".

        let items = ["Apple", "Banana", "Cherry"];
        let removedItem = items.splice(1, 1)[0]; // Removes "Banana" at index 1

        console.log(removedItem); // Output: "Banana"
        console.log(items); // Output: ["Apple", "Cherry"]


*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations. */

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function square(num) {
  return `Sqaure of number ${num} is : ${num * num}`;
}

const memoized_square = memoize(square);
console.log(memoized_square(4)); // computed
console.log(memoized_square(5)); // and reuses the result of memoized_square(4)

/* Task 8: Create a memoized version of a function that calculates the factorial of a number.  */

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const memoized_factorial = memoize(factorial);
console.log(memoized_factorial(5));
console.log(memoized_factorial(6)); // Output: 720, and reuses the result of memoizedFactorial(5)
