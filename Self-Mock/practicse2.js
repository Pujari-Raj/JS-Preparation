// hositing in js

console.log(age);
var age = 20;
console.log(age);

let power;
console.log(power);
power = "mental";
// console.log(power);

const sex = "";
// console.log(sex);
// sex ="male";
// console.log(sex);

// this kewyord

// console.log(this===window) // true

const person = {
  name: "pujari",
  greet: function () {
    console.log("namaste ", this.name + "!!!");
  },
};

// person.greet()

// call, apply, bind (we have to use 2 objects here)

const Student = {
  name: "Aakay",
  greet: function () {
    console.log(`hello ${this.name}`);
  },
};

const anotherStudent = {
  name: "Vamika",
};

// Student.greet.call(anotherStudent);

// apply

const numbers = [1, 2, 3, 4, 5];

const sum = function Calculator(a, b, c, d, e) {
  return a + b + c + b + d + e;
};

// null ,The first argument null is used to set the this value
const newnumbers = sum.apply(null, numbers);
// console.log(newnumbers);

//bind ,The bind() method creates a new function that, when called, has its this value set to a specific value, and any additional arguments provided are permanently bound to the function.

const Captain = {
  name: "Virat ",
  greet: function (message) {
    console.log(`${message}, ${this.name}!`);
  },
};

const fire = {
  name: "King",
};

const greetperson = Captain.greet.bind(fire);
// greetperson("Namaste");

// promises

function getUsersData() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        if (response.ok) {
          resolve(response.json()); // convert tp json()
        } else {
          reject(`error in`);
        }
      })
      .catch((err) => {
        console.error("err in calling");
      });
  });
}

// consume promise

getUsersData().then((usersdata) => {
    console.log(usersdata);
}).catch((err) => {
    console.error(`err in ${err}`)
})