/*The forEach loop is a more concise and readable way to iterate over elements in an array. It is a method available on arrays and takes a callback function as an argument.
 */
//IT DOESN'T RETURN ANYTHING; INSTEAD, IT TAKES A CALLBACK FUNCTION AS AN ARGUMENT AND APPLIES THAT FUNCTION TO EACH ELEMENT OF THE ARRAY.

const heroesArray = ["hatim", "kokoman", "shaktiman"];

heroesArray.forEach(function (item) {
  console.log(item);
});

// using arrow function
heroesArray.forEach((item) => {
  // console.log(item);
});

function printMe(item) {
  console.log(item);
}

heroesArray.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

// heroesArray.forEach(printMe)

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  // console.log(item.languageName);
});
