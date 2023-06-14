let myVal = 30;

for (let i = 5; i < 9; i++) {
  myVal += 2;
}
console.log(myVal);

const anArr = new Array(100).fill(0);
console.log(anArr[80]);

const reverseIncrement = (arr = [], inc = 1) => {
  const increment =
    (inc = 1) =>
    (n) =>
      n + inc;
  return arr.slice().reverse().map(increment(inc));
};

reverseIncrement([1, 2, 3, 4, 5], 2);
reverseIncrement([5, 4, 3, 2, 1], 6);

// const userName = getUserName();

// if (userName.length < 6) {
//   let response = "UserName must be above 6 characters long";
// } else if (userName.length > 24) {
//   let response = "UserName must be below 24 characters long";
// } else if (userName.match(/\W/)) {
//   let response = "UserName can only contain alphanumeric characters";
// }
console.log(7 == "7");

if (8 && 7 === "7") {
  console.log("Bacon");
} else if (7 === "7" || 8) {
  console.log("Lettuce");
} else {
  console.log("Tomato");
}

// const source = [1, 2, 3, 4, 5];
// const destination = [];
// for (let i = 0; i < source.length; ++i) {
//   destination.push(source[i] + 1);
// }

// console.log(destination);

// const source = [1, 2, 3, 4, 5];

// const destination = source.map((item) => item + 1);

// console.log(destination);

// const source = [1, 2, 3, 4, 5];
// const destination = [];
// for (let i = 0; i < source.length; ++i) {
//   if (source[i] % 3 === 0) {
//     destination.push(source[i]);
//   }
// }

// const source = [1, 2, 3, 4, 5];
// // const destination = source.filter((item) => item % 3 === 0);

// const destination = source.reduce((acc, item) => {
//   const current = item + 3;
//   if (current % 2 === 0) {
//     acc.push(current);
//   }
//   return acc;
// }, []);

// console.log(destination);

// const source = "Convert to snakecase".split("");
// let str = "";
// for (let i = 0; i < source.length; ++i) {
//   if (source[i] === " ") {
//     str += "_";
//   } else str += source[i].toLowerCase();
// }

// console.log(str);

// const source = "Convert to snakecase".split("");

// const str = source
//   .map((char) => {
//     if (char === " ") {
//       return "_";
//     } else {
//       return char.toLowerCase();
//     }
//   })
//   .join("");

// console.log(str);

// let str = "";
// for (let i = 0; i < 10; ++i) {
//   str += i;
// }
// console.log(str);

// console.log(("ba" + +"a" )+ "a");

const arr = new Array(2).fill(null);
console.log(`Aspi${arr.pop() ?? "ra"}tions`);

const person = { name: "Allen" };
console.log(`${("" + person.age).slice(4, 6)}nance`);
console.log(("" + person.age).slice(4, 6));

const chars = [174, 97, 118, 97, 83, 99, 114, 105, 112, 116];
let i = 0;

let output = "";
while (i++ <= chars.length) {
  output += String.fromCharCode(chars[i]);
}
const expected = "JavaScript";
console.log("Expected:", expected);
console.log("Actual:", output);
console.log(expected === output);

const suits = ["♠", "♡", "♢", "♣"];
const drawCards = (n = 10) => {
  const cards = [];
  while (cards.length < n) {
    let card = Math.floor(Math.random() * 13) + 1;
    card += suits[Math.floor(Math.random() * 4)];
    if (cards.includes(card)) continue;
    cards.push(card);
  }
  return cards;
};

drawCards(5);
// console.log(Math.floor(Math.random() * 13));

let test = 0.7 * 100 + "%";
console.log(test);
console.log(typeof test);

const str = "The quick brown fox jumps over the lazy dog";
const strCopy = str.split();
console.log("strCopy ", strCopy);

let text = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result);
