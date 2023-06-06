// What is control flow?
// The order in which our code gets executed (from top to bottom)
// a conditional block
// for loop

// if(condition) {
// if condition is truthy, this code will run
// }

if (2 < 1) {
  console.log("hello");
}

// if(condition) {
// if condition is truthy, this code will run
// } else {
// some code that will run if condition is falsey
//}

let x = null;

// x = 5;

if (x) {
  console.log("x is truthy");
} else {
  console.log("x is falsey");
}

console.log("some more code here");

// lets write an if statement that says "y is an odd number"/ "y is an even number"

let y = 6;

if (!(y % 2)) {
  console.log("y is even");
} else {
  console.log("y is odd");
}

// chaining conditions

// check if the age is greater than or equal to 18
// check if they have a drivers license
// if over or 18 and have license -> "You can drive"
// if over/or 18 and no license -> "Go and get your license"
// if under 18 -> "You can't drive"

let age = 12;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive");
} else if (age >= 18 && !hasLicense) {
  console.log("Go and get your license");
} else {
  console.log("You can't drive");
}

if (age >= 18 && hasLicense) {
  console.log("You can drive");
} else if (age >= 18 && !hasLicense) {
  console.log("Go and get your license");
} else if (age < 18 && hasLicense) {
  console.log("how did you get your license?");
} else {
  console.log("You can't drive");
}

// if there's more than one condition in an if block that evaluates to true, only the code from the first one will get executed

let score = 90;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}

console.log("even more code here");

// ternary

let value = 2;

const stringToPrint =
  value > 0 ? "Value is greater than 0" : "Value is 0 or less than 0";

console.log(stringToPrint);

// switch statement
let fruit = "raspberry";

switch (fruit) {
  case "apple":
    console.log("This is an apple");
    break;
  case "orange":
    console.log("The fruit is orange");
    break;
  case "strawberry":
  case "raspberry":
    console.log("The fruit is a berry");
    break;
  default:
    console.log("I don't know what fruit it is");
}
