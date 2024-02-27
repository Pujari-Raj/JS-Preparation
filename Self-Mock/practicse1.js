// diff let, var , const

var number = 25;

console.log(25);

function test() {
  let num1 = 30;

  console.log(num1);
}

test();
// console.log(num1);

function test1() {
  const name = "pujari";

  console.log(name);
}

test1();

// functions

// regular fntn

function greet() {
  console.log("hello namaste!!");
}

// greet();

// anonymus fucntn

const student = function () {
  let rollno = 24;
  console.log("stand up", rollno);
};

student();

// arrow functn

const namaste = () => {
  const name = "pujari";
  console.log("namaste", name);
};

// namaste();

// IIFE

// (
//     function (){
//         console.log("hello");
//     }
// )();

// higher order funtion

function Calculator(num1, num2, operation) {
  return operation(num1, num2);
}

function add(x, y) {
  console.log(x + y);
}

// Calculator(20, 40, add);

// objects in js

const teacher = {
  name: "krupa",
  teacherage: 40,
  subject: "HIstory",
};

// console.log(teacher)

function bowler(name, skill) {
  this.name = name;
  this.skill = skill;
}

const swingking = new bowler("bhuvi", "swing");
// console.log(swingking);

// lexical scope

function outerfunction() {
  let outervaraible = "I'm outer";

  function innerfunction() {
    let innervariable = "I'm inner";

    console.log(innervariable);
    console.log(outervaraible);
  }

  return innerfunction();
}

outerfunction();
// console.log(outervaraible);

// clousres in js

function bahar() {
  let baharvariable = "I'm bahar";

  function andhar() {
    let andharvariable = "I'm andhar";
    console.log(andharvariable);
    console.log(baharvariable);
  }
   return andhar;
}

const closure = bahar()
closure();