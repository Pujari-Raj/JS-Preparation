// while loop

/**
 * The while loop is an entry-controlled loop, meaning that the loop condition is checked before the execution of the loop body.
 * if condition is 'false' it will not execute the code at-least for once
 */
let i = 10;

while (i<=20) {
    // console.log(`Value of index is ${i}`);
    i = i+4;
}

let heroesArray = ["hatim", "kokoman", "shaktiman"];

let arr = 0

while (arr < heroesArray.length) {
    // console.log(`value in ${heroesArray[arr]} is`);
    arr = arr+1;
}

// do-while

/**
 * The do-while loop is an exit-controlled loop, meaning that the loop body is executed at least once, and then the loop condition is checked.
 * even if the condition is 'false' it will run a code atleast for once.
 */

let teamScore = 299

do {
    console.log(`teamScore is ${teamScore}`);
    teamScore++;
} while (teamScore<=250);