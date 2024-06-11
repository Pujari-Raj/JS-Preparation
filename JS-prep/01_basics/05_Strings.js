const name = "demo"
const repoCount = 90

// console.log(name + repoCount + " Value");

const gameName = new String('sundari-pc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.charAt(2)); // Returns the character at the specified index.
console.log(gameName.indexOf('t')); // returns the first index of element that is found

//Extracts a part of the string between the start and end indexes.
const newString = gameName.substring(0, 4)
console.log(newString);

/**
 * The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array.
 */

const slicedString = gameName.slice(-8, 4)
console.log("slicedString-",slicedString);

const newStringOne = "   sundari    "
console.log(newStringOne);

//Removes whitespace from both ends of the string.
console.log(newStringOne.trim());

const url = "https://vanakkam-food.vercel.apps/"

//Replaces the first occurrence of the search('vanakkam) value with the new('namaste') value.
console.log(url.replace('vanakkam', 'namaste'))

//Determines whether the string contains the specified substring.
console.log(url.includes('sundari'))

//Splits the string into an array of substrings based on the specified separator('-').
console.log(gameName.split('-'));

/**
 * The splice() method is used to add or remove elements from an array. It modifies the original array and returns an array of the removed elements.
 */
const colors = ["red", "green", "blue", "yellow", "orange"];
const splicedColors = colors.splice(1, 4); // Select elements from index 1 to 3 (end index not included)
console.log("splicedColors- ",splicedColors); // Output: ["green", "blue", "yellow"]
