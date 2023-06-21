// MVP

// Create a function called delayedIncDec(n, mode, delay) - this function needs to return a promise<number>,
// the value of the promise should be n after incrementing or decrementing depending on the mode

// if mode is anything other than inc or dec - reject the promise

// n - some number

// mode - string - "inc", "dec"

// inc will cause the function to increment n by 1

// dec will cause the function to decrement by 1

// timeout - delay in ms - your function will return a promise after that time

// timeout should have a default value, if the function is called without the 3rd argument, it should default to 2500

// call this function three times with different numbers and values of dec and delay
// console.log the value of rejected or resolved promise


const delayedIncDec = (n, mode, delay = 2500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mode === "inc") {
        resolve(++n);
      } else if (mode === "dec") {
        resolve(--n);
      } else {
        reject(`Mode is either "inc" or "dec"`);
      }
    }, delay);
  });
};

let result = delayedIncDec(30, "inc");
result
  .then((val) => {
    console.log(`val: `, val);
  })
  .catch((e) => {
    console.log(e);
  });

result = delayedIncDec(30, "dec", 0);
result
  .then((val) => {
    console.log(val);
  })
  .catch((e) => {
    console.log(e);
  });

result = delayedIncDec(30, "abc");
result
  .then((val) => {
    console.log(val);
  })
  .catch((e) => {
    console.log(e);
  });
