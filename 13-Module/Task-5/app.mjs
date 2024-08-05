import * as mathUtils from "./mathUtils.mjs";

console.log(`Value of PI : ${mathUtils.PI}`);
console.log(`Value of E : ${mathUtils.E}`);

console.log(`Addition : ${mathUtils.add(10, 35)}`);
console.log(`Substraction : ${mathUtils.subtract(58, 35)}`);
console.log(`Multiplication : ${mathUtils.multiply(10, 35)}`);

try {
    console.log(`Division : ${mathUtils.divide(20, 2)}`);
    console.log(`Division : ${mathUtils.divide(10, 0)}`);
    
} catch (error) {
    console.log(error.message);
    
}
