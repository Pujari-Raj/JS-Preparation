//var c = 300
let a = 300 // global-scope variable
// avoid using var keyword to declare variable bcz it's global scope variable and it overrides the previous value

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); // block-scope
    var c =  45; // global-scope 
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "swepson"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // throws error due-to-block-scope

    two()
}

// one()

if (true) {
    const username = "swepson"

    if (username === "swepson") {
        const website = "codedamn"
        console.log(username + website);
    }
    // console.log(website); // throws error due-to-block-scope
}

// console.log(username); // throws error due-to-block-scope


// ---------------------------------- interesting -----------------------------------

// you can call a function before declaration, due to hoisiting concept
console.log(addone(5))

function addone(num){
    return num + 1
}


// you cannot call a function before declaration, bcz we defined a function using function expression.

addTwo(5)
// this is known as function expression
const addTwo = function(num){
    return num + 2
}
