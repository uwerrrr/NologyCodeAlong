// like Java, variable has type
//set myName is String only
let myName2: string = "Oscar";
let myName = "Oscar";

////// function

// we can set type of arguments and returns of function like in Java
// or we don't set -> be default, type is any, like in JS
const add1 = (a: number, b: number): number => {
  return a + b;
};

// const add2 = (a, b) => {
//   return a + b;
// };

let result = add1(1, 2);

console.log(result);

//// Arrays

var names = ["Alice", "Bob", "Charlie"];
// array also has data type
// I can't push a number into a string array
// names.push(10); // -> error

// technically, we can set type of array to any -> BUT should NOT do that
var names2: any = ["Alice", "Bob", "Charlie"];
names2.push(10);

// TypeScript has support for generics
// combine 2 arrays of any type
const combineArrays = <T>(arr1: T[], arr2: T[]) => {
  return [...arr1, ...arr2];
};

const combined = combineArrays(["a", "b", "c"], ["d", "e", "f"]);
