//lexical scope

// var globalVariable = 'I am global';

// function outerFunction() {
//     var outerVariable = 'I am outer';

//     function innerFunction() {
//         var innerVariable = 'I am inner';
//         console.log(globalVariable); // Accessible
//         console.log(outerVariable); // Accessible
//     }

//     innerFunction();
//     // console.log(innerVariable); // Error: innerVariable is not defined
// }

// outerFunction();
// console.log(outerVariable); // Error: outerVariable is not defined

// diff bwetn lexical scope & closures

// clousre-eg 
function outerFunction2() {
    var outerVariable = 'I am outer-2';

    function innerFunction2() {
        var innerVariable = 'I am inner-2';
        console.log(outerVariable); // Accessible due to closure
    }

    // console.log(innerVariable);
    return innerFunction2;
}

var closureFunction = outerFunction2();
closureFunction(); // Prints: "I am outer"
