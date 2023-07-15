# Classes

## What are classes?

- A class can have two functionalities in Java

### Static

- We can use a class to group together or namespace several functions
- eg Math.round() Math.max() Math.min()

### Instances / objects

- A class is a blueprint for an object
- Classes have properties, and methods

## Synatx

- Scope refers to the access, public vs private vs protected
- class name is `PascalCase`
- One class per file
- File name must match the class Name

```
[scope] class [ClassName] {

}
```

```java
  //Person.java
  class Person {

  }
```

### Scopes Table

| Access Modifier       | Within Class | Within Package | Outside Package | Outside Package (inheritance) |
| --------------------- | ------------ | -------------- | --------------- | ----------------------------- |
| Public                | Y            | Y              | Y               | Y                             |
| Protected             | Y            | Y              | N               | Y                             |
| Default (no modifier) | Y            | Y              | N               | N                             |
| Private               | Y            | N              | N               | N                             |
