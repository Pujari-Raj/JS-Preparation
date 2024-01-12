// for..in

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const language in myObject) {
    // console.log(`${language} shortcut is for ${myObject[language]}`);
}

const numarray = [1,2,3,4,5,6,7,8];

// it will return index of values, bcz for...in loop is designed to iterate over the enumerable properties of an object, and it's not recommended to use it with arrays
for (const nums in numarray) {
   console.log(nums); 
}