/* # Lad in the pub  */

/* 1. Create a function that takes 3 parameters (age, country level of drunk) and returns a string or a boolean that says if someone can enter the pub or not (drunk above 3 is too much) */
/* can enter when: 
      age >= 21 in US 
      age >= 18 for other countries
      level of drunk <= 3 
*/

const checkIfAllowed = (age, country, levelOfDrunk) => {
  return (
    ((country === "USA" && age >= 21) || (country !== "USA" && age >= 18)) &&
    levelOfDrunk <= 3
  ); // return true || false
};
console.log(checkIfAllowed(21, "UK", 2)); // -> true

console.log(checkIfAllowed(18, "UK", 2)); // -> true
console.log(checkIfAllowed(18, "USA", 2)); // -> false
console.log(checkIfAllowed(12, "USA", 2)); // -> false
console.log(checkIfAllowed(32, "USA", 4)); // -> false

// grab existing html elements on the page
const form = document.querySelector(".form");
console.dir(form);

const messageDiv = document.querySelector("#message");
console.log(messageDiv.children);

/*  call the checkIfAllowed when user click submit 
-> set addEventListener to form submit */

form.addEventListener("submit", (event) => {
  event.preventDefault(); // common - prevent refreshing page whenever form is submitted.

  // grab the values of the inputs inside the form
  // I could select individual inputs with input.value
  // another method is to use web API FormData(form) and get value with .get("name")

  const formData = new FormData(form); // use FormData() API to grab input values inside the form
  console.log(formData);
  const age = formData.get("age"); // get value of <input> name: age
  const country = formData.get("country");
  const levelOfDrunk = formData.get("drunk");

  console.log(age, country, levelOfDrunk);

  // based on the values -> I need to decide what message I want
  let messageStr = "";

  const allowed = checkIfAllowed(age, country, levelOfDrunk);
  allowed ? (messageStr = "Come in") : (messageStr = "Go home"); // check if allowed is true or false

  console.log(messageStr);

  /******************************/
  /***** Displaying message *****/
  /******************************/

  // remove existing message from the div if it exists -> to make room for the next message
  if (messageDiv.children.length > 0) {
    messageDiv.removeChild(document.querySelector("#msg"));
  }

  // create a new <p> tag to add to the page
  const newP = document.createElement("p");
  newP.id = "msg"; // set id of the new <p> to "msg"

  //create a text node from messageStr for the p tag
  const messageStrNode = document.createTextNode(messageStr);

  // tell the text node to go inside the newly created <p> tag
  newP.appendChild(messageStrNode);

  // tell the <p> tag where to go on the page - to go to message div
  messageDiv.appendChild(newP);

  // clear the form
  form.reset();

  /*******************************************/
  /***** Changing bottle img and styling *****/
  /*******************************************/

  // based on the allowed value, change the bottle img accordingly
  if (messageDiv.classList.contains("message--failure")) {
    messageDiv.classList.remove("message--failure");
  } else if (messageDiv.classList.contains("message--success")) {
    messageDiv.classList.remove("message--success"); // if messageDiv already contains class message--failure or message--success -> remove it
  }

  if (allowed) {
    // when allowed = true

    messageDiv.classList.add("message--success");
    document.querySelector("img").src = "./assets/green_beer.svg"; // change src of bottle img
  } else {
    // when allowed = false

    messageDiv.classList.add("message--failure");
    document.querySelector("img").src = "./assets/red_beer.svg"; // change src of bottle img
  }
});
