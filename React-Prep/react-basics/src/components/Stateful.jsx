import React, { useState } from "react";
const Stateful = () => {
  // useState hook to declare state variable count
  const [count, setCount] = useState(0);

  // Function to increment count
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="">
        <p>Count: {count}</p>
        <button onClick={incrementCount} style={{border: "1px solid"}}>Increment</button>
      </div>
    </>
  );
};

export default Stateful;
