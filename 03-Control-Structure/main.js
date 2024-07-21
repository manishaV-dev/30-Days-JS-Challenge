/*
Task 1 : Write a program to check if a number is positive, negative or zero and log the result to the console
 */
function isPositive(num) {
  if (num > 0) {
    console.log(`${num} is a positive Number`);
  } else if (num < 0) {
    console.log(`${num} is a negative Number`);
  } else {
    console.log(`${num}`);
  }
}

isPositive(4);
isPositive(-54);
isPositive(0);

/*
Task 2 : Write a program to check if a person is eligible to vote (age >=18) and log the result to the console
 */
function checkVotingAge(age) {
  if (age >= 18) {
    console.log("You are eligible to vote 😁");
  } else {
    console.log("You are not eligible to vote 😐");
  }
}

/*
Task 3 : Write a program to find the largest of three number using nested if-else statements and log the result to the console
 */

function findLargest(num1, num2, num3){
    let largest;

    if(num1 >= num2){
        if(num1 >= num3){
            largest = num1
        }else{
            largest = num3
        }
    }else{
        if(num2 >= num3){
            largest = num2
        }else{
            largest = num3
        }
    }

    return largest;
}


let numbers1 = [10, 20, 30];
let numbers2 = [50, 15, 25];
let numbers3 = [5, 100, 50];

console.log(`The largest of [${numbers1}] is: ${findLargest(...numbers1)}`);
console.log(`The largest of [${numbers2}] is: ${findLargest(...numbers2)}`);
console.log(`The largest of [${numbers3}] is: ${findLargest(...numbers3)}`);





/*
Task 4 : Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console
 */

function checkDay(dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 1:
      dayName = "Monday";
      break;

    case 2:
      dayName = "Tuesday";
      break;

    case 3:
      dayName = "Wednesday";
      break;

    case 4:
      dayName = "Thursday";
      break;

    case 5:
      dayName = "Friday";
      break;

    case 6:
      dayName = "Saturday";
      break;

    case 7:
      dayName = "Sunday";
      break;

    default:
      dayName = "Invalid Day Name";
      break;
  }

  return dayName;
}
for (let i = 1; i < 8; i++) {
  console.log(`Day ${i}: ${checkDay(i)}`);
}

let dayNums = 4;
console.log(checkDay(dayNums));

/*
Task 5 : Write a program to uses a switch case to assign a grade ("A", "B", "C", "D") based on a score  and log the grade to the console
 */

function assignGrade(score){
    let grade;
    switch(true){
        case(score >= 90 && score <= 100):
        grade = "A"
        break;

        case(score >= 75 && score < 90):
        grade = "B"
        break;

        case(score >=55 && score < 75 ):
        grade = "C"
        break;

        case(score >=40 && score < 55):
        grade = "D"
        break;

        default:
        grade = "F"
        break;
    }

    return grade
}

let score = 84;
console.log(assignGrade(score));


let scores = [57, 85, 98, 62, 34, 67]
scores.forEach((score) => {
    console.log(`Score : ${score} - Grade ${assignGrade(score)}`);
})

/*
Task 6 : Write a program that uses the ternary operator to check if a number is even or odd  and log the result to the console
 */

function checkEvenOdd(num){
   return num % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(10));





/*
Task 7 : Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console
 */


function checkLeapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){

        return true
        // return (`${year} is a leap year`);
    }else{
        return false
        // return (`${year} is not a leap year`);
    } 
}

// console.log(checkLeapYear(2023));

let years = [1992, 2024, 2045, 2000, 1980]
years.forEach((year) => {
    console.log(`${year} is a leap year ${checkLeapYear(year)}`);
})