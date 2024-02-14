// debouncing example

/* debouncing & Throttling bot mechanism is used for optimizing performance of 
  a web-app , it happens by limiting the rate of execution of function call 
  (Eg- function getting data from API call, functn gettinh call on event listener
    repetadely unecessarily )
*/

/**
 * Analogy that can help clearing confusion between debouncing & Throttling
 * 
 * Throttling:
  Baby: Mom give me a piece of chocolate cake
  Mom: No you can get one, only after 1 hour
  (baby wont get a piece of cake no matter how many times she asked, but only after each hour) 😢

  Debouncing:
  Baby: Mom give me a piece of chocolate cake, . . .Mom give me a piece of chocolate cake ... mom give me ...
  Mom: No, You will get a piece of cake only after 1 hour from LAST time you asked for one. 😃
 */

/**
 * Debouncing ensures that a function will not be executed until a certain amount of time has passed since the last invocation of the function. It's particularly useful when dealing with events that may be triggered rapidly, such as scrolling or keyboard input. Debouncing prevents the function from being executed repeatedly within a short time frame, waiting for a pause in the event before executing the function.
 * This can be useful, for EXAMPLE, when implementing an autocomplete search feature, where you want to avoid making a request to the server for every keystroke but rather wait for a short pause in typing.
 */

function debounce(func, delay) {
  let timeout;
  let elapsedTime;

  return function () {
    console.log("Debounce function called");

    const startTime = Date.now();
    // console.log(`Start time-`, startTime);

    clearInterval(timeout);
    timeout = setTimeout(() => {
      elapsedTime = Date.now() - startTime;
      console.log(`Time elapsed- ${elapsedTime}`);
      func(); // making func call
    }, delay);
  };
}

function handleInput() {
  // console.log("btn-clicked!!");
  console.log("waiting for debouncing");
  // Perform some time-consuming task here
}

const debounceddInputHandler = debounce(handleInput, 1000);

// debounce
// Attaching the debounced handler to an input element
document
  .getElementById("inputField")
  .addEventListener("input", debounceddInputHandler);
