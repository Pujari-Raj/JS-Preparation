// singleton object

// const tinderUser = new Object()

// non-singleton object

const tinderUser = {}

// object literals

const mySym = Symbol("key1");

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

console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());
