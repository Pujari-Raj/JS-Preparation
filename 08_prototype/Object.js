//everything in js is OBJECT

function multiplyBy3(num) {
  return num * 3;
}

/**
 * multiplyBy3.power is just a custom property of the multiplyBy3 function, and you can use it as you would with any other property of an object.
 */
multiplyBy3.power = 2;

// console.log(multiplyBy3(4));
// console.log(multiplyBy3.power);
// it returns empty bcz , function -> object -> NA(bcz object dont have any property ahead)
// console.log(multiplyBy3.prototype);

//
function createUser(username, score) {
  this.username = username;
  this.score = score;

  // prototype is nothing but a additional property that we're giving to function createUser here
  createUser.prototype.increment = function () {
    this.score++;
  };
}
createUser.prototype.print = function () {
  console.log(`price is ${this.score}`);
};

// if we don't use new keyword here it will give error bcz,it won't work as expected because `this` inside the function won't refer to a new object, but to the global object,and it will try to set properties on that,leading to unexpected behavior or errors.

const chai = new createUser("coffee", 40);
const tea = new createUser("tea", 10);

chai.increment();
chai.print();

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes `this`, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/