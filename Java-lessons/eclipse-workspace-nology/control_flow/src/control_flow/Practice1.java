package control_flow;
import java.util.Scanner;

public class Practice1 {

  public static void main(String[] args) {
    /* Challenge: Positive or Negative?
    Scan user input and print...
    "n is positive" if n (the number that was scanned) is positive
    "n is negative" if n is negative
    */

    Scanner s = new Scanner(System.in);

    System.out.println("Please enter your number");
    double num = s.nextDouble();
    if (num == 0) {
      System.out.println("zero is neither positive nor negative");
    } else if (num > 0) {
      System.out.println(String.format("%f is positive", num));
    } else {
      System.out.println(String.format("%f is negative", num));
    }

    /*  Challenge: Find the largest input
    Get 3 numbers from the user
    Print "n is the largest", n being the largest of the 3 inputs
    */
    
    System.out.println("Please enter 3 numbers:");
    System.out.println("Num 1: ");
    double num1 = s.nextDouble();
    System.out.println("Num 2: ");
    double num2 = s.nextDouble();
    System.out.println("Num 3: ");
    double num3 = s.nextDouble();

    double largestNum = num1;

    if (num2 > largestNum) {
      largestNum = num2;
    }

    if (num3 > largestNum) {
      largestNum = num3;
    }

    System.out.println("The largest number is: " + largestNum);

    s.close();
  }
}
