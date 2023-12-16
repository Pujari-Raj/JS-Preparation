// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["hatim", "chotu"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6) //adds value after the last value of array
// myArr.push(7)
// myArr.pop() / delete's the last value of array

// myArr.unshift(9) //nstances adds the specified elements to the beginning of an array
// myArr.shift() //removes the first element from an array

// console.log(myArr.includes(9));// checks if given value is present
// console.log(myArr.indexOf(3));// checks the index of given value

// const newArr = myArr.join()

// console.log(myArr); // return array
// console.log( newArr); // creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.

// copywithin
const alphaarray = ["a", "b", "c", "d", "e"];

//instances shallow copies part of this array to another location in the same array and returns this array
// console.log(alphaarray.copyWithin(1,4));

//filter
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const res = words.filter((word) => word.length > 5);
/**
 * creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
 */
// console.log(res);

//forEach

const array1 = ["a", "b", "c"];

// executes a provided function once for each array element.
// array1.forEach((element) => console.log(element));

// map
const array2 = [1, 4, 9, 16];

//creates a new array populated with the results of calling a provided function on every element in the calling array.

// Pass a function to map
// const map1 = console.log(array2.map((x) => x * 2));

// slice

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
/**
 * returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items
 */

// console.log(fruits); // fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// console.log(citrus); // citrus contains ['Orange','Lemon']

// splice
// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

// console.log("slice res->",myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log("splice res->",myn2);

//shallow copy-eg

const originalObject = {
  name: "John",
  age: 30,
  hobbies: ["reading", "painting"],
};

// const copiedObject = Object.assign({}, originalObject);

const copiedObject = originalObject;
// console.log(originalObject);
// console.log(copiedObject);

originalObject.name = "Jane";

// console.log("AFTER-MODIFIYING-NAME");
// console.log(originalObject);
// console.log(copiedObject);

// deep-copy-eg

const OriginalObject = {
  name: "John",
  age: 30,
  hobbies: ["reading", "painting"],
};

const CopiedObject = JSON.parse(JSON.stringify(OriginalObject));

console.log(OriginalObject); // { name: 'John', age: 30, hobbies: ['reading', 'painting'] }
console.log(CopiedObject); // { name: 'John', age: 30, hobbies: ['reading', 'painting'] }

// Modifying a property in the original object
OriginalObject.name = "Jane";

console.log("AFTER-MODIFIYING-NAME");
console.log(OriginalObject); // { name: 'Jane', age: 30, hobbies: ['reading', 'painting'] }
console.log(CopiedObject); // { name: 'John', age: 30, hobbies: ['reading', 'painting'] }

// Modifying a nested array
OriginalObject.hobbies.push("cooking");

console.log("AFTER-MODIFIYING-NESTED-OBJECT");
console.log(OriginalObject); // { name: 'Jane', age: 30, hobbies: ['reading', 'painting', 'cooking'] }
console.log(CopiedObject); // { name: 'John', age: 30, hobbies: ['reading', 'painting'] }
