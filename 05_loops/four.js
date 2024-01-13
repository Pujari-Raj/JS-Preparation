/* for..in loop is specifically designed for iterating over the properties of an object. It iterates over all enumerable properties, including properties in the object's prototype chain. It's important to note that this loop is not recommended for iterating over arrays or array-like objects.
 */
// Iterates over the enumerable properties of an object, not necessarily an array, and IT RETURNS THE KEYS OR PROPERTY NAMES OF THE OBJECT

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const language in myObject) {
  // console.log(`${language} shortcut is for ${myObject[language]}`);
}

const numarray = [1, 2, 3, 4, 5, 6, 7, 8];

// it will return index of values, bcz for...in loop is designed to iterate over the enumerable properties of an object, and it's not recommended to use it with arrays
for (const nums in numarray) {
  //   console.log(nums);
}

// example why we should not use for..in loop iterating over arrays or array-like objects.

const arraynum = [10, 20, 40];
arraynum.extraProperty = "Extra";

for (const nums in arraynum) {
  // console.log([nums]); // Output: 10, 20, 40 extraProperty
  // console.log(arraynum[nums]); // Output: 10, 20, 40 'Extra'
}

// for avoding the unexpected behavior , we can use for..of loop

const myArray = [10, 20, 40];
myArray.extraProperty = "Extra";

for (const element of myArray) {
  //   console.log(element);
  // Output:10, 20, 40
}

// Example of a for...in loop with an object
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const key in person) {
  //   console.log(`${key}: ${person[key]}`);
}

const myObject2 = {
  firstName: "John",
  lastName: "Doe",
};

// Adding a property with enumerable set to false
Object.defineProperty(myObject2, "age", {
  value: 30,
  enumerable: false,
});

// Iterating over enumerable properties using for...in
for (const key in myObject2) {
//   console.log(key); // Output: 'firstName', 'lastName'
}

// Iterating over all own properties (enumerable and non-enumerable)
for (const key in Object.getOwnPropertyNames(myObject2)) {
//   console.log(key); // Output: 'firstName', 'lastName', 'age'
}

// // Checking if a property is enumerable
console.log(myObject2.propertyIsEnumerable("firstName")); // true
console.log(myObject2.propertyIsEnumerable("age")); // false
