// A function that calculates the sum of numbers

// It should throw an error if one or more parameters are not a number

// if no parameters are passed -> throw an error

// I want it to sum any number of arguments <= 1
const noArgsError = new Error("At least one argument must be passed");
export const sum = (...numbers) => {
    // this is an array
    console.log(numbers);

    if (numbers.length === 0) {
        throw noArgsError;
    }

    if (numbers.filter((num) => typeof num !== "number").length > 0) {
        throw new Error("All arguments must be numbers");
    }

    return numbers.reduce((acc, curr) => (acc += curr));
};
