import { add, subtract, multiply, divide } from "./utilities.mjs";

console.log(add(10, 25));
console.log(subtract(20, 10));
console.log(multiply(15, 5));

try {
  console.log(divide(10, 5));
  console.log(divide(10, 0));
} catch (error) {
  console.log(error.message);
}
