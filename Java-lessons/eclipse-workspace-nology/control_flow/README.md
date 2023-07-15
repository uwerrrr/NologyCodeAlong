# Control Flow

Syntatically control flow in Java is **very** similar to JavaScript.

- If statements
- For loops
- switch statements
  all look the same, and have similar behaviour.

## Differences

- Java does not have truthy and falsy values like JavaScript
  e.g in JavaScript we can have if statements that coerce into a boolean

```js
let name = 'Alex';
if (name) {
  console.log('Hello ' + name);
}
```

**This will not work in Java**

- all we can check in the condition are expressions which result in a boolean

```java
  String name = "Alex";
  if(name != null && name.length() > 0) {
    System.out.prinln("Hello " + name);
  }

```

Java also doesn't do lazy evaluation/short circuit logic

- In JavaScript we can do things like

```js
let name;
console.log(`Hello ${name || 'guest'}`);
```

In Java we'd have to write

```java
  String name = null;
  if(name == null) {
    System.out.println("Hello guest");
  } else {
    System.out.println("Hello " + name);
  }
```
