// console.log(this); // it gives blank context becaus we're running inside a JS-Runtime enviornment

const user = {
  username: "swepson",
  price: 199,

  welcomeMessage: function () {
    // console.log(`${this.username} , welcome to website`);
    console.log(this); // this refers to current context
  },
};

// user.welcomeMessage();
// user.username = "sam" // changing the value
// user.welcomeMessage()

// console.log(this);

/**
 * Reason we can't access username using this
 *  chai() is a standalone function and not a method of an object, this does not refer to any specific object. Therefore, this.username will not give you the value of the username variable defined within the chai() function.
 * If you want to access the username variable within the chai() function,
 */

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// console.log(username); //you can access username simply refer to it directly
// }

// chai()

/**
 * Reason we can't access username using this
 * if you want to access the username variable using this, you would need to define chai() as a method of an object and assign the username variable as a property of that object.
 * You can acces using this code snippet
 * const obj = {
 *  username: "hitesh",
 *  chai: function() {
 *      console.log(this.username);
 *  }
 *  };
 *
 *    obj.chai();
 */

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// arrow-function

/**
 * The arrow function's this refers to the this value of the surrounding context where it was defined, which is typically the global object (window in a browser or global in Node.js). However, the global object does not have a property named username, leading to undefined.
 */
const chai = () => {
  //   let username = "hitesh";
  //   console.log(this.username);
};

chai();

// if you add curly braces you have always return some value
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// if you don't add curly braces you don't have to return some value
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// for returning a object without burly you have to use brackets
const addTwo = (num1, num2) => ({ username: "hitesh" });

// console.log(addTwo());

function outerFunction() {
  const outerVariable = "I am in the outer function";

  function innerFunction() {
    const innerVariable = "I am in the inner function";
    console.log(outerVariable); // Accessing outerVariable from the outer scope
    console.log(innerVariable); // Accessing innerVariable from the inner scope
  }

  innerFunction(); // Calling the inner function
}

outerFunction(); // Calling the outer function
