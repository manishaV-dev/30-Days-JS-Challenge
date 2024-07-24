/*
Task 1 : use template literals to create a string that includes variables for a person's name and age, and log the string to the console
 */
let name = "John Doe";
let age = 30;

console.log(`Name is ${name} and age is ${age}`);

/*
Task 2 : create a multi-line string using template literals and log it to the console.
 */
let multiLineStr = `create a multi-line string 
using template literals
and log it to the console.`;
console.log(multiLineStr);

/*
Task 3 : Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
 */
let numbers = [1, 5, 8, 9, 7];

let [fisrtEl, secondEl] = numbers;
console.log(fisrtEl, secondEl);

/*
Task 4 : use object destructuring to extract the title and author from a book object and log them to the console.
 */
const books = {
  title: "Tuesdays with Morrie",
  author: "Mitch Albom",
};

let { title, author } = books;
console.log(`${title} by ${author}`);

/*
Task 5 : use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
 */

let originalArray = [1, 5, 7, 8, 6];
// let copyArray = [...originalArray, 10, 25, 32]; both can be use
let copyArray = [10, 25, 32, ...originalArray];

console.log(copyArray);

/*
Task 6 : use the rest operator in a function to accept an arbitary number of arguments, sum them and return the result.
 */

function sumAll(...arg) {
  return arg.reduce((acc, currVal) => acc + currVal, 0);
}
console.log(sumAll(10, 20, 30, 40));

// If you have an array of numbers
let numberArray = [54, 25, 78, 56];
console.log(sumAll(...numberArray));

/*
Task 7 : Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1, log the result of calling this function with and without the second parameter.
 */
function product(x, y = 1) {
  return x * y;
}

console.log(product(5, 10));
console.log(product(5));

/*
Task 8 : use enhanced object literals to create an object with methods and properties and log the object to the console.
 */
const heading = "JavaScript : The Awesome Part";
const topic = "ES6 Features";
const featureYear = 2015;

const newBook = {
  heading,
  topic,
  featureYear,

  // Method shorthand
  getSummery() {
    return `${this.topic} comes in ${this.featureYear} that gives ${this.heading}`;
  },
};

console.log(newBook);
console.log(newBook.getSummery());

/*
Task 9 : create an object with computed property names based on variables and log the object to the console.
 */

const bookWithComputed = {
  heading,
  title,
  featureYear,
  getSummery() {
    return `${this.topic} comes in ${this.featureYear} that gives ${this.heading}`;
  },

  // computed Property
  [`publishedIn${featureYear}`]: true,
};

console.log(bookWithComputed)