// for loop
/*
 The for loop is a traditional loop that has been part of JavaScript since its early versions, it is useful when you know the exact number of iterations you want.
 */
//IT DOES NOT RETURN ANYTHING SPECIFIC; IT IS USED FOR ITERATION AND CONTROL FLOW.

for (let i = 0; i < 10; i++) {
  const element = i;
  // if (element == 7) {
  //     console.log("skipped!!");
  // }
  // console.log(element);
}

for (let i = 1; i < 10; i++) {
  // console.log(`outer loop(i) value: ${i}`);
  for (let j = 1; j < 10; j++) {
    // console.log(i +'*'+j+'='+i*j);
  }
}

let heroesArray = ["hatim", "kokoman", "shaktiman"];
// console.log("length->",heroesArray.length);

for (let index = 0; index < heroesArray.length; index++) {
  const element = heroesArray[index];
  // console.log(element);
}

// break keyword, it will terminate the loop once the condition gets satisified,it immediately exits the loop
for (let i = 0; i < 10; i++) {
  if (i == 7) {
    // console.log(`7 is found!`);
    break;
  }
  // console.log(`Value of i is ${i}`);
}

/**
 * The continue statement is used to skip the rest of the loop body for the current iteration and move on to the next iteration.
 */
for (let i = 0; i < 10; i++) {
  if (i == 7) {
    // console.log(`7 is found!`);
    continue;
  }
//   console.log(`Value of i is ${i}`);
}
