const name = "demo"
const repoCount = 90

// console.log(name + repoCount + " Value");

const gameName = new String('sundari-pc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

/**
 * The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array.
 */

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   sundari    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vanakkam-food.vercel.app/"

console.log(url.replace('vanakkam', 'namaste'))

console.log(url.includes('sundari'))

console.log(gameName.split('-'));

/**
 * The splice() method is used to add or remove elements from an array. It modifies the original array and returns an array of the removed elements.
 */
const colors = ["red", "green", "blue", "yellow", "orange"];
const selectedColors = colors.slice(1, 4); // Select elements from index 1 to 3 (end index not included)
console.log(selectedColors); // Output: ["green", "blue", "yellow"]
