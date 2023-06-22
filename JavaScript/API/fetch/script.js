// What is fetch?
// How to use it

// API

// Request
// fetch is not a part of JS - it is a WEB API, we have access to it through the browser

// .fetch method
// returns a promise
// we use it tp request some resources

// HTTP protocol
// GET, POST, PUT, PATCH, DELETE
// sending a Request
// receiving a Response
// status code
// 404 - not found
// 200 - OK
// body - the data from some db

const myFetch = fetch("https://randomuser.me/api/"); // a url from an API

// console.log(myFetch);

// myFetch is a promise, I need .then to access the Response object
// myFetch.then((response) => {
//     console.log(response);
//     // the Response object has a .json() method that also returns a promise, this method takes the body out of the response and converts it to a s object
//     response.json().then((data) => console.log(data));
// });

async function fetchUser() {
    const response = await fetch("https://randomuser.me/api/");
    // console.log(response);
    // .json returns a promise just like fetch, so we need to await
    const data = await response.json();
    console.log(data.results[0]);
    const nameObj = data.results[0].name;
    console.log(nameObj);
    const { first, last } = nameObj;
    console.log(first);
    console.log(last);

    // I want the name property - I want fist and last to add it to my h2
    document.querySelector("h2").innerText = `${first} ${last}`;
}

// I want to call the fetchUser function when the button gets clicked

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    fetchUser();
});
