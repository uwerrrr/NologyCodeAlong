// 1. What is JSON?
// JavaScript Object Notation
// A lightweight format for storing an transporting data
// It is language independent, we can easily translate it into another programming language (object/instance of a class in Java)

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 25,
    isEmployed: true,
    interests: ["Cooking", "Cycling", "Skiing"],
};

console.log(typeof person);
// Welcome back, John!
console.log(person.firstName);
console.log(person.interests[0]);
console.log(person["lastName"]);

// 2. What is serialization?
// Serializing - turning the object into a string that resembles the structure of an object, so it is easy to read and understand
// JSON.stringify
const personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);
console.log(personJSON.firstName, "json first name");

// 3. WHy do we use it?

// Now I can send it over HTTP
// I can translate it to an object in a different programming language
// I can store it in a file

// JSON.parse
const anotherPersonJSON =
    '{"firstName": "Kate", "lastName": "Smith", "age": 35, "isEmployed": false, "hobbies": ["Cooking", "Running"]}';

console.log(typeof anotherPersonJSON);

// I want to deserialize the JSON string - turn it into an object, so it is easy to work with

const anotherPerson = JSON.parse(anotherPersonJSON);

console.log(typeof anotherPerson); // this is an object, so we have something that's easy to work with
console.log(anotherPerson.firstName);

const arr = ["apple", "banana"];
console.log(JSON.stringify(arr));
