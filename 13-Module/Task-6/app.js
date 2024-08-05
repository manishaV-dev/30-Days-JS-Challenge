/*
Task 6:  Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
*/

import _ from "lodash";

const lowerCaseString = "hello world";
const capitalizedString = _.capitalize(lowerCaseString);
const upperCaseString = _.upperCase(lowerCaseString);
console.log(capitalizedString);
console.log(upperCaseString);
