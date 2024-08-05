/*
Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
*/

import axios from "axios";

async function fetchData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(response.data);
    console.log(response.data.userId);
    console.log(response.data.title);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
