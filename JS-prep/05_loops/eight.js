/**
 * To summarize, filter and map methods return new arrays, while reduce returns a single value. for loops do not have a specific return type and can be used to perform various operations depending on the code within the loop.
 **/

// map, Use map when you want to create a new array with modified versions of the original elements.
//RETURNS: AN ARRAY OF THE SAME LENGTH AS THE ORIGINAL, WHERE EACH ELEMENT IS THE RESULT OF APPLYING A FUNCTION TO THE CORRESPONDING ELEMENT OF THE ORIGINAL ARRAY.

/**
 * The map method creates a new array by applying a transformation to each element in the original array. It takes a callback function that is executed for each element, and the return value of the callback is added to the new array.
 */
const numbers = ["10", "20", "30", "40"];

// we can chain map, filter
const nums = numbers
  .map((num) => num * 5)
  .map((num) => num - 10)
  .filter((num) => num > 120);

// console.log(nums);

// reduce, Use reduce when you want to perform calculations on an array and obtain a single result, such as finding the sum or the maximum value.
// Returns: A single value (accumulator) obtained by applying a function to each element of the array, reducing it to a single value.

/**
 * The reduce method is used to reduce an array to a single value by iterating over each element and accumulating a result. It takes a callback function and an initial value. The callback function receives an accumulator and the current element, and it returns the updated accumulator value.
 */

const myNums = [10, 20, 30];

/**
 * const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
 */

// doing above code in bit simpler manner
let total = myNums.reduce(function (acc, currentvalue) {
  //   console.log(`acc: ${acc} and currval: ${currentvalue}`);
  return acc + currentvalue;
}, 0);

// console.log(total);

total = myNums.reduce((acc, currentvalue) => acc + currentvalue, 0);

//console.log(total);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "react-native course",
    price: 999,
  },
  {
    itemName: "ux course",
    price: 8999,
  },
  {
    itemName: "ui course",
    price: 2999,
  },
];

const cartValue = shoppingCart.reduce(
  (acc, item) => (acc = acc + item.price),
  0
);
console.log(cartValue);
