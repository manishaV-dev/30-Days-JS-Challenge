/*
Task 1 : Write a program to print numbers from 1 to 10 using a for loop.
 */
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/*
Task 2 : Write a program to print the multiplication table of 5 using a for loop.
 */
let table = 5;
for (i = 1; i <= 10; i++) {
  console.log(`${table} x ${i} = ${table * i}`);
}

/*
Task 3 : Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
 */
let num = 1;
let sum = 0;
while (num <= 10) {
  sum += num;
  num++;
}
console.log(`the sum of numbers from 1 to 10 : ${sum}`);



/*
Task 4 : Write a program to print numbers from 10 to 1 using a while loop.
 */
let number = 10;
while(number >=1){
    console.log(number);
    number--;
}


/*
Task 5 : Write a program to print numbers from 1 to 5 using a do...while loop.
 */
let x = 1
do {
    x++;
    console.log(x);
} while (x <= 4);


/*
Task 6 : Write a program to calculate the factorial of a number using a do...while loop.
 */

function calculateFactorial(n){
    let factorial = 1;
    let i = n;

    do {
        factorial *= i;
        i--;
    } while (i > 0);
    return factorial;

    // for(let i = n; i > 0; i--){
    //     factorial *= i
    // }
    // return factorial

}

let test = 4
let result = calculateFactorial(test)
console.log(`Factorial of ${test} is ${result} `);


/*
Task 7 : Write a program to print a pattern using nested for loop.
 */

function printPattern(rows){
    for(let i=1; i<=rows; i++){
        let pattern = "";

        for(let j=1; j<=i; j++){
            pattern += "* "
        }

        console.log(pattern);
    }
}


let rows = 5;
printPattern(rows)


/*
Task 8 : Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
 */
for(let i = 1; i <=10; i++){
    if(i === 5){
        console.log(`Loop reached at ${i}`);
        continue;
    }
    console.log(i);
}


/*
Task 9 : Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
 */
for(let j= 1; j<=10; j++){
    if(j === 7){
        console.log(`Loop reached at ${j}`);
        break
    }
    console.log(j);
}



/*
Task 10 : Write a script that prints numbers from 1 to 10 using a for loop and a while loop
 */
for(let k = 1; k <=10; k++){
    console.log(`Using for-loop : ${k}`);
}

let z = 1
while (z <= 10) {
    console.log(`Using while Loop : ${z}`);
    z++;
}


/*
Task 11 : Write a script that prints the multiplication table of 5 using a for loop.
 */
let tableOf = 5;
for (let index = 1; index <=10; index++) {
   console.log(`${table * index}`);   
}


/*
Task 12 : Write a script that calculate the sum of numbers from 1 to 10 using while loop.
 */

let sumOf = 0;
let y = 1
while(y <= 10){
    sumOf += y;
    y++
}
console.log(`the sum of numbers from 1 to 10 : ${sumOf}`);


/*
Task 13 : Write a script that calculates the factorial of a number using do...while loop
 */

function calcFactorial(nums){
    let factorOf = 1;
    let i = nums;

    do {
        factorOf *= i;
        i--;
    } while (i > 0);

    return factorOf;
}

let factorialResult = calcFactorial(10)
console.log(`Factorial of 10 is ${factorialResult}`)