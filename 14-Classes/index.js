/*
Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of a class and log the greeting message.
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Good Morning! My name is ${this.name} and I'm ${this.age} years old.`;
  }
}

const user = new Person("Manisha", 26);
console.log(user);
console.log(user.greeting());

/*
Task 2: Add a method to the Person class that updates the age property and logs the updated age.
*/

class UpdatePersonAge {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Good Morning! My name is ${this.name} and I'm ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`The updated age is ${this.age}`);
  }
}

const newUser = new UpdatePersonAge("John Doe", 30);
console.log(newUser);
console.log(newUser.greeting()); // Good Morning! My name is John Doe and I'm 30 years old.
newUser.updateAge(36); // The updated age is 36
console.log(newUser.greeting()); // Good Morning! My name is John Doe and I'm 36 years old.

/*
Task 3: Define a class student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
*/

class Student extends Person {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
  }

  getStudentID() {
    return `My name is ${this.name} and student ID is ${this.studentID}`;
  }
}

const student1 = new Student("Jon", 25, "JS698");
console.log(student1);
console.log(student1.getStudentID()); // My name is Jon and student ID is JS698

/*
Task 4: Override the greeting method in the Student class to include the Student ID in the message. Log the overridden greeting message.
*/

class NewStudent extends Person {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
  }

  greeting() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentID}.`;
  }

  getStudentID() {
    return `My student ID is ${this.studentID}.`;
  }
}

const student2 = new NewStudent("Bob", 18, "BOB5874");
console.log(student2.greeting());

/*
Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating of the class and log the message.
*/

class GenericPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Good Morning! My name is ${this.name} and I'm ${this.age} years old.`;
  }

  static genericGreeting() {
    console.log("Welcome to the our Blogs");
  }
}

console.log(GenericPerson.genericGreeting());

/*
Task 6: Add a static property to the Student class to keep of the number of student created. Increment this property in the constructor and log the total number of students.
*/

class TotalStudents extends Person {
  static studentCount = 0;
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
    TotalStudents.studentCount += 1;
  }

  greet() {
    return `My Name is ${this.name}, I'm ${this.age} years old and my studentID is ${this.studentID}`;
  }

  static getStudentCount() {
    return `Total number of students is ${TotalStudents.studentCount}`;
  }
}

const newStudent1 = new TotalStudents("Bob", 16, "BOB5874");
const newStudent2 = new TotalStudents("John Doe", 18, "JOHN6987");
const newStudent3 = new TotalStudents("Sia", 17, "SIA6547");

console.log(TotalStudents.studentCount);

/*
Task 7: Add a getter method to the Person class to return the full name(assume a firstName and lastName property). Create an instance and log the full name using the getter.
*/

class GetPersonFullName {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  greeting() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new GetPersonFullName("Jon", "Snow", 25);
console.log(user1.fullName);

/*
Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
*/

class SetPersonName {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [fName, lname] = name.split(" ");
    this.fName = fName;
    this.lname = lname;
  }
}

// Create an instance of the Person class
const person = new Person("John", "Doe", 25);

// Log the full name using the getter
console.log(person.fullName); // John Doe

// Update the name using the setter
person.fullName = "Jane Smith";

// Log the updated full name using the getter
console.log(person.fullName); // Jane Smith

/*

Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
*/

class Account {
  // Private field
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance >= 0 ? initialBalance : 0;
  }

  // Deposit Money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount} - New Balance: ${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive");
    }
  }

  // Withdraw

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdraw ${amount} - New Balance: ${this.#balance}`);
    } else if (amount > this.#balance) {
      console.log("Insufficient Funds.");
    } else {
      console.log("Withdrawal amount must be positive");
    }
  }

  // get current balance

  getBalance() {
    return this.#balance;
  }
}

/*
Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
*/

const myAccount = new Account(1000);
console.log(myAccount.getBalance());

// lets deposite some money
myAccount.deposit(5000);


// lets withdraw some money
myAccount.withdraw(1000)


// Check balance
console.log(`Current balance: ${myAccount.getBalance()}`);
