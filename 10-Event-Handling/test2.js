// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Display Single Input Value Example</title>
// </head>
// <body>

// <form id="myForm">
//     <label for="name">Name:</label>
//     <input type="text" id="name" name="name" required>
//     <br>
//     <label for="email">Email:</label>
//     <input type="email" id="email" name="email" required>
//     <br>
//     <button type="submit">Submit</button>
// </form>

// <div id="displayArea">
//     <h2>Submitted Data:</h2>
//     <p id="displayName"></p>
// </div>

// JavaScript to add the submit event listener
document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("myForm");
  const displayName = document.getElementById("displayName");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Create a FormData object from the form
    const formData = new FormData(form);

    // Get the value of the specific input (e.g., 'name')
    const nameValue = formData.get("name");

    // Display the value of the specific input field
    displayName.textContent = `Name: ${nameValue}`;
  });
});
