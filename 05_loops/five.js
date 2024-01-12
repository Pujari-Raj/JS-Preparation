const heroesArray = ["hatim", "kokoman", "shaktiman"];

heroesArray.forEach( function (item) {
    // console.log(item);
})

// using arrow function
heroesArray.forEach(  (item) => {
    // console.log(item);
})

function printMe(item) {
    console.log(item);
}

heroesArray.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

// heroesArray.forEach(printMe)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})