import { rectPerim, rectangleArea } from "./rectange.js";
import createEl, { changeColour } from "./dom-utils.js";

// WHat are modules?'
// reusable piece of code

// Why do we want to use them?
// we divide our js file into modules
// it's easier to maintain/debug/easier to find things, easier for other people to uderstand what is going on
// testability

// function related to a rectangle, they don't touch the dom, they are some pure function that work with parameters, I'll probably would need to test them

const form = document.querySelector("form");
console.log(form);

// dom function

// selectng elements, adding event listeners etc.
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const w = document.querySelector("#width").value;
    const h = document.querySelector("#heigth").value;
    const areaToDisplay = rectangleArea(parseFloat(w), parseFloat(h));
    console.log(areaToDisplay);
    createEl("p", areaToDisplay, document.querySelector("#area"));
});
