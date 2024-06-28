// Reverse a string 

function reverseString(str){
    return str.split('').reverse('').join('');
}

// console.log(reverseString('zoomies'));

// check whether string is palindrome

function isstringPalindrome(str){
    const reversedString = str.split('').reverse('').join('')
    return str === reversedString;
}

// console.log(isstringPalindrome("racecar"));

// check whether number is palindrome

function isNumberPalindrome(num) {
    // convert number into string
    const str = num.toString();

    const reversedString = str.split('').reverse('').join('');

    return str === reversedString;
}

// console.log(isNumberPalindrome(121));

/**
 * Write a function that prints the nums from 1 to 100. But for multiples of 3 print "Fizz" instead of the number and for the multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5 print "FizzBuzz".
 */

function FizzBuzz() {
    for (let i = 0; i <=100; i++) {
        if (i%3 === 0) {
            console.log("Fizz")
        }    
        else if (i%5 === 0) {
            console.log("Buzz");
        }
        else if (i%3===0 && i%5===0) {
            console.log("FizzBuzz");
        }
        else{
            console.log(i);
        }
    }
}

// FizzBuzz();

//Find the maximum element in a given array.

function findMaxNumber(arr){
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }   
    }

    return max;
}

// console.log(findMaxNumber([1, 33, 17, 92, 50]));

// Count the number of vowels (a, e, i, o, u) in a given string.

function isVowel(str) {
    const vowels = "aeiouAEIOU";

    let count = 0;

    for(let char of str){
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(isVowel("hello"));