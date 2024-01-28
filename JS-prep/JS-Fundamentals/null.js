//

// Object Destructuring
const person = { name: "John", age: 30, city: "New York" };

// const { name, age } = person;

// console.log(name); // Output: John
// console.log(age);  // Output: 30

// nested objects
function getDetails() {
  return {
    name: "Jane Smith",
    age: 30,
    address: {
      city: "New York",
      country: "USA",
    },
  };
}

const {
  name,
  age,
  address: { city },
} = getDetails();

console.log(name); // Output: Jane Smith
console.log(age); // 30
console.log(city); // Output: New York

// arrays Destructuring

// const fruits = ['apple', 'banana', 'orange'];

// const [firstFruit, secondFruit, thirdFruit] = fruits;

// console.log(firstFruit); // Output: apple
// console.log(thirdFruit); // Output: orange
// console.log(secondFruit);

// spread operator
const numbers = [1, 2, 3];
const copy = [...numbers];
console.log(copy); // Output: [1, 2, 3]

const fruits = ['apple', 'banana'];
const moreFruits = ['orange', 'kiwi'];
const allFruits = [...fruits, ...moreFruits];
const alldetails = [...copy, ...fruits, ...moreFruits]
console.log(allFruits); // Output: ['apple', 'banana', 'orange', 'kiwi']
console.log(alldetails);


// objects

const student = { name: 'John', age: 30 };
const clone = { ...student };
console.log(clone); // Output: { name: 'John', age: 30 }

const additionalInfo = { occupation: 'Engineer', country: 'USA' };
const updatedStudent = { ...student, ...additionalInfo };
console.log(updatedStudent); // Output: { name: 'John', age: 30, occupation: 'Engineer', country: 'USA' }