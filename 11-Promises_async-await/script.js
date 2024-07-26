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

async function logResolvedValue(promise) {
  try {
    const result = await promise;
    console.log("Resolved Value : ", result);
  } catch (error) {
    console.log("An error occured", error);
  }
}

const checkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, this is the resolved value!");
    // To test rejection, replace the above line with: reject('An error occurred!');
  }, 3000);
});

logResolvedValue(checkPromise);

/*
Task 5: Create a async function that handles a rejected promise using try-catch and logs the error message.
*/
async function logRejectedValue(promise) {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log("An error occured: ", error);
  }
}

const checkRejection = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Hii, this is the rejected value!");
  }, 2000);
});

logRejectedValue(checkRejection);

/*
Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
*/

function fetchData(url) {
  return fetch(url).then((response) => {
    if (!response === "ok") {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

const responseURL = "https://jsonplaceholder.typicode.com/users";
fetchData(responseURL)
  .then((data) => {
    console.log("Data fetched from the API:", data);
  })
  .catch((error) => {
    console.log(error);
  });

/*
Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
*/

async function fetchDataAsync(url) {
  try {
    const response = await fetch(url);
    if (!response === "ok") {
      throw new Error("error");
    }

    const data = await response.json();
    console.log("Data fetched from the API Async-Await:", data);
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
}

const apiURL = "https://jsonplaceholder.typicode.com/users";
fetchDataAsync(apiURL);

/*
Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values
*/

// Function to fetch data from a public API
function fetchDataAll(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

// URLs of the public API endpoints
const apiURL1 = "https://jsonplaceholder.typicode.com/posts/1";
const apiURL2 = "https://jsonplaceholder.typicode.com/posts/2";
const apiURL3 = "https://jsonplaceholder.typicode.com/posts/3";

// Fetch data from the public APIs and log the response data to the console
Promise.all([
  fetchDataAll(apiURL1),
  fetchDataAll(apiURL2),
  fetchDataAll(apiURL3),
])
  .then((values) => {
    console.log("All data fetched:");
    values.forEach((value, index) => {
      console.log(`Data from API using Promise.all ${index + 1}:`, value);
    });
  })
  .catch((error) => {
    console.error("An error occurred while fetching data:", error);
  });

/*
Task 9: Use Promise.race to log the value of the first promise that resolve among multiple promises.
*/

// Function to fetch data from a public API with a delay
function fetchDataRace(url, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            resolve(data);
          })
          .catch(error => {
            reject(`Failed to fetch data from ${url}: ${error.message}`);
          });
      }, delay);
    });
  }
  
  // URLs of the public API endpoints with different delays
  const apiURLRace1 = 'https://jsonplaceholder.typicode.com/posts/1';
  const apiURLRace2 = 'https://jsonplaceholder.typicode.com/posts/2';
  const apiURLRace3 = 'https://jsonplaceholder.typicode.com/posts/3';
  
  // Use Promise.race to log the value of the first promise that resolves
  Promise.race([
    fetchDataRace(apiURLRace1, 3000),
    fetchDataRace(apiURLRace2, 2000),
    fetchDataRace(apiURLRace3, 1000)
  ])
    .then(value => {
      console.log('First resolved data:', value);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
  