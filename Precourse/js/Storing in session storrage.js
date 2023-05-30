

// get element on webpage

  // get element by Name on webpage -> change its content
  // document.getElementsByTagName('p') returns a list -> [0] position of the tag
  document.getElementsByTagName('p')[0].innerHTML = "I've changed the text in <p>" ;

  // get element by ID 
  document.getElementById('email').value = "";


// sessionStorage
// The sessionStorage object let you store key/value pairs in the browser.
// The sessionStorage object stores data for only one session.
// (The data is deleted when the browser is closed, not when page is refrashed).

// setItem(key: string, value: string)
sessionStorage.setItem('name','Oscar');
sessionStorage.getItem('name');
// -> "Oscar" - string


sessionStorage.setItem('age','23');
sessionStorage.getItem('age');
// -> "23" - string
parseInt(sessionStorage.getItem('age'));
//  -> 23 - interger


// create a string of an array
JSON.stringify(); //convert to string
JSON.parse(); // convert to JSON tag

// array with JSON
JSON.stringify([1,2,3]);
// -> "[1,2,3]" - string

sessionStorage.setItem('myListOfNumber',JSON.stringify([1,2,3]));
sessionStorage.getItem('myListOfNumber');
// -> "[1,2,3]" - string
JSON.parse(sessionStorage.getItem('myListOfNumber'));
// ->  Array(3) [1,2,3]


// Object with JSON.
sessionStorage.setItem('myObject',JSON.stringify({firstName:"Oscar"}));
sessionStorage.getItem('myObject');
// -> "{\"firstName\":\"Oscar\"}" - string
JSON.parse(sessionStorage.getItem('myObject'));
// -> {firstName: "Oscar"} - Object
JSON.parse(sessionStorage.getItem('myObject')).firstName
// -> "Oscar"