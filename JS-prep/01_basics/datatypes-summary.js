// There are 2 types of datatype in JS (Primitive, Non-Primitive)

//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 500;
const scoreValue = 500.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id = Symbol("423");
const anotherId = Symbol("423");

// console.log(id === anotherId);

// Reference (**Non primitive**)

// Array, Objects, Functions

const heros = ["pokemon", "hatim", "antman"];

let myObj = {
  name: "remo",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/**
 * Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function | Object Function
       Object  =>  object
 */

// Symbol() === Symbol(); //false
// console.log("Is both symbols are equal? ", Symbol() === Symbol());

// Symbol("JavaScript") === Symbol("Programming");
// console.log(
//   "Is both symbols with description are equal? ",
//   Symbol("JavaScript") === Symbol("Programming")
// );

// let mySymbol1 = Symbol("symDescription");
// let mySymbol2 = Symbol("symDescription");
// console.log("Two symbols with the same description equal? :",mySymbol1 === mySymbol2);

// console.log(Symbol()); //Symbol()
// console.log(Symbol("JavaScript")); //Symbol(JavaScript)

// console.log("type of symbol:", typeof Symbol()); //symbol
// console.log("type of symbol with description:", typeof mySymbol1); //symbol
// console.log("Symbols are of typeof symbol:", typeof Symbol() === "symbol"); //true
// console.log("A symbol is never equal to anything else except itself.",mySymbol1 === mySymbol1);

// let mySym = new Symbol(); //TypeError throw when using new operator

// Stack (Primitive) The datatypes that is Primitive uses Stack Memory
// Heap (Non-Primitive) The datatypes that is Non-Primitive uses Heap Memory

let username = "demouser";

let newusername = username;
newusername = "nayahai";

/**
 * When we pass a value to variable that is primtive daatatype it gives a
 * copy of it and not original Value
 */
console.log(username);
console.log(newusername);

let userdetails = {
  email: userEmail,
  dob: "12/07/78",
};

let newuserdetails = userdetails;

/**
 * When we pass a value to variable that is non-primtive daatatype it gives a
 * reference of it & not the copy of it.
 */

newuserdetails.email = "newuser@co.in";

console.log(userdetails.email);
console.log(userdetails.email);

/***
 * For better visual explanation have a look at img (stack-heap.png)
 */
