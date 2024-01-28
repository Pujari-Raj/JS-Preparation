// Immutable object (string)
let name = "John";
let newName = name.toUpperCase(); // Returns a new string
// console.log(name); // Output: 'John' (original string is unchanged)
// console.log(newName); // Output: 'JOHN'

function exampleConst() {
  const z = 10;
  if (true) {
    // z = 20; // ut will throw error
    console.log(z);
  }
  console.log(z); // Output: 10 (z is not affected by the inner block)
}

// exampleConst();

//Regular Functions

function greet(name) {
  console.log("hello", name);
}

// greet("ram");

//anonymous function

function fetchData(url, callback) {
  //Simulating an asynchronous operation
  setTimeout(() => {
    let data = "Data fetched successfully";
    callback(data);
  }, 1000);
}

// calling fetchData function
// fetchData("https://example.com/api/data", function (resp) {
//   // console.log(resp);
// });

//Arrow function
const add = (num1, num2) => {
  return num1 + num2;
};

// console.log(add(30, 45));

// IIFE

// (function () {
//   console.log("IIFE called");
// })();

// IIFE with Parameters
(function (x, y) {
  // console.log("sum->",x+y);
})(20, 30);

// HOF

function calc(num1, num2, operation) {
  return operation(num1, num2);
}

function sub(x, y) {
  console.log("subtraction->", x - y);
}

// calc(70, 30, sub)

// async-sync func

// sync

function syncFunction() {
  console.log("Operation 1");
  console.log("Operation 2");
  console.log("Operation 3");
}

// syncFunction();
// console.log('After function');

// async

function asyncFunction() {
  console.log("Operation 1");
  setTimeout(function () {
    console.log("Operation 2");
  }, 2000);
  console.log("Operation 3");
}

// asyncFunction();
// console.log('After function');

//Promises
function makeHttpRequest(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject(new Error(`HTTP error: ${response.status}`));
        }
      })
      .catch((error) => reject(error));
  });
}

// makeHttpRequest("https://dummyjson.com/users/1")
//   .then((data) => {
//     console.log("Data received:", data);
//   })
//   .catch((error) => {
//     console.error("Error occurred:", error);
//   });

// basic-example
const myFirstPromise = new Promise((resolve, reject) => {
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML API.
  const number = Math.random() < 0.5;

  if (number) {
    setTimeout(() => {
      resolve("Success!", number); // Yay! Everything went well!
    }, 1500);
  } else {
    reject("rejected!!");
  }
});

myFirstPromise
  .then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    // console.log(`Yay! ${successMessage}`);
  })
  .catch((errmsg) => {
    // console.log(`oh no ${errmsg}`);
  });

const fetchuserData = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation (e.g., API call or database query)
  setTimeout(() => {
    const data = { name: "John", age: 25 };
    if (Object.keys(data).length > 0) {
      resolve(data);
    } else {
      reject("no data found!");
    }
    // If there's an error, reject the promise with an error message
    // reject('Error fetching data');
  }, 2000);
});

// Consuming the promise
fetchuserData
  .then((data) => {
    // console.log("Data:", data);
  })
  .catch((error) => {
    // console.error("Error:", error);
  });

// closure

function outerFunction() {
  // Outer function's variable
  let outerVariable = "I am outer!";

  function innerFunction() {
    // Inner function has access to the outer function's variable
    console.log(outerVariable);
  }

  // Returning the inner function
  return innerFunction;
}

// Call the outer function to get the inner function

let closureExample = outerFunction();

// Call the inner function, which still has access to outerVariable
// console.log(closureExample()); // Output: I am outer!


// diff between "explicitly" and "implicitly" called

//explicitly
// Explicit function call
function multiply(a, b) {
  return a * b;
}

let result = multiply(3, 4); // Explicitly calling the function with arguments
console.log(result); // Output: 12

// implicitly (it does not return anything)
// Implicit function call
function greet(name) {
 return console.log(`Hello, ${name}!`);
}

let greetingFunction = greet; // Assigning the function to another variable

// Implicitly calling the function through the variable
greetingFunction("Alice"); // Output: Hello, Alice!

//

var fname = "pujatri";

function develoepr(dsgtn) {
  const role = dsgtn;
  return role
}

let pstn = develoepr("fend");
console.log(pstn); 