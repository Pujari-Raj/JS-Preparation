// There are 2 types of datatype in JS (Primitive, Non-Primitive)

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 500
const scoreValue = 500.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('423')
const anotherId = Symbol('423')

// console.log(id === anotherId);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["pokemon", "hatim", "antman"];
let myObj = {
    name: "remo",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

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