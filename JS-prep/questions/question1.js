// reverse a string

// functionm,
// function takes a string as input, splits it into an array of characters using split(''), reverses the order of the characters using reverse(), and then joins them back into a string using join('').

function reverseString(string) {
  return string.split("").reverse().join("");
}

const originalString = "pot";

const reversedString = reverseString(originalString);

// console.log(reversedString);

// swapping value without 3rd variable in js

let a = 20;
let b = 30;

console.log(`Before swapping: a = ${a}, b = ${b}`);

a = a + b;
b = a - b;
a = a - b;

console.log(`After swapping: a = ${a}, b = ${b}`);

// plaindrome
// (A palindrome number is a number that remains the same when its digits are reversed. In other words, it reads the same backward as forward.)

/**
 * 
 *
In both implementations, we define a function isPalindrome that takes a number asinput and returns true if the number is a palindrome, and false otherwise.
Within the function, we initialize reversedNumber to 0 and store the original number in a separate variable originalNumber.
We then iterate through the digits of the number, extract each digit using modulo (%) operator, and construct the reversed number by multiplying by 10 and adding the digit.
After iterating through all the digits, we compare the original number with the reversed number. If they are equal, the number is a palindrome; otherwise, it's not.
 */
function isPalindrome(number) {
  const originalNumber = number;
  let reversednumber = 0;

  while (number > 0) {
    const digit = number % 10;
    reversednumber = reversednumber * 10 + digit;
    number = Math.floor(number / 10);
  }
  return originalNumber === reversednumber;
}

// function isPalindrome(number) {
//   const str = number.toString();
//   const reversedStr = str.split("").reverse().join("");
//   return str === reversedStr;
// }

// // Example usage:
// console.log(isPalindrome(12321)); // Output: true
// console.log(isPalindrome(12345)); // Output: false

// slice, splice

const fruits = ['apple', 'banana', 'cherry', 'date'];

// Extract elements from index 1 to 3 (end index not included)
const selectedFruits = fruits.slice(1, 3);

console.log(selectedFruits); // Output: ['banana', 'cherry']
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date']

// splice
const numbers = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 2 and adds '6' and '7' at that position
const removed = numbers.splice(2, 2, 6, 7);

console.log(numbers); // Output: [1, 2, 6, 7, 5]
console.log(removed); // Output: [3, 4]
