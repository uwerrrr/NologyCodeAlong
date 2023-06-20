// What are promises?
// What is asynchronous programming?
// Blocking vs non-blocking code
// Why do we use promises?
// What is an APi?

// Javascript is single-threaded language

console.log("I'll be first");
console.log("I'll be second");
console.log("I'll be third");

// But what if things took longer?

// Blocking code
// cooking popcorn in the microwave
// wait unitl it's done
// wait in front of your microwave
// when the popcorn is done, you go and wash the dishes

// an example of blocking code (while loops, for loops)
function wait(ms) {
    let start = Date.now();
    let now = start;

    while (now - start < ms) {
        now = Date.now();
    }
}

// console.log("I am before the wait function");
// wait(8000);
// console.log("I am after the wait function");

document.querySelector("button").addEventListener("click", () => {
    wait(3000);
    alert("You clicked the button");
});

// Non-blocking code
// cooking anything else in the microwave
// put the food in
// set the timer
// do something else in the meantime, like wash the dishes
// when it's done, come back to it

// setTimeout
console.log("I am before setTimeout"); // 1
setTimeout(() => {
    console.log("I am inside set timeout, 4s"); // 3
}, 4000);

setTimeout(() => {
    console.log("I qm inside set timeout too, 1s");
}, 1000);

console.log("I am after setTimeout"); // 2

// event loop

// Promises

// something that we tell a person we will do in the future/ at some point in the future

// I might happen, but might not happen

// Promises in js
// they are an object that can have three states
// represents the outcome of an asynchronous operation
// similar to rea life promises, they can be

// fulfilled - things went right
// rejected - things went wrong
// pending - while waiting for the outcome

// API
// food ordering app
// we need some data to show to the user:
// - what restaurants are available
// - what is the menu of each restaurant
// - is it currently open or not
// - what dishes are available on the day we use teh app
// - we need to know the addresses of each restaurant
// - we want to know the prices

// all this data would live in some database

// from our frontend, we want to talk to that database somehow, request some information to show to the user

// how do we do it? through an API
// an API (Application Programming Interface) is a way for two pieces of software to talk to each other

// API - like a waiter in a restaurant

// In real life, you will rarely create promises yourself using new Promise, you will most of the time consume promises
