// Async, Await
// We use them to make our code easier to read

// async await is just SYNTACTIC SUGAR
// it does the same thing but we have a nicer way of writing things
// there is no extra functionality added with async await

// 2017

// ASYNC
// we need to add async at te beginning of a function
async function someFunction() {} // this function is now async
const anotherFunction = async () => {}; // this is also async

// EVERY async function will ALWAYS return a promise

async function answer() {
  return 22;
}

const result = answer();
console.log("result: ", result);

// result.then((val) => console.log(val));

const problem = async () => {
  throw new Error("Something went wrong...");
};

// problem()
//     .then((val) => console.log(val))
//     .catch((e) => console.log(e.message));

// on it's own, async is not useful

// AWAIT

// we can only use await inside async functions
// await pauses the executing of our code until the promise we are waiting for gets resolved

const slowAdd = (num1, num2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num1 + num2);
    }, 3000);
  });
};

async function printAnswer(a, b) {
  console.log(`waiting for the result fo adding: ${a}, ${b}`);
  const sum = await slowAdd(a, b); // 3 seconds
  console.log(sum, "sum");
  console.log("I am after awaiting sum");
  // if I had another function that needs the return from sum I can call it here
  // anotherFunction(sum)
}

// console.log("I am outside async function");

// printAnswer(10, 12);

const slowMinus = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a - b);
    }, 1500);
  });
};

const printAnswers = async (a, b) => {
  const answer1 = await slowAdd(a, b); // 3 seconds
  const answer2 = await slowMinus(a, b); // 1.5 seconds

  console.log(answer1, "answer 1");
  console.log(answer2, "answer2");
};

printAnswers(5, 3);