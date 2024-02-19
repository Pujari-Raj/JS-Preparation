// Throttling example, Best EXAMPLE would machine gun that fires a bullet after 
// certain interval of time

/**
 * 
 * Throttling limits the rate at which a function can be executed. It ensures that the function is invoked at most once within a specified time interval. Throttling is useful when you want to ensure that a function is executed periodically but not too frequently, such as in animations or repetitive tasks.
 */

function throttle(func, delay) {
  let inThrottle = false;

  return function () {
    if (!inThrottle) {
      func();
      inThrottle = true;
      setTimeout(() => (inThrottle = false), delay);
    }
  };
}

function handleScroll() {
  // console.log("btn-clicked!!");
  console.log("Scrolling...");
  // Perform some time-consuming task here
}

const throttledScrollHandler = throttle(handleScroll, 5000);

// debounce
// Attaching the debounced handler to an input element
window.addEventListener("scroll", throttledScrollHandler);

function updateTime() {
  const timecheck = document.getElementById("time");
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;
  timecheck.textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1500)