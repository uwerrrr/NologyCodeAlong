// 1. What are functions?
// blocks of code that perform a certain task, that we can reuse

// writing instructions of what we want to happen, giving them a name

// every time we call the function (use the function), we run those instructions

// 2. Why do we need functions?
// to avoid repeating code, to avoid bugs

const student1 = "Jane";
const student2 = "John";
const student3 = "Kate";

console.log(`Hello, my name is ${student1}`);
console.log(`Hello, my name is ${student2}`);
console.log(`Hello, my name is ${student3}`);

function introduceYourself(name) {
  // do something with the data
  const introductionStr = `Hello, my name is ${name}`;
  // return an output (some other data)
  return introductionStr;
}

console.log(introduceYourself(student1));
console.log(introduceYourself(student2));
console.log(introduceYourself(student3));
console.log(introduceYourself("Martyna"));

// parameters are optional

// function that returns the date
// in js I have a Date object

function getCurrentDate() {
  const today = new Date();
  return today.toDateString();
}

console.log(getCurrentDate());

// we can have functions that don't use the return keyword
console.log(printSomething("I was called before function was declared"));

function printSomething(something) {
  // this is a side effect
  console.log(something);
  // if I get rid of the return keyword, the function will return the default value, which is undefined
  return something;
}

printSomething("Hi");
// what did this function return?
console.log(printSomething("Hello"));

const myFunctionReturnedThis = printSomething("nology");
console.log(myFunctionReturnedThis, "returned value");

// different syntax for a function - arrow functions

// THIS WOULD NOT WORK < CANNOT ACCESS ARROW FUNCTIONS BEFORE THEY ARE INITIALIZED
// const calculatedArea = rectangleArea(4, 5);
// console.log(calculatedArea);

const rectangleArea = (width, height) => {
  return width * height;
};

const calculatedArea = rectangleArea(4, 5);
console.log(calculatedArea);

// in certain situations, when using arrow functions, we can skip the {} and return, it's implied that the function returns the value after the arrow
// ! ONLY POSSIBLE FOR ONE LINE FUNCTIONS
const shorterArea = (width, height) => width * height;

// shorterArea = 2;
const shorterCalcArea = shorterArea(2, 3);
console.log(shorterCalcArea);

// function declarations are hoisted, we can use them before they are declared

/* ----------- LOOP -------------- */

for (let i = 1; i < 6; i++) {
  console.log(i);
}

let i = 1;
while (i < 6) {
  console.log(i, "from while loop");
  i++;
}

// function to get random int number from 0 to max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Generate a random number untill that number is 5
let num = 1;
while (num !== 5) {
  console.log(`The random number is ${num}`);
  num = getRandomInt(10);
}
