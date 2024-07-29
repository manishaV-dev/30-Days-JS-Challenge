/*
Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
*/

function throwError() {
  throw new Error("This is an intentional error.");
}

function callErrorMsg() {
  try {
    throwError();
  } catch (error) {
    console.log(`Caught an error : ${error.message}`);
  }
}

callErrorMsg();

/*
Task 2: Create a function that divides two numbers and throw an error if the denominator is zero. Use a try-catch block to handle this error.
*/

function division(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Can't divide by 0");
  }

  return numerator / denominator;
}

function checkDivision() {
  try {
    let result = division(10, 0);
    console.log(`Result : ${result}`);
  } catch (error) {
    console.log(`Catch new error, ${error.message}`);
  }
}

checkDivision();

/*
Task 3: Write a script that included a try-catch block and a finally block. Log message in the try, catch and finally blocks to obeserve the execution flow.
*/

function divideNumber(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Can't divided by 0");
  }
  return numerator / denominator;
}

function checkFlow() {
  try {
    console.log("Entering in Try Block...");
    // let result = divideNumber(20, 2);
    let result = divideNumber(20, 0);
    console.log(`Result : ${result}`);
  } catch (error) {
    console.log("Entering in catch block...");
    console.log(`Some error : ${error.message}`);
  } finally {
    console.log("Entering in Finally");
  }
  console.log("End of main function.");
}

checkFlow();

/*
Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of the custom error in a function and handle it using a try-catch block.
*/

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function funThatThrowCustomError() {
  // Throw an instance of the custom error
  throw new CustomError("This is a custom Error Message");
}

function checkCustomError() {
  try {
    console.log("Try-Block");
    funThatThrowCustomError();
  } catch (error) {
    if (error instanceof CustomError) {
      console.log(`Caught a custom error : ${error.message}`);
    } else {
      console.log(`Caught an unexpected error : ${error.message}`);
    }
  } finally {
    console.log("This is finally block 😁");
  }
}

checkCustomError();

/*
Task 5: Write a function that validated user input (e.g, checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
*/

class NewCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "NewCustomError";
  }
}

function validateInput(input) {
  if (!input || input.trim() === "") {
    throw new NewCustomError("Input cannot be empty.");
  }
  return "Input is Valid";
}

function checkInput() {
  try {
    let inputField = "Manisha";
    let result = validateInput(inputField);
    console.log(result);
  } catch (error) {
    if (error instanceof NewCustomError) {
      console.log(`Caught a validation error: ${error.message}`);
    } else {
      console.log(`Caught an unexpected error: ${error.message}`);
    }
  } finally {
    console.log("Finally Block 😎");
  }
}

checkInput();

/*
Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate error message to the console.
*/

function createRandomPromise() {
  return new Promise((resolve, reject) => {
    let randomRun = Math.floor(Math.random() * 10) > 5;
    console.log(randomRun);
    if (randomRun) {
      resolve("Promise resolved successfully! 🥰");
    } else {
      reject(new Error("Promise was rejected. 😥"));
    }
  });
}

function checkRandomPromise() {
  createRandomPromise()
    .then((result) => console.log(result))
    .catch((error) => console.log(`Caught an error : ${error.message}`));
}

checkRandomPromise();

/*
Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolve or rejects, and log the error message.
*/

function randomPromise() {
  return new Promise((resolve, reject) => {
    let randomRun = Math.floor(Math.random() * 10) < 8;
    console.log(`second : ${randomRun}`);
    if (randomRun) {
      resolve("Promise resolved successfully! 🥰");
    } else {
      reject(new Error("Promise was rejected. 😥"));
    }
  });
}

async function randomPromiseCheck() {
  try {
    const result = await randomPromise();
    console.log(result);
  } catch (error) {
    console.log(`Try-Catch Error : ${error.message}`);
  }
}

randomPromiseCheck();

/*
Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console. 
*/

function fetchData() {
  let invalidURL = "https://invalid.url";
  fetch(invalidURL)
    .then((response) => {
      if (!response == "ok") {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data:", data);
    })
    .catch((e) => {
      console.log(`Caught an error by fetch: ${e.message}`);
    });
}

fetchData();

/*
Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
*/

async function fetchDataFromInvalidURL() {
  try {
    const response = await fetch("https://invalid.url", {
      method: "GET",
    });
    if (!response.ok) {
      // if the URL exists but returns an error status: otherwise  Failed to fetch
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Caught an error: ${error.message}`);
  }
}

fetchDataFromInvalidURL();
