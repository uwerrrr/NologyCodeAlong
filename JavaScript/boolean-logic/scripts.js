// comparison operators
console.log(2 > 1); // greater than
console.log(4 < 7); // less than
console.log(5 <= 1); // less than or equal to
console.log(3 >= 1); // greater than or equal to

// this doesn't check the type of data, so we get true
console.log(2 == "2");

// type sensitive equals
console.log(2 === "2");

// not equal to
console.log(1 != "1");

// not equal to - strict
console.log(1 !== "1");

// logical operators
// AND - &&
// both sides need to be true to return true
console.log(true && true);
console.log(1 > 0 && 2 > 5);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// OR - ||
console.log(true || true);
// only one needs to be true to return true
console.log(true || false);
console.log(2 > 1 || 4 > 9);

// multiple conditions
console.log((3 > 5 && 2 > 1) || 6 > 7);
console.log(6 < 1 || (2 < 1 && 1 == 2));
console.log((1 > 2 || 1 == 1) && true);

// ! - not
console.log(!true);
console.log(!false);

console.log(!!true);

// falsey values

// when we try to treat them as a boolean, they are false
// undefined
let someVariable;
console.log(!someVariable);

// empty string
let someString = "";
console.log(!!someString);

// 0 is another falsey value
let num = 0;
console.log(!num);

// null
let anotherVar = null;
console.log(!anotherVar);

// NaN
let thirdVar = parseInt("hello");
console.log(!thirdVar);

let loggedInUser;

// left hand side is falsey (undefined) so we return right hand side
console.log(`Welcome, ${loggedInUser || "Guest"}`);
loggedInUser = "John";
// left hand side is truthy, so we return it
console.log(`Welcome, ${loggedInUser || "Guest"}`);

// two falsey values
console.log(null || 0);

console.log("hello" && "hi" && "nology");

console.log(2 == "2"); // true
console.log(2 === 2); // true
console.log(2 === "2"); // false
console.log("2" + 3 == 23); // true
console.log("2" + 3 === 5); // false
console.log(10 % 3); // 1
console.log(10 % 3 === 1); // true
console.log((100 % 7) % 5); // 2
console.log((100 % 7) % 5 !== 0); // true
console.log((100 % 7) % 9 == 2); // true
console.log(!(10 % 2)); // true
console.log(!!!!((10 % 7) % 3)); // false
console.log(10 % 3 === -1 % 2); // false
console.log((892783 != "89278" + 3) == 0); // true
console.log(true && false); // false
console.log(false || true); // true
console.log(true || false); // true/
console.log(true || false + true); // true
console.log(true * false && false + true); // false
console.log(10 && 123 && -1 && 3); // 3
console.log(10 && 123 && 0 && 3); // 0
console.log((10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1); // 0
console.log(3 && "Calum" && ("" || 26)); // 26
console.log(3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog"))); // "CatDog"

// console.log(1 + 1 || 0 + 0);
// console.log(2 + 1 && 1 + 4 && 4 + 5);
