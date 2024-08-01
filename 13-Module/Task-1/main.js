/*
Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
*/

const { add } = require("./mathOperations");
// import { add } from './mathOperations';

const result = add(6, 9);
console.log(result);
