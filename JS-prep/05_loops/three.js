// for..of
/**
 * The for...of loop was introduced in ECMAScript 2015(ES6) and provides a simpler 
 * way to iterate over iterable objects, like arrays or strings. It does not require * explicit indexing and focuses on the values of the elements.
 */
//IT RETURNS THE VALUES OF THE ITERABLE,  It doesn't return a new array.

// {"","",""} [{}, {}, ....]

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (const nums of arr) {
  // console.log(nums);
}

// maps

const countriesmap = new Map();
countriesmap.set("IN", "Bharat");
countriesmap.set("US", "USA");
countriesmap.set("UK", "UNK");

// in js we can't iterate map directly
for (const countries of countriesmap) {
  // console.log(countries); // it will give O/P in array
}

/**
 * The entries() method of a Map object returns a new iterator object that contains an array of [key, value] pairs for each element in the Map, in insertion order.
 */
for (const [key, value] of countriesmap.entries()) {
  // console.log(`${key} :- ${value}`); // it will give key-value pair format
}

const heroes = {
  hero1: "hatim",
  hero2: "shaktiman",
};

for (const hero of Object.values(heroes)) {
  // console.log(hero); // retutns only values
}

for (const [key, value] of Object.entries(heroes)) {
  console.log(`${key} :- ${value}`); // retutns  key-values as a pair
}
