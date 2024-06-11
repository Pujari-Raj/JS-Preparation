function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

// addTwoNumbers(10, 20);

function subTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 - number2;
}

const result = subTwoNumbers(12, 6);
// console.log(result);

function loginUserMessage(username ) {
  if (!username) {
    console.log("PLease enter a username");
    return
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("swwpson"));
console.log(loginUserMessage());

// using js spread-operator
function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "swwpson",
  prices: 699,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)
// handleObject({
//     username: "tomato",
//     price: 899
// })

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[3];
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));
