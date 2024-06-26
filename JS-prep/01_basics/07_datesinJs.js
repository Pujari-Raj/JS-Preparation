// Dates

// to work with date related things we need to use Date Object

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
console.log("typeof-",typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 10, 23, 5, 3)
// let myCreatedDate = new Date("2023-10-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// It will give currentDate
let myTimeStamp = Date.now()

// console.log(myTimeStamp); // gives time in milliseconds
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //will display the current timestamp in seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day: "numeric",
    era: "long",
    // localeMatcher: "best fit",
    timeZoneName: "longGeneric"
}));

// console.log(newDate);