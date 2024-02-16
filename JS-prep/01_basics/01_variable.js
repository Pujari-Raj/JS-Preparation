const accountId = 180854;
let accountEmail = "demouser@gmail.com";
let accountIFSC;
// returnd undefined , In JS any variable can has beeen initiliazed with any value returns as undefined
var accountPassword = "DEMO";
/**
 * Prefer !to use var for declaring the variables, bcz of the issue in
 * var has function scope, meaning it is only scoped to the nearest function, not to *the block where it is declared. This can lead to unexpected behavior and makes it *harder to manage variables in larger codebases.
 *let and const have block scope, which means they are limited to the block (enclosed * by curly braces) in which they are defined. This behavior is more intuitive and   helps prevent unintended variable hoisting and scope-related bugs.
 */
accountCity = "SEA";
/**
 * In JS, we can declare variable without let, const, or var, it is implicitly declared as a global variable. In that case, the variable becomes part of the global scope and can be accessed and modified throughout your code.
 */

// accountId = 108534; not allowed , bcz we can't change value of variable which is decalred using const

console.log(accountId, accountEmail, accountPassword, accountCity);

accountEmail = "roflo@gmail.com";
accountPassword = "LOLO";
accountCity = "HILL";

console.table([accountId, accountEmail, accountPassword, accountIFSC]);
// console.table({ accountCity: accountCity })

/**
 * The console.table() method is primarily used to display tabular data in a table format. It is designed to work with arrays or objects that have a tabular structure. When you pass a single value to console.table(), it may not properly display the value as a table because it expects an array or an object.
 */
