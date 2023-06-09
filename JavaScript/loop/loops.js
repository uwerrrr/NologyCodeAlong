// arrays and loops
// arrays store a number of elements
// console.log("Hello, studentName")

// I can create a for loop that will loop through the whole array and do something to every element of it

const students = ["John", "Kate", "Mike"];
// I want to print "Hello, {name}"

// students.length
// students.length - 1
for (let i = 0; i < students.length; ++i) {
  // I can call any function on all elements of an array
  console.log(`Hello, ${students[i]}`);
  console.log(`The index is: ${i}`);
}

// you will have an array, based on that array we want a new array where every element is changed

// I want an array with student names but uppercase

const upperCaseStudents = [];
console.log(upperCaseStudents);

// we can create a new array, push every element to that array after certain modifications

// I started with an array, I end up with an array
for (let i = 0; i < students.length; ++i) {
  // const uppercaseStudent = students[i].toUpperCase();
  // upperCaseStudents.push(uppercaseStudent);
  upperCaseStudents.push(students[i].toUpperCase());
}

console.log(upperCaseStudents);

// I can start with an array
// end up with any data type that I want created based on that array

const letters = ["n", "o", "l", "O", "g", "y"];
let stringFromLetters = "";

for (let i = 0; i < letters.length; i++) {
  // stringFromLetters = stringFromLetters + letters[i]
  stringFromLetters += letters[i];
}

// first iteration
// ""
// n
// "" + "n" -> "n"

// 2nd iteration
// "n"
// "o"
// "n" + "o" -> "no"

// 3rd iteration
// "no"
// "l"
// "no" + "l" -> "nol"

console.log(stringFromLetters);

// count how many letters "o" are in the array

let numOfO = 0;

for (let i = 0; i < letters.length; i++) {
  if (letters[i].toLowerCase() === "o") {
    //add .toLowverCase() to tackle both "o" and "O"
    numOfO += 1;
  }
}

console.log(numOfO);

// break
// continue
