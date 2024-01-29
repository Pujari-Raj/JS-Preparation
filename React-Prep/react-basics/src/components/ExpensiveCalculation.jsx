import React, { useMemo } from "react";

const ExpensiveCalculation = ({ value }) => {
  const expensiveResult = useMemo(() => {
    console.log("Performing expensive calculation...");
    let result = 0;
    for (let i = 0; i < value; i++) {
      result += i;
    }
    console.log("result->", result);
    return result;
  }, [value]);

  /**
   * when we click on the Increment count btn the value of expensive result firstly change to 1 then it can be 3,6,... and so on, so there is unexpected increase in the expensiveResult after the first click might be due to the way React updates state. When you click the button, the state update (count + 1) is asynchronous, meaning that the value of count hasn't been updated immediately after you click the button.
   * 
   * what is happening bts
   * After Clicking(Increment) button.
    count state is updated asynchronously, but the re-render cycle starts.
    The ExpensiveCalculation component receives the previous value of count before the state update.
    The memoized calculation uses the previous value of count to calculate expensiveResult.
    Meanwhile, the state update completes, and count gets incremented by 1.
    As a result, we see an apparent increase in the expensiveResult by the time it's displayed after the first click.
   */

  return (
    <div>
      <p>Value: {value}</p>
      <p>Expensive Result: {expensiveResult}</p>
    </div>
  );
};

export default ExpensiveCalculation;
