# Arrays

- A way of storing multiple values sequentially that we can access by index
- Zero indexed

## Arrays in Java

- Have to be a single type

```java
int[] myIntArray
String[] myStringArray
boolean[] myBooleanArray
```

- Are fixed length
- Both of these limitations seem annoying
- But they allow the compiler to optimise memory usage and go faster

### Creating Arrays

- With array literals

```java
String name = "Alice";
String[] names = {"Alice", "Bob", "Charlie"}
```

- Empty array with size

```java
int[] numbers = new int[3];
numbers[0] = 2;
numbers[1] = 4;
numbers[2] = 6;
```
