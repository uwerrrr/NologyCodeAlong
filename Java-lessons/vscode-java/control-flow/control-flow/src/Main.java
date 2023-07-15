public class Main {

  public static void main(String[] args) {
    // if statements have the same syntax with the exception of not being able to use truthy / falsy values
    byte age = 18;
    boolean isCitizen = true;
    if (age >= 18 && isCitizen) {
      System.out.println("You can vote");
    } else if (isCitizen) {
      System.out.println("No voting for you");
    }

    // else if
    String country = "au";

    if (age >= 21) {
      System.out.println("You can drink in America");
    } else if (age >= 18 && country.equals("au")) {
      System.out.println("You can drink in Australia");
      //// Java will pick up on compilation errors even if that code is not run
      // age = "twenty";
    } else {
      System.out.println("No alcohol for you");
    }
  }
}
