// What happens when JavaScript encounters an error?

// a function that calculates total price (add GST to the price)
const GST = 0.1;
const calculateTotal = (price) => price + price * GST;
// ...
// a lot more code here
// GST = 0.15;
// console.log(`The total price is ${calculateTotal(100)}`);

// try catch block

try {
    // some code that could potentially throw an error
} catch (error) {
    // some code that hand;es my error
    // some clean up, maybe some error messaged gets displayed to the user
} finally {
    // code that will run if an error occured or if it didn't
    // something that will run in both situations
    // eg remove loading spinner
}

// In real life, you would just remove the const bug and change let, don't use try catch to deal with Assignment to constant variable error

try {
    GST = 0.15;
} catch (error) {
    console.log(error.message);
}
console.log("My program keeps running");

// throw keyword
console.log("My program starts running");
// throw "oops, something went wrong...";
// this console.log will never get reached

// throw new Error("Oops, something went wrong..");
// instead of throw a string, we throw Error object, because it has some extra properties that give us more context about what happened/where it happened - stack trace, message

console.log("My program keeps running");
// a function that throws an error

const circleArea = (radius) => {
    // if the radius is negative
    if (radius <= 0) {
        throw new Error("Radius must be a positive number");
    }
    // is radius in not a number
    if (isNaN(radius)) {
        throw new Error("Radius must be a number");
    }
    return Math.PI * radius ** 2;
};

try {
    const area = circleArea("hello");
    console.log(`The area is ${area}`);
} catch (e) {
    console.log(e.message);
}
