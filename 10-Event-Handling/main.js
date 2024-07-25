/*
Task 1 : Add a click event listener to a button that changes the text content of a paragraph
*/
const changeBtn = document.querySelector("#changeBtn");
const paraText = document.querySelector(".paraText");

const originalParaContent = paraText.textContent;
const originalBtnContent = changeBtn.textContent;

changeBtn.addEventListener("click", () => {
  paraText.textContent =
    paraText.textContent === originalParaContent
      ? "Yay I am Changed now!"
      : originalParaContent;

  changeBtn.textContent =
    changeBtn.textContent === originalBtnContent
      ? "Revert"
      : originalBtnContent;
});

/*
Task 2 : Add a double-click event listener to an image that toggles its visibility.
*/

const imageDiv = document.getElementById("imgDiv");
const image = document.getElementById("myImage");

imageDiv.addEventListener("dblclick", () => {
  image.style.display = image.style.display === "none" ? "block" : "none";
});

/*
Task 3 : Add a mouseover event listener to an element that changes its background color.
*/
const cardChangeBg = document.querySelector("#cardBg");
cardChangeBg.addEventListener("mouseover", function () {
  cardChangeBg.style.backgroundColor = "#000";
});

/*
Task 4 : Add a mouseout event listener to an element that resets its background color.
*/

cardChangeBg.addEventListener("mouseout", function () {
  cardChangeBg.style.backgroundColor = null;
});

/*
Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
*/
const inputBox = document.querySelector("#inputField");
const inputResult = document.querySelector(".inputResult");
inputBox.addEventListener("keydown", (e) => {
  // console.log(e.key);
  inputResult.textContent =
    e.key === " " ? "Key Pressed : space" : `Key Pressed : ${e.key}`;
});

/*
Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
*/
const inputValue = document.querySelector(".inputValue");
inputBox.addEventListener("keyup", (e) => {
  inputValue.textContent = `Input Value : ${e.target.value}`;
});

/*
Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
*/
const formEl = document.querySelector("#form");
const emailBox = document.querySelector(".emailBox");
const passBox = document.querySelector(".passwordBox");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log();

  // Directly access input elements and log their values
  const emailEl = document.querySelector("#email").value;
  const passwordEl = document.querySelector("#password").value;
  emailBox.textContent = `Email is : ${emailEl}`;
  passBox.textContent = `Password is : ${passwordEl}`;
});

/*
Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
*/
const selectElement = document.getElementById("options");
const displayParagraph = document.getElementById("selectedValue");

selectElement.addEventListener("change", (e) => {
  displayParagraph.textContent = `Selected Value : ${e.target.value}`;
});

/*
Task 9: Add a click event listener to a list that logs the text content of the clicked list items using event delegation.
*/
const ulElement = document.querySelector("#listItems");
const listResult = document.querySelector("#listResult");

ulElement.addEventListener("click", (event) => {
  // Check if the clicked element is a list item
  if (event.target.tagName === "LI") {
    listResult.textContent = `Clicked Li Value : ${event.target.textContent}`;
  }
});

/*
Key points about event delegation:
Instead of attaching event listeners to each individual list item, we attach a single listener to the parent element (the list).
When a click event occurs on a list item, it bubbles up to the parent list element, triggering the event listener.
We can then check the target of the event to determine which list item was clicked.

*/

/*
Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
*/
const parentElement = document.getElementById("parent");

parentElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("childElement")) {
    const childElementText = event.target.textContent;
    console.log(childElementText);
  }
});
