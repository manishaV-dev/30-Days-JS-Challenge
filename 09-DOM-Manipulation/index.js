/*
Task 1 : Select an HTML element by its ID and change its text content.
 */
const heading = document.querySelector("#heading");
heading.textContent = "DOM Manipulation in JS";

/*
Task 2 : Select and HTML element by its class and change its Background color
 */

const card = document.querySelector(".changeBG");
card.style.backgroundColor = "#424242";

/*
Task 3 : Create a new div element with some text content and append it to the body.
 */
const container = document.querySelector(".container");
const createDiv = document.createElement("div");
createDiv.classList.add("newDiv");
const addText = document.createTextNode("Hello! I am created by JS");
// createDiv.textContent = "Hello! I am created by JS";
createDiv.appendChild(addText);
// document.body.appendChild(createDiv)
container.appendChild(createDiv);

/*
Task 4 : Create a new li element and add it to an existing ul list.
 */
const listItems = document.querySelector(".list-items");
const newList = document.createElement("li");
newList.textContent = "React JS";
listItems.appendChild(newList);

// Add color to the list item by convertig them into an array and then using foreach loop
const liItemLists = document.getElementsByTagName("li");
const conArray = Array.from(liItemLists);
console.log(conArray);
conArray.forEach((item) => {
  item.style.backgroundColor = "#109d7a";
  item.style.margin = "10px 0";
  item.style.padding = "0 10px";
});

/*
Task 5 : Select an HTML element and remove it from the DOM.
 */

const removeEl = document.querySelector(".removePara");

if (removeEl) {
  removeEl.remove();
}

/*
Task 6 : Remove the last child of a specific HTML element.
 */
const lastList = document.querySelector(".list-item:last-child");
lastList.remove();

/*
Task 7 : Select an HTML element and change one of its attributes (e.g src of an img tag)
 */

const imageEl = document.querySelector(".image");
if (imageEl) {
  // imageEl.src = 'img-1.jpg';
  imageEl.setAttribute("src", "img-1.jpg");
}

/*
Task 8 : Add and remove a CSS class to/from an HTML element.
 */
const para = document.querySelector(".para");
para.classList.add("paraColor");
para.classList.remove("paraColor");

para.classList.toggle("paraColor");

/*
Task 9 : Add a click event listener to a button that changes the text content of a paragraph.
 */
// const btn = document.querySelector('#btn')
// btn.addEventListener('click', function(){
//     para.textContent = "hello"
// })

// when again click then show the previous text
// const btn = document.querySelector("#btn");
// const paraText = para.textContent; // Store the original text
// btn.addEventListener("click", function () {
//   para.textContent =
//     para.textContent === paraText ? "New Text Content" : paraText;
// });

// also want to change the button text
const btn = document.querySelector("#btn");
const paraText = para.textContent; // Store the original text
const btnText = btn.textContent;

btn.addEventListener("click", function () {
  if (para.textContent === paraText) {
    para.textContent = "New Text Content";
    btn.textContent = "Revert";
  } else {
    para.textContent = paraText;
    btn.textContent = btnText;
  }
});

/*
Task 10 : Add a mouseover event listener to an element that changes its border color.
 */

btn.addEventListener("mouseover", function () {
  btn.style.borderColor = "red";
});
