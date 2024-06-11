// alert(9+0); // if we try to run this using nodejs it throws error, it runs only browser (bcz browser works as the whole document)

// Primitive

let noValue = null; // null datatype
let swing; // undefined datatype
let isLoggedIn = true | false; // boolean datatype
let id = 20; // Number datatype
BigInt = 1234567890123456789012345678901234567890; // bigInt datatype
let name = "lorem"; // String datattype

// This is new datatype in JS(ES6-JS)
const symbol = Symbol("ROFLO");
console.log(symbol);

/**
 * Symbol datatype is a primitive datatype introduced in ECMAScript 2015 (ES6). It represents a unique identifier that is immutable and can be used as a property key in objects. Symbols are often used to define object properties that should be completely distinct from other properties, even if they have the same name.
 */

// Symbol datatype example

const uniqueId  = Symbol('id');

const user = {
  name: "John Doe",
  [uniqueId]: 104
}

console.log(user[uniqueId]);

//Demonstrating uniqueness, Even we have created with same description, they are !equal

const newUserId = Symbol('id');
// console.log(uniqueId === newUserId);

let userObject = {
  Name: "John Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Hilltown",
    zipCode: "12345",
  },
  sayHello: function () {
    console.log("Hello !");
    return "namaste";
  },
};

// console.log(userObject.Name);
// console.log(userObject.sayHello());
// userObject.sayHello();

/**
 * However, the sayHello method does not have an explicit return statement, so it implicitly returns undefined.
 As a result, the second console.log prints "Hello !" to the console, and then prints undefined because the method call itself returns undefined.
 */
