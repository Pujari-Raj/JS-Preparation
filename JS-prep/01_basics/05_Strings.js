const name = "demo"
const repoCount = 90

// console.log(name + repoCount + " Value");

const gameName = new String('sundari-pc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   sundari    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vanakkam-food.vercel.app/"

console.log(url.replace('vanakkam', 'namaste'))

console.log(url.includes('sundari'))

console.log(gameName.split('-'));