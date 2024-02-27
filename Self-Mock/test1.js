// this keyword

const Person = {
    name: 'jay',
    age: 23,
    greet : function(){
        console.log(`name:${name} age: ${age}`)
    }
}

const dummy = {
    name: 'rajesh',
    age: 34,
}

// Person.greet();

// Person.greet.call(dummy)

//lexical scope in JS

function Bigger () {
    let name = "kumble"

    function Smaller() {
        let smallername = "Ashwin";
        console.log(smallername);

        // console.log("Bigger",name);
    }

    Smaller();
    console.log("legend-", name);
}

// const functioncalling = Bigger();
// functioncalling;

// Bigger();

// Functions & It's Types 

// 1. regular functn

function greet(name) {
    console.log(`Hello ${name}`);
}

// greet("virat");

// 2. anonymus

let numbers = [10, 20, 30, 40];

numbers.forEach(function (number) {
    // console.log(number*2);
})

// 3. arrow

const addition = (a, b) => {console.log("addition- value",a+b)};

// console.log(addition(30, 40));

// 4. IIFE 

// ( function() {
//         console.log('hi IIFE function here');
//     }
// )();


//5 HOF (Higher Order Function)

function calculator(a, b, operation) {
    return operation(a, b);
}

function multiply(x, y){
    console.log('mul-',x*y);
}
// console.log(calculator(9, 9, multiply));

//objects in js

//object lietral (It creates single instance of that object)

const Cricketer = {
    name: "virat",
    age: 35
}

// console.log(Cricketer);

// 2. Object.create (It creates a create multiple copies of objects, each with its own unique properties and methods.)

const Bowler = {
    name: "Bhuvi",
    skill: "swing",
    recorder: function (){
        console.log('bhuvi swing king');
    }
}

const creator = Object.create(Bowler);
// console.log(creator.name);

// nullishing 

let temp = null

let weather = temp ?? 0;

// console.log(weather);

// destructring

const Student = {
    age: 21,
    skill: "java",
    location: 'bengaluru'
}

const { age, skill, location } = Student;
console.log(age, "", skill, "", location);

// spread opeartor

const cricketers = ['A KUMBLE', 'SHRINATH', 'DRAVID', 'VIRAT', 'GUNDAPPA', 'PRASAD'];

const southcricketetes = {...cricketers};

// console.log(southcricketetes);

// if I want to spread only 1/2 values from array

const [ firstcricketer, secondcricketer , ,,,lastcricketer ] = cricketers;

const southbowlers = {first: firstcricketer, second: secondcricketer,last: lastcricketer} 
console.log(southbowlers);
