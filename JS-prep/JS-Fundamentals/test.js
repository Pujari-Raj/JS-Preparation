//lexical scope

var globalVariable = "I am global";

/**
 * Lexical scope is determined by the physical placement of the code. Inner functions have access to the variables and parameters of their outer function, and their outer functions have access to the variables and parameters of their outer function, and so on, all the way up to the global scope.
 */

function outerFunction() {
  var outerVariable = "I am outer";

  function innerFunction() {
    var innerVariable = "I am inner";
    console.log(globalVariable); // Accessible
    console.log(outerVariable); // Accessible
  }

  innerFunction();
  // console.log(innerVariable); // Error: innerVariable is not defined
}

outerFunction();
// console.log(outerVariable); // Error: outerVariable is not defined

// diff bwetn lexical scope & closures

// clousre-eg

// here outerFunction2 is a lexical scope environment of innerFunction2, that is how closure is formed
function outerFunction2() {
  var outerVariable = "I am outer-2";

  function innerFunction2() {
    var innerVariable = "I am inner-2";
    console.log(outerVariable); // Accessible due to closure
  }

  // console.log(innerVariable);
  return innerFunction2;
}

var closureFunction = outerFunction2();
// closureFunction(); // Prints: "I am outer"

/**
 * 
Lexical Scope: Determines the accessibility of variables at author-time, based on where the variables and blocks of scope are authored.

Variables declared outside of a function are accessible globally.
Variables declared inside a function are only accessible within that function, not from outside. 

-------------------------------*****************-------------------------
Closure: A function retains access to variables from its containing scope even after the parent function has closed. It's a runtime behavior.
In the example above, innerFunction2 retains access to outerVariable even after outerFunction2 has finished executing. This is possible due to closure.
 */
