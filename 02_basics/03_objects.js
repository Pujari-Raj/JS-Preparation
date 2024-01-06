// singleton object

// singleton -> Object literal (It creates a single instance of object, Changes made to the new object with the help of the global object will affect the global object(main object) )

// const tinderUser = {};

const singletonObject = {
  property1: "value1",
  property2: "value2",
  method() {
    console.log("Singleton method called");
  },
};

//singletonObject.method(); // Output: Singleton method called

singletonObject.property1 = "madhu";
singletonObject.property2 = "raghu";

// console.log(singletonObject.property1+"  "+singletonObject.property2);

const anotherReference = {...singletonObject, property1 : "chaithra", property2:"hemanth"};

// console.log(anotherReference.property1+"  "+anotherReference.property2);

// console.log(singletonObject === anotherReference);

// non-singleton object
// non singleton -> constructor (It creates a multiple instances of object in memory, Changes made to the new object with the help of the global object will not be affect the global object(main object) )

// const tinderUser = new Object()

class NonSingletonObject {
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }

  method() {
    console.log("Non-singleton method called");
  }
}

// Usage
const obj1 = new NonSingletonObject("value1", "value2");
const obj2 = new NonSingletonObject("value3", "value4");

console.log(obj1.property1); // Output: value1
console.log(obj2.property2); // Output: value4

obj1.method(); // Output: Non-singleton method called
obj2.method(); // Output: Non-singleton method called

console.log(obj1 === obj2);

// object literals

const mySym = Symbol("key1");

//

const JsUser = {
  name: "Mike",
  "full name": "Mike Swepson",
  // "mySym": "mySymbol",
  [mySym]: "mySymbol", // we can access symbol using only "[]" bracket
  age: 18,
  location: "Jaipur",
  email: "Swepson@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email) // most used way of accessing value from object
// console.log(JsUser["email"]) // another way of accessing value from object
// console.log(JsUser["full name"])
// console.log(JsUser["mySym"])
// console.log(JsUser[mySym])  // it's only way of accessing Symbol value from object

JsUser.email = "Swepson@hind.com";
// Object.freeze(JsUser) // we're freezing, i.e after freezing we can't alter the values of objects
JsUser.email = "Swepson@roflo.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

// console.log(JsUser.greeting);
// console.log(JsUser.greetingTwo());
