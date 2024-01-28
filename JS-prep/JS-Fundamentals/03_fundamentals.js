// function currying in js

//Currying is a JS concept which transforms a function with multiple arguments into a nested series of functions, each taking a single argument.
//It helps us creating higher order functions. It is useful in building modular and reusable code

//Function currying using JS bind method -

let multiply = function (x, y) {
  console.log(x * y);
};

let TwosMultiple = multiply.bind(this, 2);
TwosMultiple(3);

let FoursMultiple = multiply.bind(this, 4);
FoursMultiple(3);

// Function currying using Closure -

let multiplyByclosure = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let FivesMultiple = multiplyByclosure(5);
FivesMultiple(3);

let ThreesMultiple = multiplyByclosure(3);
ThreesMultiple(3);
