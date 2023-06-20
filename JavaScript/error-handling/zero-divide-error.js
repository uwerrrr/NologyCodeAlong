// custom error

// we will explore this a lot more in Java
// new Error

// extends Error - I want my custom error to behave like the js Error
class ZeroDivisionError extends Error {
    // a method I will use to create a new ZeroDivisionError object
    constructor(message) {
        // calls the constructor of Error (parent)
        super(message);
    }
}

export default ZeroDivisionError;
