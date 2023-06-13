// You have an array of names all in lowercase you want a new array with all names but uppercase

const names = ["alpha", "beta", "delta"];

const namesUpper = names.map((name) => name.toUpperCase());

console.log(namesUpper);

// You have an array of numbers, you want a new array with each number decremented by 5
const numbers = [5, 10, 15, 20];

const numbersDecre = numbers.map((number) => number - 5);

console.log(numbersDecre);
