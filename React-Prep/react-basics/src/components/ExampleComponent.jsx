import React from "react";

const ExampleComponent = () => {
  const throwError = () => {
    throw new Error("This is a simulated error.");
  };
  return (
    <>
      <div>ExampleComponent</div>
      <button onClick={throwError} style={{border: "1px solid"}}>Throw Error</button>
    </>
  );
};

export default ExampleComponent;
