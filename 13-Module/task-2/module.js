
/*
Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
*/

const person = {
    name: "Manisha",
    job: "Development",
    greetings: function () {
      console.log(`Hello ${this.name}! How are you?`);
    },
  };
  
  
  module.exports =  {person}