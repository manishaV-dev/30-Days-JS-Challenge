// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Form Submit Event Example</title>
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
// </div>

// JavaScript to add the submit event listener
document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("myForm");
  const displayArea = document.getElementById("displayArea");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Create a FormData object from the form
    const formData = new FormData(form);

    // Clear previous display content
    displayArea.innerHTML = "<h2>Submitted Data:</h2>";

    // Iterate over the formData and display the values on the HTML page
    for (let [name, value] of formData) {
      const p = document.createElement("p");
      p.textContent = `${name}: ${value}`;
      displayArea.appendChild(p);
    }
  });
});
