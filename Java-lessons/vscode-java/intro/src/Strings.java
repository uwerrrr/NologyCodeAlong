public class Strings {

  public static void main(String[] args) {
    // We have string concatenation just like JavaScript
    String firstName = "Alex";
    System.out.println("Hello " + firstName + " how are you?");
    String lastName = "Baulderstone";
    String fullName = firstName + " " + lastName;
    System.out.println(fullName);

    // Java does NOT have string interpolation
    // The closest alternative is String.format
    int myAge = 35;
    System.out.println(String.format("%s is %d years old", fullName, myAge));
    // take in order of variables
    // %s represents 1st variable and it is string
    // %d represents 2nd variable and it is double
  }
}
