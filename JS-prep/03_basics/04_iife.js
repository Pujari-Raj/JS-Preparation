//

//when we use more than one iife , you have to add ";" to end the function otherwise it will give error.

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("swpeons");

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("swpeons");

(
  // how does it prevents  global pollution,

  // function () {
  //   var message = "Hello, IIFE!";
  //   console.log(message);
  // }
  () => {
    var message = "Hello, IIFE!";
    console.log(message)
  }

)();

// console.log(message); // ReferenceError: message is not defined

/**
 * In this example, the message variable is defined inside the IIFE and is only accessible within the IIFE's scope. When trying to access message outside the IIFE, a ReferenceError is thrown because the variable is not defined in the global scope.
 */
