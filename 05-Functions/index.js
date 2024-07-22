/*
Task 1 : Write a function to check if a number is even or odd and log the result to the console.
 */
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even number`);
  } else {
    console.log(`${num} is odd number`);
  }
}

checkEvenOdd(10);

/*
Task 2 : Write a function to calculate the square of a number and log the result to the console.
 */
function calcSquare(n) {
  return n * n;
}
console.log(calcSquare(25));

/*
Task 3 : Write a function expression to find the maximum of two numbers and log the result to the console.
 */
const findMaximum = function (num1, num2) {
  let maximum;
  if (num1 >= num2) {
    maximum = num1;
  } else {
    maximum = num2;
  }

  return maximum;
};

let numArr = [40, 80];
console.log(`The maximum of [${numArr}] is : ${findMaximum(...numArr)}`);

// OR

const findMax = function (n1, n2) {
  return n1 > n2 ? n1 : n2;
};
let x = 20;
let y = 10;

let maxNumber = findMax(x, y);
console.log(`The maximum of ${x} and ${y} is : ${maxNumber}`);

/*
Task 4 : Write a function expression to concatenate two string and log the result to the console.
 */

const concateStr = function (str1, str2) {
  return str1 + " " + str2;
};

let text1 = "Hello";
let text2 = "World!";

let concateResult = concateStr(text1, text2);
console.log(concateResult);

/*
Task 5 : Write an arrow function to calculate the sum of two numbers and log the result to the console.
 */
const sumOfTwoNum = (num1, num2) => {
  return num1 + num2;
};
console.log(sumOfTwoNum(54, 68));

/*
Task 6 : Write an arrow function to check if a string contains a specific character and return a boolean value.
 */
const checkChar = (str, char) => str.includes(char);

let email = "manisha@gmail.com";
let char = "@";

let checkStr = checkChar(email, char);
console.log(
  `Does the string "${email}" contain the character "${char}"? ${checkStr}`
);

////////////////////////////////////// OR ////////////////////////////////////////////////////


let specialChar = `@!#$%*&`;
const checkSpecialChar = (str) => {
  for (const char of specialChar) {
    if (str.includes(char)) {
      return true;
    }
  }
  return false;
};

let fullEmail = "manisha#gmail";
let findChar = checkSpecialChar(fullEmail);
console.log(`${fullEmail} contain the special character ${char} : ${findChar}`);

/*
Task 7 : Write a function that takes two parameter and returns their product. provide a default value for the second parameter.
 */
const product = (num1, num2 = 3) => {
    return num1 * num2
}
console.log(product(5));


/*
Task 8 : Write a function that takes a person's name and age and return a greeting message. Provide a default value for the age.
 */
const greetings = function(name, age = 20) {
        let greet = `Hello ${name}, ${age}, Code Bless You!`
        return greet;
}

console.log(greetings('Manisha'));



/*
Task 9 : Write a higher-order function that takes a function and a number, and calls the function that many times.
 */
const callMultipleTime = (fn, time) => {
    for(let i = 0; i < time; i++){
        fn()
    }
}

function sayHello(){
    console.log("Hello");
}

callMultipleTime(sayHello, 4)

/*
Task 10 : Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
 */
const compose  = (fn1, fn2, value) => {
    return fn2(fn1(value))
}

const double = (n) => {
    return n * 2;
}

const square = (n) => {
    return n * n;
}

const result = compose(double, square, 6)
console.log(result);

