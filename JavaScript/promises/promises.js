// 1. What is blocking code + example?
// Blocking code any type of code where the program can't move on - while loop - while the loop is running nothing can happen

// 2. What is non-blocking code (asynchronous code) + example?

// Doesn't stop the program from running/ other things can happen while we wait for something, setTimeout

// example of async code
// console.log("Before");

// setTimeout(() => {
//     console.log("I am inside set timeout");
// }, 2000);

// console.log("After");

// 3. What are promises?
// Something in the future that may or may not happen
// in js it is an object that represents an outcome of some async operation that can have different states:
// -    fulfilled - things went right
// -    rejected - something went wrong
// -    pending - waiting/we don't know yet

// 4. What are APIs? -
//  Application Programming Interface - middleman between two programs that communicate

// How to construct a promise

// Fulfilled promise

// const myFulfilledPromise = Promise.resolve(
//     "This is the value of my fulfilled promise"
// );

// console.log(myFulfilledPromise);

// Rejected promise
// const rejectedPromise = Promise.reject("This is my rejected promise");
// console.timeLog(rejectedPromise);

// I want to delay my promise to simulate waiting for a response from the server

const myFulfilledPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am a fulfilled promise, you had to wait for me");
        // reject("I am a rejected promise");
    }, 2000);
});

console.log("I am before the promise");

// here this will log a pending promise that will get fulfilled after a certain amount of time, I don't ave access to the value of the promise
console.log(myFulfilledPromise);
console.log("I am after the promise");

// I can only access the value after my promise stops pending

// .then
console.log("I am before .then");
// both .then and .catch run when a promise is no longer pending
myFulfilledPromise
    .then(
        (value) => {
            console.log("Inside .then");
            console.log(value);
        }
        // (rejectedValue) => {
        //     console.log("I get triggered when a promise is rejected");
        //     console.log(rejectedValue);
        // }
    )
    .catch((e) => {
        console.log(e);
        console.log(" I happen when I promise gets rejected");
    })
    .finally(() => {
        console.log(
            "I happen after promises stop pending, doesn't matter if they got fulfilled or rejected"
        );
    });

// try {} catch {} finally
console.log("I am after .then, the program keeps running...");

// a function that takes in a number
// if number is positive - resolve the promise

// negative or 0 -> reject

const promiseFunction = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 0) {
                resolve(`The value is ${num}`);
            } else {
                reject(`Invalid value: ${num}`);
            }
        }, 2000);
    });
};

promiseFunction(-2)
    .then((value) => {
        console.log(value);
    })
    .catch((e) => {
        console.log(e);
    });
