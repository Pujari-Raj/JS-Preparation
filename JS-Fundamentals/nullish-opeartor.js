//nullish coalescing operator
let count = null;

/**
 * The output will be `0` because the nullish coalescing operator specifically checks for null or undefined on the left-hand side and defaults to the right-hand side.
 */
let defaultCount = count ?? 0;
// console.log(defaultCount);

/** In above code
 * The nullish coalescing operator (??) checks the left-hand side operand (userCount) for being null or undefined.
If the left-hand side is null or undefined, it evaluates to the right-hand side operand (0 in this case).
If the left-hand side is not null or undefined, it evaluates to the left-hand side operand.
//
So, specifically in the context of the count ?? 0 expression:
If the count is null or undefined, it defaults to 0.
If the count has any other value(other than null or undefined), it retains that value.
 */

let SelectedValue = 40;

let defaultValue = SelectedValue ?? "No value is Selected";
// console.log(defaultValue);

/** In above code
 * The expression selectedValue ?? 'No value selected' checks if selectedValue is null or undefined.
Since selectedValue is defined and has a truthy value (42), the nullish coalescing operator does not evaluate the right-hand side ('No value selected').
Therefore, defaultValue is assigned the value of selectedValue itself, which is 42.
 */
// diff between nullish coalescing operator VS logical OR Operator

let falsyValue = 0;
let resultNullish = falsyValue ?? "default Value";
let resultLogicalOR = falsyValue || "default Value";

console.log(" resultNullish value->", resultNullish);
console.log("resultLogicalOR value->", resultLogicalOR);
/** In above code
 * 
    checking If falsyValue is null or undefined, it evaluates to the right-hand side operand ('Default Value').
    In this case, falsyValue is `0`, which is a falsy value, but not null or undefined. Therefore, resultNullish is assigned the value of 0
* 
    The expression falsyValue || 'Default Value' evaluates to the first truthy operand encountered.
    In JavaScript, 0 is a falsy value, so it moves to the right-hand side and evaluates 'Default Value'.
    The output of console.log(resultLogicalOR); is 'Default Value' because the logical OR operator treats 0 as a falsy value and moves to the right-hand side.
 */
