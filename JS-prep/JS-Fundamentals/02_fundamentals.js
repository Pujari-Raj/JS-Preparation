// polyfill  for bind() method
// we know how we use bind() of js, What if the browser does not support bind method given by JS. In that case we have to write our own implementation for bind which is known as Polyfill for bind.

// Case 1: myBind method without taking parameters
let name1 = {
  firstName: "Lycan",
  lastName: "Mishra",
};

let printName = function () {
  console.log(this.firstName + " " + this.lastName);
};
Function.prototype.myBind = function (...args) {
  let obj = this; // this points to printName object
  return function () {
    obj.call(args[0]); 
// args[0] = name1 i.e. received from ...args. Refer previous chapter for how call ()works.
// obj.apply(args[0])
  };
};

let printMyName = printName.myBind(name1);
// printMyName();

