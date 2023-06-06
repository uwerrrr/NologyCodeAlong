/* # Control flow challenges

## Challenge: Comparing Numbers

MVP:
Check for the smallest value

Create two variables x & y
Write an if / else block
It should compare a number x to another number y
It should print ("x is greater than y") in the console
Or "x is smaller than y"
Or "x is equal to y"
Depending on the value of x and y

## Challenge: User Input Type

MVP:
Console log the user's input depending on the data type

Create a variable userInput
Write an if / else block
If the input is a number, it should console log that number but squared
If the input is a string, it should console log that input
If the input is anythig else, the console should say "invalid input"

## Challenge: Tell me the day!

MVP:
Create a switch block that will log a string for each day of the week.

Create a variable called day
The switch will be given a number and return the matching days of the week
e.g. if day = 2, the switch should print Today is Tuesday in the console.
Your switch block should also handle numbers out of range

## Challenge: Eye Colour

MVP:
Tell the user what eye colour their child would have.

Create two variables parent1 and parent2
Given the eye colour of each parent, it should console log the probability of their child having different eye colours, for example: Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --%
Use the following image as a reference

Bonus:
Store the value of the child’s eye colour and write a switch statement - depending on the child’s eye colour consol log if it's your favourite eye colour, your least favourite eye colour or the mediocre colour
*/

// MVP 1
let x = 50;
let y = 100;

if (x > y) {
  console.log("x is greater than y");
} else if (x < y) {
  console.log("x is smaller than y");
} else {
  console.log("x is equal to y");
}

// MVP 2

// let userInput = 100;

// if (typeof userInput === "number") {
//   console.log(`userInput squared = ${userInput ** 2}`);
// } else if (typeof userInput === "string") {
//   console.log(`userInput is ${userInput}`);
// } else {
//   console.log(`invalid input`);
// }

// let userInput = prompt("Please type an input");

// if (isNaN(parseInt(userInput)) == true) {
//   if (userInput == "string") {
//     console.log(`userInput is ${userInput}`);
//   } else {
//     console.log(`invalid input`);
//   }
// } else {
//   console.log(`userInput squared = ${userInput ** 2}`);
// }

// let value = 2;

// const stringToPrint =
//   value > 0 ? "Value is greater than 0" : "Value is 0 or less than 0";

// console.log(stringToPrint);

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //
// ------------------------------------------------------------ //
// ------------------------------------------------------------ //
/* ## Challenge: Tell me the day!
MVP:
Create a switch block that will log a string for each day of the week.

Create a variable called day
The switch will be given a number and return the matching days of the week
e.g. if day = 2, the switch should print Today is Tuesday in the console.
Your switch block should also handle numbers out of range */

let inputDay = 4;
let text2 = "Today is ";

switch (inputDay) {
  case 1:
    console.log(text2 + "Monday");
    break;
  case 2:
    console.log(text2 + "Tuesday");
    break;
  case 3:
    console.log(text2 + "Wednesday");
    break;
  case 4:
    console.log(text2 + "Thursday");
    break;
  case 5:
    console.log(text2 + "Friday");
    break;
  case 6:
    console.log(text2 + "Saturday");
    break;
  case 7:
    console.log(text2 + "Sunday");
    break;
  default:
    console.log("Please enter number ranging from 1 to 7");
    break;
}

// ------------------------------------------------------------ //
/* ## Challenge: Eye Colour

MVP:
Tell the user what eye colour their child would have.

Create two variables parent1 and parent2
Given the eye colour of each parent, it should console log the probability of their child having different eye colours, for example: Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --%
Use the following image as a reference

Bonus:
Store the value of the child’s eye colour and write a switch statement - depending on the child’s eye colour consol log if it's your favourite eye colour, your least favourite eye colour or the mediocre colour */

let parent1 = "blue";
let parent2 = "brown";
let brownPercent = null;
let greenPercent = null;
let bluePercent = null;
let text = null;

function addChildEyeColor(brown, green, blue) {
  let maxVal = Math.max(brown, green, blue);
  let childEyeColor = null;

  switch (maxVal) {
    case 50:
      childEyeColor = "can't verify";
      break;
    case brown:
      childEyeColor = "brown";
      break;
    case green:
      childEyeColor = "green";
      break;
    default:
      childEyeColor = "blue";
      break;
  }

  return childEyeColor;
}

if (parent1 === parent2) {
  if (parent1 == "brown") {
    brownPercent = 75;
    greenPercent = 18.75;
    bluePercent = 6.25;
  } else if (parent1 == "green") {
    brownPercent = 0.6;
    greenPercent = 75;
    bluePercent = 25;
  } else {
    brownPercent = 0;
    greenPercent = 1;
    bluePercent = 99;
  }
} else if (
  (parent1 == "brown" && parent2 == "green") ||
  (parent1 == "green" && parent2 == "brown")
) {
  brownPercent = 50;
  greenPercent = 37.5;
  bluePercent = 12.5;
} else if (
  (parent1 == "brown" && parent2 == "blue") ||
  (parent1 == "blue" && parent2 == "brown")
) {
  brownPercent = 50;
  greenPercent = 0;
  bluePercent = 50;
} else if (
  (parent1 == "green" && parent2 == "blue") ||
  (parent1 == "blue" && parent2 == "green")
) {
  brownPercent = 0;
  greenPercent = 50;
  bluePercent = 50;
} else {
  text = "unknown";
}

if (text != "unknown") {
  text = `Your eye colour are ${parent1} and ${parent2}, the chances of your child having brown eyes is ${brownPercent}%, green eyes is ${greenPercent}% and blue eye is ${bluePercent}%.`;
  console.log(text);
  let childEyeColor = addChildEyeColor(brownPercent, greenPercent, bluePercent);
  switch (childEyeColor) {
    case "can't verify":
      console.log("The child eye color can not be verified");
      break;
    case "brown":
      console.log("Brown is a mediocre color");
      break;
    case "green":
      console.log("Green is my least favorite color");
      break;

    default:
      console.log("Blue is my most favorite color");
      break;
  }
}
