const userEmail ="demo@gmail.com"

// if (userEmail) {
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){} (it is known as empty function)

// checking whether objects & arrays is empty

const myObj ={}

// if (Object.keys(myObj).length === 0) {
//     console.log("Object is empty");
// }

const myArr = [];

// if (myArr.length === 0) {
//     console.log("array is empty");
// }

// // for checking if its not empty
// if (myArr.length !== 0) {
//     console.log("array is !empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1= 20;
val1 = 25 ?? 35; 
val1 = null ?? 35
val1 = undefined ?? 35
val1 = null ?? 55 ?? 35

console.log(val1);

// Ternary Operator

// condition ? true : false

let batprice = 25000;

batprice <=15000 ? console.log("batprice is less than 15k") : console.log("batprice is more than 20k")
