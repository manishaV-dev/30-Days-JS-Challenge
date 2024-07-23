/*
Task 1 : Create an object representing a book with properties like title, author, and year and log the object to the console.
 */
const book = {
  title: "Tuesdays with Morrie",
  author: "Mitch Albom",
  year: 1998,
};

console.log(book);

/*
Task 2 : Access and log the title and author properties of the book object.
 */
console.log(`'${book.title}' is written by ${book.author} in ${book.year}`);

/*
Task 3 : Add a method to the book object that returns a string with the book's title and author and log the result of calling this method.
 */

const addMethod = {
  title: "Tuesdays with Morrie",
  author: "Mitch Albom",
  year: 1998,
  getSummery: function () {
    return `${book.title} by ${book.author} `;
  },
  updateYear: function (newYear) {
    this.year = newYear;
  },
};

console.log(addMethod.getSummery());

/*
Task 4 : Add a method to the book object that takes a parameter (year) and updates the book's year property and log the updated object.
 */

addMethod.updateYear(2020);
console.log(addMethod);
console.log(addMethod.year);

/*
Task 5 : create a nested object representing a library with properties like name and books (an array of book objects) and log the library object to the console.
 */
let library = {
  name: "The National Libraruy of India",
  books: [
    {
      title: "Tuesdays with Morrie",
      author: "Mitch Albom",
      year: 1998,
    },
    {
      title: "The Last Lecture",
      author: "Randy Pausch",
      year: 2008,
    },
    {
      title:
        "The Mountain Is You: Transforming Self-Sabotage Into Self-Mastery",
      author: "Brianna Wiest",
      year: 2023,
    },
  ],
};

console.log(library);
console.log(library.books[0].title); // Tuesdays with Morrie

/*
Task 6 : Access and log the name of the library and the titles of all the books in the library.
 */
console.log(library.name);

library.books.forEach((book, i) => {
  console.log(`${i + 1} Book Title - ${book.title}`);
});

/*
Task 7 : Add a method to the book object that uses the this keyword to return a string with the book's title and year and log the result of calling the this method.
 */

const addMethod2 = {
  title: "Tuesdays with Morrie",
  author: "Mitch Albom",
  year: 1998,
  getSummery: function () {
    return `${this.title} by ${this.year} `;
  },
};
console.log(addMethod.getSummery());


/*
Task 8 : use a for...in loop to iterate over the properties of the book obejct and log each property and its value.
 */
// const book = {
//     title: "Tuesdays with Morrie",
//     author: "Mitch Albom",
//     year: 1998,
//   };

for (const key in book) {
   console.log(`Property : ${key} - Value : ${book[key]}`)
}


/*
Task 9 : use Object.keys and Object.values method to log all the keys and values of the book object
 */

const keys = Object.keys(book);
console.log("Keys:", keys);

const values = Object.values(book);
console.log("Values:", values);