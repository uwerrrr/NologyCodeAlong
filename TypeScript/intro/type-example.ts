// We can use type to define the shape of an Object
type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

// create an Object instance
const me: Person = {
  firstName: "Oscar",
  lastName: "Nguyen",
  age: 27,
};

const greet = (obj: Person): void => {
  console.log("Hello" + obj.firstName);
};
greet(me);

const someone = {
  firstName: "Alex",
  lastName: "BlaBla",
  age: 27,
  location: "Sydney",
};
greet(someone);
// we don't set someone as a Person instance -> function still works b/c it has firstName but extra data -> should be careful b/c we might access those extra data accidentally

// we can create method inside a created Object
const someone2 = {
  firstName: "Alex",
  lastName: "BlaBla",
  age: 27,
  location: "Sydney",
  getName() {
    return this.firstName;
  },
};

////// BETTER WAY
// we can implement interface like in JAVA
interface Greetable {
  getName(): string;
}

// we can define Object class with constructors and methods and implement interface like in JAVA
class Person2 implements Greetable {
  ////** manual field assignments with constructor
  // private firstName: string;
  // private lastName: string;
  // private age: number;

  // constructor(firstName: string, lastName: string, age: number) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.age = age;
  // }

  ////** in TS, we can use shortcut for field assignments inside constructor
  constructor(private firstName: string, lastName: string, age: number) {}

  getName(): string {
    return this.firstName;
  }
}

const greet2 = (obj: Greetable): void => {
  console.log("Hello" + obj.getName());
};

const someone3 = new Person2("Ronaldo", "Christinan", 30);

greet2(someone3);
