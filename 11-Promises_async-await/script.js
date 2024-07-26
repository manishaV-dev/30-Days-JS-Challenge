/*
Task 1: Create a promise that resolve with a message after 2-second timeout and log the message to the console.
*/
const promiseCreate = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false; // change true to check reject result
    if (!error) {
      resolve({ Course: "JS", topic: "Promise & async-await" });
    } else {
      reject("Course Not Found!😣");
    }
  }, 2000);
});

promiseCreate
  .then((courseDetails) => {
    console.log(courseDetails);
  })
  .catch((error) => console.log(error));

//======================================================================================================================

function delayedMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello after 2 seconds!");
    }, 2000);
  });
}

delayedMessage().then((message) => {
  console.log(message);
});

/*
Task 2: Create a promise that reject with an error message after 2-second timeout and handle the error using .catch()
*/
const promiseReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error: Operation timed out after 2 seconds");
  }, 2000);
});

promiseReject.catch((error) => {
  console.log(error);
});

/*
Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log message in s specific order.
*/

/*
Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
*/

/*
Task 5: Create a async function that handles a rejected promise using try-catch and logs the error message.
*/

/*
Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
*/

/*
Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
*/

/*
Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values
*/

/*
Task 9: Use Promise.race to log the value of the first promise that resolve among multiple promises.
*/
