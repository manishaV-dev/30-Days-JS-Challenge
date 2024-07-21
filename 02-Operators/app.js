/*
Task 1 : Write a program to add two numbers and log the result to the console
 */
let x = 10;
let y = 20;
console.log(x + y);


/*
Task 2 : Write a program to substract two numbers and log the result to the console
 */
let a = 52;
let b = 25;
console.log(a - b);



/*
Task 3 : Write a program to multiply two numbers and log the result to the console
 */
let mul1 = 54;
let mul2 = 68;
console.log(mul1 * mul2);


/*
Task 4 : Write a program to divided two numbers and log the result to the console
 */

let div1 = 65;
let div2 = 13;
console.log(div1 / div2);


/*
Task 5 : Write a program to find the remainder when one number is divided by another and log the result to the console.
 */
console.log(mul1 / mul2)


/*
Task 6 : use the += operator to add a number to a variable and log the result to the console.
 */
let num = 50;
num += 54;
console.log(num);


/*
Task 7 : use the -= operator to substract a number from a variable and log the result to the console.
 */
let subs = 874;
subs -= 524;
console.log(subs);


/*
Task 8 : Write a program to compare two numbers using > and < and log the result.
 */
let firstNm = 87;
let secNum = 56;
console.log(firstNm > secNum)
console.log(firstNm < secNum);

/*
Task 9 : Write a program to compare two numbers using >= and <= and log the result.
 */

function compareNum(num1, num2){
    if(num1 >= num2){
        console.log(`${num1} is greater and equal to the ${num2}`);
    }else if(num1 <= num2){
        console.log(`${num1} is smaller and equal to the ${num2}`);
    }
}

compareNum(84, 98)


/*
Task 10 : Write a program to compare two numbers using == and === and log the result.
 */

function compareHard(num1, num2){
    if(num1 === num2){
        console.log(`${num1} and ${num2} are equal and it data type is also same`);
    } else if(num1 == num2){
         console.log(`${num1} and ${num2} are equal`);
    }else{
        console.log(`${num1} and ${num2} are Not equal`)
    }
}
compareHard(88, '88')
compareHard(88, 88)
compareHard(88, 58)

/*
Task 11 : Write a program that uses the && operator to combine two conditions and log the result.
 */

function isPos(num){
    return num > 0;
}
function isEven(num){
    return num % 2 === 0;
}

let number = 76;
let poseven = isEven(number) && isPos(number);
console.log(`${number} is positive and even ${poseven}`);

/*
Task 12 : Write a program that uses the || operator to combine two conditions and log the result.
 */

let nums = 57;
let checkNum = isPos(nums) || isEven(nums)
console.log(checkNum);

/*
Task 13 : Write a program that uses the ! operator to negate a condition and log the result.
 */

let negNum = -5;
let isNeg = !isPos(negNum)
console.log(`Is ${negNum} is positive Num : ${isPos(negNum)}`);
console.log(`Is ${negNum} is not positive Num : ${isNeg}`);



/*
Task 14 : Write a program that uses the ternary operator to check if a number is positive or negative and log the result.
 */

let checkNums = 57;
let checkTernary = isPos(checkNum) ? "Positive" : "Negative"
console.log(checkTernary);



/*
Task 15 : Write a script that perform basic arithmetic operations (addition, substraction, multiplication, division and remainder) on two numbers and log the results.
 */

let num1 = 85;
let num2 = 16;

let addition = num1 + num2;
let substraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let remainder = num1 % num2;

console.log("Addition :",  addition);
console.log("Substraction :",  substraction);
console.log("Multiplication :",  multiplication);
console.log("Division :",  division);
console.log("Remainder :",  remainder);


/*
Task 16 : Create a script that compares two numbers using different comparison operators and combines conditions using logical operators and log the result.
 */


let isEqual = (num1 === num2)
let isNotEqual = (num1 !== num2)
let isGreater = (num1 > num2)
let isSmaller = (num1 < num2)
let isGreaterEqual = (num1 >= num2)
let isSmallerEqual = (num1 <= num2)

let andOperator = (num1 > num2) && (num1 !== num2)
let orOperator = (num1 < num2) || (num1 === num2)
let notOperator = !(num1 === num2)

console.log("Is Equal : ", isEqual);
console.log("Is Not Equal : ", isNotEqual);
console.log("Is Greater : ", isGreater);
console.log("Is Smaller : ", isSmaller);
console.log("Is Greater and Equal : ", isGreaterEqual);
console.log("Is Smaller and Equal : ", isSmallerEqual);
console.log("Is And operator : ", andOperator);
console.log("Is Or Operator : ", orOperator);
console.log("Is Not Operator : ", notOperator);


/*
Task 17 : Write a script that uses the ternary operator to determine if a number is positive or negative and log the result.
 */

let numbers = -83;
let ternaryCheck = isPos(numbers) ? "Positive" : "Negative"
console.log(ternaryCheck);