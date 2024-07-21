/*
Task 1 : Declare a variable using var, assign it a number, and log the value to the console.
 */

var num = 6;
console.log(num);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Task 2.  Declare a variable using let, assign it a string, and log the value to the console.
 */
let myName = "Manisha";
console.log(myName);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Task 3.  Declare a variable using const, assign it a boolean value, and log the value to the console.
 */

const isLogged = true;
console.log(isLogged);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Task 4.  create variable of different data types(number, string, boolean, object , array) and log every type using typeof operator.
 */

let someNum = 10;
let someStr = "Hello World!";
let someBoolean = false;
let myObj = {
  course: "JS Challange",
  day: 1,
  topic: "Variables and Data type",
};
let myArr = [1, 3, 7, 10];

console.log(typeof someNum);
console.log(typeof someBoolean);
console.log(typeof someStr);
console.log(typeof myObj);
console.log(typeof myArr);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Task 5.  Declare a variable using let, assign it an initial value, reassign a new value and log both the value to the console.
 */

let initialVal = 678;
console.log(`Initial Value is : ${initialVal}`);
initialVal = 567;
console.log(`After re-assigning the value is : ${initialVal}`);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Task 6.  Try reassigning a variable declared with const and observe the error.
 */

const reassign = "Declared by Const";
console.log(reassign);
// reassign = "Not possible to re-assign const"
// console.log(reassign);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Task 7.  Variable type console log: write a script that declares variables of different data types and logs both the value and type of each varaible to the console.
 */

let diffDataType = [
  4,
  "Manisha",
  true,
  { cousre: "JS" },
  [6, 9],
  null,
  undefined,
];
diffDataType.forEach((item) => {
  console.log(`Value is ${item} - and Data Type is ${typeof item}`);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Task 8.  create a script that demonstrate the difference in behaviou between let and const when it comes to reassign it.
 */

let usingLet = "Hey! I'm declared by Let";
console.log(usingLet);
usingLet = "Now I'm gonna re-assigned 😊";
console.log(usingLet);

const usingConst = "Hello! I'm declared by Const";
console.log(usingConst);

try {
  usingConst = "I'm not gonna re-assigned 😡";
} catch (error) {
  console.log("Error (const):", error.message);
}
