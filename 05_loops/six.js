//Use forEach when you want to perform a side effect for each element in the array, such as logging the elements or modifying them in place.

//The forEach method is used to iterate over each element in an array and perform a specific action on each element. It does not create a new array but instead allows you to execute a function for each element in the original array.

const nammaheros = ["virat", "rahul", "vvs", "kumble"];

// we can do this, iterate over array and console values
// let values = nammaheros.forEach((item) => console.log(item));

/* for..each loop doesn't return value, The purpose of forEach is to perform an operation on each element of the array, rather than producing a new array or a specific result.
 */
values = nammaheros.forEach((item) => {
  // console.log(item)
  return item;
});

// filter, Use filter when you want to create a new array that contains only the elements that satisfy a certain condition.
// RETURNS: AN ARRAY CONTAINING ELEMENTS THAT SATISFY A GIVEN CONDITION

/**
 * The filter method creates a new array with all the elements that pass a specific condition. It takes a callback function that is executed for each element, and if the callback returns true, the element is included in the new array; otherwise, it is excluded.
 */

/**
 * The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
 */

const batters = ["18", "10", "12", "8"];

// implicitly returning value
// let Batsman = batters.filter((bat) => bat>10);

// explicitly returning value
Batsman = batters.filter((bat) => {
  return bat > 10;
});

// console.log(Batsman);

//
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// we cannot directly console values using console.log,The filter method expects a callback function that returns a boolean value.
// let filterbooks = books.filter((kitaab) => kitaab.genre ==="Science")

// filterbooks = books.filter((kitaab) => console.log(kitaab.genre ==="Science"))
// console.log(filterbooks);

filterbooks = books.filter((kitaab) => {
    return kitaab.publish>=1997
})

console.log(filterbooks);