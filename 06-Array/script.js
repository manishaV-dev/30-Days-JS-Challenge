/*
Task 1 : Create an array of numbers from 1 to 5 and log the array to the console.
 */
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

/*
Task 2 : Access the firsrt and last elements of the array and log them to the console.
 */
console.log(
  `First element of the array is : ${
    numbers[0]
  } and last element of the array is ${numbers[numbers.length - 1]}`
);

/*
Task 3 : Use the push method to add a new number to the end of the array  and log the updated array to the console.
 */
numbers.push(6);
console.log(numbers);

/*
Task 4 : Use the pop method to remove the last element from the array and log the updated array to the console.
 */
numbers.pop();
console.log(numbers);

/*
Task 5 : Use the shift method to remove the fisrt element from the array and log the updated array to the console.
 */
numbers.shift();
console.log(numbers);

/*
Task 6 : Use the unshift method to add a new number to the beginning of the array  and log the updated array to the console.
 */
numbers.unshift(10);
console.log(numbers);

/*
Task 7 : Use the map method to create a new array where each number is doubled and log the new array.
 */
let mapArray = [2, 8, 7, 9, 11];
let newMapArray = mapArray.map((item) => {
  return item * 2;
});
console.log("New Array", newMapArray);
console.log("Old Array", mapArray);

/*
Task 8 : Use the filter method to create a new array with only even numbers and log the new array.
 */

let filterArray = mapArray.filter((item) => {
  return item % 2 === 0;
});

console.log("Filtered Array", filterArray);
console.log(mapArray);

/*
Task 9 : Use the reduce method to calculated the sum of all numbers in the array and log the result.
 */
let reduceArray = mapArray.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("Reduced Array:", reduceArray);
console.log("Old Array :", mapArray);

/*
Task 10 : Use a for loop to iterate over the array and log each element to the console.
 */
let loopArray = ["Manisha", 24, true, 2, null, "Varma"];
for (let i = 0; i <= loopArray.length - 1; i++) {
  console.log(loopArray[i]);
}
console.log(`My Name is ${loopArray[0]} ${loopArray[loopArray.length - 1]}`);

/*
Task 11 : Use a forEach to iterate over the array and log each element to the console.
 */
let forEachArray = ["Manisha", 24, true, 2, null, "Varma"];
forEachArray.forEach((item) => {
  console.log(item);
});

/*
Task 12 : create a two dimensional array (matrix) and log the entire array to the console.
 */
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);

/*
Task 13 : Access and log a specific element from the two-dimensional array.
 */

// let accessing the element in the second row (index 1) and third column (index 2)

let accessingEl = matrix[1][2];
console.log(accessingEl); // 6