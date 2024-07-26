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
// Simulate fetching data from a server with a promise
function fetchData(url, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network Response was on OK");
          }
          return response.json();
        })
        .then((data) => {
          console.log(`Fetched Data from ${url}`);
          resolve(data);
        })
        .catch((error) => {
          reject(`Failed to fetched data from ${url} : ${error.message}`);
        });
    }, delay);
  });
}

// Chain the promises to log messages in a specific order
fetchData("https://jsonplaceholder.typicode.com/posts/1", 1000)
  .then((data1) => {
    console.log("Data 1 Processed : ", data1);
    return fetchData("https://jsonplaceholder.typicode.com/posts/2", 2000);
  })
  .then((data2) => {
    console.log("Data 2 processed:", data2);
    return fetchData("https://jsonplaceholder.typicode.com/posts/3", 1500);
  })
  .then((data3) => {
    console.log("Data 3 processed:", data3);
    console.log("All data fetched and processed");
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });

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
