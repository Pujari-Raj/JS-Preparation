// Object literal
// const person = {
//   name: "John",
//   age: 25,
// };

// console.log(person);

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person("John", 25);
console.log(person);

// Object.create()
const personPrototype = {
  greet() {
    console.log("Hello!");
  },
};
// const person = Object.create(personPrototype);
// console.log(person.greet());

// ES6 class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person = new Person("John", 25);
console.log(person);

