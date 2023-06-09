// 1. What are arrays?
// set of data, group of variables, js way of creating lists

// we have some data that's related, instead of storing that data in individual variables, we can crete an array

const coach1 = "Martyna";
const coach2 = "Alex";
const coach3 = "Cal";
const coach4 = "Sandra";

console.log(coach1);
console.log(coach2);
console.log(coach3);
console.log(coach4);

// instead, let's create one variable to store all coaches

const coaches = [coach1, coach2, coach3, coach4];
console.log(coaches);

// how can I access individual values?
// we can use an index
// a position of an element in the array
// ! indexes start at 0 !

// first element in the array
console.log(coaches[0]);

// second
console.log(coaches[1]);

// third
console.log(coaches[2]);

// if we want to know how many elements there are, we can use .length property
console.log(coaches.length);

// indexes start at 0, so last index is always 1 less than length
console.log(coaches.length - 1, "last index");

// if I wanted to access the last element in the array, what could I do?
console.log(coaches[coaches.length - 1]);

// array constructor
const arr = new Array(1, 2, 3);
console.log(arr);

// this would create an array with 5 empty spots
const arr2 = new Array(5);
console.log(arr2.length);
console.log(arr2);

// I want an array with 30 5
const arr12 = [5, 5, 5];
const arr3 = new Array(30).fill(5);
console.log(arr3);
console.log(arr3.length);

const cities = ["Melbourne", "Sydney", "Brisbane"];

// I can add items to arrays using indexes - but this can lead to bugs, we will have a look at a better way to do this
cities[3] = "Adelaide";
console.log(cities);

// I can update the values inside my array with indexes
cities[0] = "Perth";
console.log(cities);

cities[1] = "Port Douglas";
cities[2] = "Cairns";
// cities = ["Darwin", "Canberra"];
console.log(cities);

// if I declare an array with const, I can still update values, but I cannot reassign a whole new array to it

// 4 different array methods

// add things to the end of an array
// we can use length
cities[cities.length] = "Melbourne";
console.log(cities);

// .push

cities.push("Darwin");
console.log(cities);

cities.push("Broome");
console.log(cities);

// add things to the beginning of an array
// unshift
cities.unshift("Wollongong");
console.log(cities);

cities.unshift("Coffs Harbour");
console.log(cities);

// we can remove things from the end of an array
// I wanted to store the last item of an array in a variable
const lastCity = cities[cities.length - 1];
console.log(lastCity);
console.log(cities);

// pop
const lastItem = cities.pop();
console.log(lastItem, "last item returned by .pop method");
console.log(cities);

// we can remove things from the beginning of an array
// shift

const firstCity = cities.shift();
console.log(firstCity, "first city returned from shift");
console.log(cities);

// what is the index of a given item in the array
// indexOf
const melbourneIndex = cities.indexOf("Melbourne");
console.log(melbourneIndex);

console.log(cities[5]);

// to check if a given item is in the array

const sydneyIndex = cities.indexOf("Sydney");
console.log(sydneyIndex);

// includes
console.log(cities.includes("Melbourne"), "is Melbourne one of the cities?");
console.log(cities.includes("Sydney"), "is sydney one of the cities?");

// how to turn my array into a string
// I want a string that says `Some Australian cities: ..., ..., `
console.log(`Some Australian cities: ${cities.join(", ")}`);
