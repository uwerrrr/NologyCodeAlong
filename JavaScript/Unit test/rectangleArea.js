// 1. Given two valid numbers, it returns the area of a rectangle

// What could wrong?
// What edge cases should we cover?

// Invalid parameters

// We need to make sure both width and height are positive numbers, if 0 or less -> throw an error

// We need to make sure that both width and height are type number, if string/boolean etc throw an Error

// Throw an error if only one parameter is passed

export const rectangleArea = (height, width) => {
  if (height === undefined || width === undefined) {
    throw new Error("One or more parameters are missing");
  }

  if (typeof height !== "number" || typeof width !== "number") {
    throw new Error("Height and width need to be numbers");
  }
  if (height <= 0 || width <= 0) {
    throw new Error("Height and width should be greater than 0");
  }

  return height * width;
};
