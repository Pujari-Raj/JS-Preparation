const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log("real_another_array--",real_another_array);

console.log(Array.isArray("swepson"));
// method in JavaScript creates a new array instance from an array-like or iterable object (Strings, Sets, Maps, NodeLists). This method is particularly useful for converting such objects into arrays.
console.log(Array.from("swepson"));

console.log(Array.from({ name: "swepson" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

// returns a new array from set of new elements
console.log(Array.of(score1, score2, score3));
