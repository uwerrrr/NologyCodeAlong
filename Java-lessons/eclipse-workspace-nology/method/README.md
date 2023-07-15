# Methods

## What is a method?

- It's a function attached to an object, or to a class
- Sometimes use the internal state (current value of the fields) of an object

## What kind of methods are there?

- Static Methods - attached directly to a class defintion
- Instance Methods (default) - attached to an object (instance of a class)

## Why we use methods?

- To maniuplate objects
  - Change internal state
  - Produce values based on internal state
  - Provide information to another object
- Reusability
- DRY
-

## Scopes

- public - can be used anywhere in the codebase
- protected - can be used anywhere in the same package
- private - can only be used in the same class

## Syntax

```
[scope][(optional) static][return type]methodName([param type] paramName) {
  // body
}
```

```java
  class MyClass {
    private int counter;

    public MyClass() {
      this.counter = 0;
    }
    public static void myStaticMethod() {
      System.out.println("This is a static method");
    }

    public void myInstanceMethod(){
      System.out.println("This is an instance method");
      // we have access to the instance fields
      System.out.println(this.counter);
    }
    public void incrementCounter() {
      this.counter++;
    }
  }

  MyClass.myStaticMethod()
  MyClass class1 = new MyClass(); // instantiated with counter value at 0
  class1.incrementCounter(); // increase internal counter value to 1;
  class1.myInstanceMethod();

```
