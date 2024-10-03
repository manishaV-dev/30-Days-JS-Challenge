/*
recursion is the process of a function calling itself to solve smaller instances of the same problem. Similar to other programming languages, recursive functions in JavaScript need to have:

A base case: This is the condition that stops the recursion and prevents an infinite loop.
A recursive case: The part where the function calls itself with a different (usually simpler) argument, moving toward the base case.

/*



/*
Task 1 : Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
*/

function factorial(n) {
  // Base case: If n is 0, return 1 because 0! = 1
  if (n === 1 || n === 0) {
    return 1;
  }
  // Recursive case: Multiply n by the factorial of (n-1)
  // The recursive case is n * factorial(n - 1), where the function calls itself with n - 1 until it reaches the base case.
  return n * factorial(n - 1);
}

// console.log(factorial(6)); // 720

/*
Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
*/
// Formula - F(n)=F(n−1)+F(n−2)

function fabonacci(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fabonacci(n - 1) + fabonacci(n - 2);
}

// console.log(fabonacci(6));

/*
Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
*/
function sumOfArr(arr) {
  if (arr.legth === 0) {
    return 0;
  }

  return arr[0] + sumOfArr(arr.slice(1));
}
// console.log(sumOfArr([1, 5]));

/*
Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
*/

function findMax(arr, n) {
  // Base case: if there's only one element, return it
  if (n === 1) {
    return arr[0];
  }

  // Recursive case: find the maximum of the rest of the array and compare it with the current element
  return Math.max(arr[n - 1], findMax(arr, n - 1));
}

// Test cases
const arr1 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const arr2 = [-10, -20, -30, -5, -1];
const arr3 = [100];

// console.log(findMax(arr1, arr1.length)); // Output: 9
// console.log(findMax(arr2, arr2.length)); // Output: -1
// console.log(findMax(arr3, arr3.length)); // Output: 100



/*
Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
*/

/*
Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
*/

/*
Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
*/

/*
Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
*/

/*
Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
*/

/*
Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

*/



