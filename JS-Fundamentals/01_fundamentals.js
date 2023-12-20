// call,apply & bind method

/**
 * Syntax –
    <Lender>.<FunctionName>.call(<Borrower>,<function argument(s) separated by comma>)
    Lender is the object which lends the function. FunctionName is the name of the function to be borrowed. Borrower is the object/instance which borrows the function and It points to the current object, more like this keyword, function argument(s) are the arguments given to a function call and itsoptional.
 */

let name = {
  firstName: "Lycan",
  lastName: "Mishra",
  getFullName: function () {
    console.log(this.firstName + " " + this.lastName); // this points to current object name
  },
};

// name.getFullName(); // Lycan Mishra

let name2 = {
  firstName: "King",
  lastName: "Kohli",
  getFullName: function () {
    console.log(this.firstName + " " + this.lastName); // this points to current object name
  },
};

// name2.getFullName(); // King Kohli

/**
 * In name2 Object, instead of creating 'getFullName' method, we can borrow it from name object. That’s
where call, apply and bind methods come in. Using them, we can make function borrowing.
 */

// borrowing function using .call() method

//Case 1 - Borrowing function from an object
let heroname = {
  firstName: "Lycan",
  lastName: "Mishra",
  getFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

// heroname.getFullName();

let cricketname = {
  firstName: "Sachin",
  lastName: "TendulKar",
};

// heroname.getFullName.call(cricketname); // Sachin TendulKar

//Case 2 - Borrowing function from global scope

function getfullname() {
  console.log(this.firstName + " " + this.lastName);
}

let casename1 = {
  firstName: "Lycan",
  lastName: "Mishra",
};

let casename2 = {
  firstName: "Sachin",
  lastName: "TendulKar",
};

// getfullname.call(casename1);
// getfullname.call(casename2);

// case3- borrowing function from global scope + function taking arguments

let name1 = {
  firstName: "King",
  lastName: "Kohli",
};

function getFullName(homeTown, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " is from " +
      homeTown +
      " from state " +
      state
  );
}

// console.log("Invoking getFullName using call method");
getFullName.call(name1, "Punjab", "Delhi");

// apply  bind method

/**
 * Apply method is exactly similar to call method. The only difference is while passing arguments apply method takes them in an array format whereas call method takes them individually separated by comma.
 */

// getFullName.call(name1, "Sambalpur", "odisha");

// invoking getfullname function using apply method
// console.log("Invoking getFullName using apply method");
getFullName.apply(name1, ["Sambalpur", "odisha"]);

// bind method

/**
 * bind method is exactly similar to call method. The only difference is bind does not invoke the function directly but it returns a function which can be invoked separately, whereas call invokes the function directly. bind keeps a copy of a function which can be invoked later
 */

// getFullName.call(name1, "Sambalpur", "odisha"); // direct function invocation

// console.log("Invoking getFullName using bind method");
//bind returns a function
let printMyName = getFullName.bind(name1, "Sambalpur", "odisha");
printMyName(); // (returned function is invoked i.e. indirect function invocation)
