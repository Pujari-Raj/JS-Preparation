for (var index = 0; index < 5; index++) {
  setTimeout(() => {
    // console.log(index);
  }, index);
}

function handleResizing() {
  console.log("resizing");
  for (let i = 0; i < 1000000; i++) {}
}

// window.addEventListener('resize', handleResizing)

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return factorial(num - 1) * num;
  }
}

const result1 = factorial(10);

const result2 = factorial(1);

console.log(result1);
console.log(result2);
