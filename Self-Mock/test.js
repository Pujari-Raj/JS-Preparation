// // diff betwn let, var, const

// var number = 19;

// console.log(number);

// let data = "rajesh";

// // console.log(data);

// functions in js

// function test () {
//     let x = 20;
//     console.log(x);
// }

// // test();

// function raw () {
//     const y = 30;
//     if (true) {
//         console.log(y);
//         // y = 40; // throw's error
//         console.log(y);
//     }
//     console.log("outside -functn",y);
// }

// raw()

// hoisting in js

// console.log(num); // unddefined
var num = 20;

let num1;
// console.log(num1); // unddefined
num1 = 35;
// console.log(num1); // 35

const name= "jay";
// console.log(name);
// // name ;
// console.log(name);


// closures

function outer() {
    let age = 20

    // function
    function inner() {
        let salary = 40000
        console.log(salary);

        // access value of age
        console.log('age ->',age);
    }

    return inner();
}

// outer();

// this keyword

// Example 1: Using 'this' in a regular function
function greet() {
    console.log('Hello, ' + this.name);
}

const person = {
    name: 'John',
    sayHello: greet
};

// when we call sayHello() `this` refers to person object, so it can access `name` property 
// person.sayHello(); // Output: Hello, John

