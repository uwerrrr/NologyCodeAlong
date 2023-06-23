// A function that calculates the sum of numbers

// It should throw an error if one or more parameters are not a number

// if no parameters are passed -> thor an error

// I want it to sum any number of arguments <= 1

export const sum = (num1, num2) => {
  if (num1 === undefined || num2 === undefined) {
    throw new Error("One or more parameters are missing");
  }
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("One or more parameters are not number");
  }
  // if (typeof num1 !== "number" || typeof num2 !== "number") {
  //   throw new Error("One or more parameters are not number");
  // }
  return num1 + num2;
};
