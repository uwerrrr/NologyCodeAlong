// function that divides two numbers

import ZeroDivisionError from "./zero-divide-error.js";

export const divide = (a, b) => {
    // throw an error when b is 0
    if (b === 0) {
        // throw an error
        throw new ZeroDivisionError("Cannot divide by 0");
    }
    return a / b;
};
