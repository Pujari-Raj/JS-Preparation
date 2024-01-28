// creating custom property for strings to get truelength

let name = "raj    ";

String.prototype.truelength = function () {
    console.log(`${this}`); // it gives reference to instance of String 
    console.log(`True length is: ${this.trim().length}`);
}

name.truelength();
"uganda".truelength();

let indianHeroes = ["hanuman", "ram"]

let heroPower = {
    hanuman: "strength",
    ram: "intelligence",

    getRamsPower: function(){
        console.log(`Ram's power is ${this.ram}`);
    }
}

// heroPower.getRamsPower();

// let's say if we want to create custom property for all (array, string, object) to calculate length , then 

// creating custom property for object

Object.prototype.callHero = function () {
    // console.log(`callHero is present in all objects`);
}

heroPower.callHero();

// creating custom property for arrays

Array.prototype.callHero = function () {
    // console.log(`callHero is present in all Arrays`);
}

indianHeroes.callHero();

// inheritance/ prototypel-inheritance

const Student = {
    name: "test",
    pass: "test@135"
}

const Teacher = {
    isTeaching : true,
}

const TASupport = {
    makeHW : 'Js hwork',
    fullTime : true,
    __proto__ : Teacher,
}

// console.log(TASupport.__proto__);
// console.log(Teacher.__proto__ = Student);

// modern syntax
Object.setPrototypeOf(TASupport, Student)
// console.log(TASupport.__proto__);