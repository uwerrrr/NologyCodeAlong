// ## Challenge: Working with ages

// MVP
// Create a variable that contains your age
// Add 10 to your age variable and log the output to the console
// Subtract 7 from your age variable and log the output to the console
// Multiple your age variable by 11 and log the output to the console

// ## Challenge: Calculating Moon Rotations

// MVP
// Create two variables
// The first for the number of earth days. (You can choose any number of days)
// One to hold the number of earth days it takes for the moon to rotate.
// Log the number of rotations of the moon given the number of earth days you specified

// ## Challenge: Calculating Moon Orbits

// MVP
// Create another variable to store the number of earth days it takes for the moon to orbit the earth
// Log the number of orbits the moon can do, given the number of earth days

// Create a new branch in you nology-challenges
// Open a pull request to main once challenge is completed
// Review each others pull requests

// MVP1
const age = 28;
console.log("age = " + age);
console.log("Add 10: " + (age + 10));
console.log("Subtract 7: " + (age - 7));
console.log("Multiple by 11: " + age * 11);

// MVP2
let earthDays = prompt("Number of Earth days: ");
const rotateDays = 27.3; // days that Moon rotate 1 full rotation
let rotationNum = earthDays / rotateDays;

console.log(`The moon has rotated ${rotationNum} rotation around the Earth`);
