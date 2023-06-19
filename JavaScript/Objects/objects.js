// 1. What are objects?
// 2. WHy do we use them?
// 3. How to create objects in js?

// Another data ype in js
// Something that represents a "thing", like a real life entity
// Objects have properties that describe them, and they have methods(function) that describe what they can do

// number, string, boolean, array
// firstName, lastName, address, dateOfAccountCreated, dob

// ["FirstName: Martyna", "Krol", "1 Sydnery ROad Sydney", "20-07-1997"]

// Objects allow us to store data in key-value paris

const customer = {
    firstName: "Martyna",
    lastName: "Krol",
    address: "1 Sydney Road, Sydney, NSW 2000",
    dob: "20-07-1997",
    isRegularCustomer: false,
    noOfOrders: 3,
    // method
    printFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

// I can easily access each property of an object
console.log(customer);

// One way to access properties - dot notation
console.log(customer.firstName);
console.log(customer.isRegularCustomer);

console.log(customer.printFullName());

// We can update a property
// we reassigned a new value to the noOfOrders property
customer.noOfOrders = 10;
console.log(customer);

// Adding a property to the object
// I want to add an email

// I get undefined back because this email doesn't exist
console.log(customer.email);
customer.email = "martyna.krol@nology.io";
console.log(customer.email);

function Customer(firstName, lastName, address, dob, noOfOrders = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.isRegularCustomer = false;
    this.dob = dob;
    this.noOfOrders = noOfOrders;
}

const customer2 = new Customer(
    "Sandra",
    "Myrda",
    "1 Sydney Road, Sydney, NSW 2000",
    "12-06-1998",
    2
);

customer2.noOfOrders = 23;

const customer3 = new Customer(
    "Remi",
    "Hoeppe",
    "1 Sydney Road, Sydney, NSW 2000",
    "12-06-1998"
);

console.log(customer2);
console.log(customer3);

// classes

// another way of accessing properties of an object - []
console.log(customer3["firstName"]);

// I don't know what the name of my key is
const printOneValue = (object, key) => {
    console.log(object[key]);
};

printOneValue(customer2, "isRegularCustomer");

const coach = {
    firstName: "Alex",
    lastName: "Baulderstone",
    title: "Senior Coach",
};

printOneValue(coach, "title");

// usersname: full name

const student = {
    "john-smith": "John Smith",
    "first name": "John",
};

console.log(student["first name"]);

// renaming a key
const coach2 = {
    firstName: "Cal",
    lastName: "Hill",
    title: "Head of Education",
};

// create a new object with different key names but values from the other objects
const coach3 = {
    name: coach2.firstName,
    surname: coach2.lastName,
    title: coach2.title,
};

console.log(coach, "coach");
console.log(coach2, "coach2");
console.log(coach3, "coach3");

// object destructuring
// const {/* properties go here*/} = coach2;
const { firstName, lastName, title } = coach2;
console.log(firstName);
console.log(lastName);
console.log(title);

// create a new object
const updatedCoach = { name: firstName, surname: lastName, title };

console.log(updatedCoach);

const coach4 = {
    firstName: "Martyna",
    lastName: "Krol",
    title: "Junior Coach",
    dateStarted: "02-02-2021",
    city: "Melbourne",
};

// I want to rename location to city
// with object destructuring, I can extract just one property and leave the rest grouped together
const {
    city,
    dateStarted,
    // I already have a variable called title, so I need to rename it to something else
    title: coach4Title,
    ...remainingProperties
} = coach4;

console.log(coach4Title, "coach 4 title");

console.log(city);
console.log(remainingProperties, "remaining properties");
const updatedCoach4 = { address: city, ...remainingProperties };

console.log(updatedCoach4, "updated coach 4");

// deleting a key
const student2 = {
    id: 1234566,
    firstName: "John",
    cohort: "Iceland",
    dob: "12-09-1995",
    location: "Sydney",
};

// I would use object destructuring for it
const { id, ...rest } = student2;
console.log(id);
console.log(rest, "rest of student3 properties");
// this would create a nested object - an object with key rest and value of an object
// const cleanedUpStudent = { rest };
const cleanedUpStudent = { ...rest };
console.log(student2);
console.log(cleanedUpStudent, "clean up student");

// how to check if an object has a certain property
// hasOwnProperty
console.log(student2.hasOwnProperty("age"));

console.log(coach.hasOwnProperty("title"));
