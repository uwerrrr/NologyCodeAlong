// a page that divides two numbers
import { createTextEl } from "./dom-utils.js";
import { divide } from "./utils.js";

const form = document.querySelector("form");
const resultSection = document.querySelector("section");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const num1 = +data.get("number1");
    const num2 = +data.get("number2");

    console.log(typeof num1, typeof num2);

    if (document.querySelector("p")) {
        resultSection.removeChild(document.querySelector("p"));
    }

    try {
        const result = divide(num1, num2);
        createTextEl("p", result, resultSection, ["success"]);
        // if it goes well, create a p, add it to the section and add the result to the para
    } catch (e) {
        console.log(e.message);
        // display an error message to the user
        createTextEl("p", e.message, resultSection, ["error"]);
    } finally {
        form.reset();
    }
});
