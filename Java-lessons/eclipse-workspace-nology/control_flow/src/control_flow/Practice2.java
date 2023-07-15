package control_flow;
import java.util.Scanner;

public class Practice2 {

  public static void main(String[] args) {
    /* Challenge: Rounding Floats
    Request 2 float inputs from the user
    Round both to 3 decimal places
    if they are the same number after rounding:
    print "Both numbers are n after rounding"
    else
    print "n1, and n2 are different numbers", n1 and n2 being the 2 rounded values
    */
	
	
	/*
    Challenge: What's the number of x in y?
    Scan user input twice
    Allowed inputs:
    "s" => seconds
    "m" => minutes
    "h" => hours
    "D" => days
    "M" => months
    "Y" => years
    Input => Output Examples:
    1st: "M", 2nd: "D" => "There are 30 days in a month"
    1st: "M", 2nd: "h" => "There are 720 hours in a month"
    1st: "h", 2nd: "s" => "There are 3600 seconds in an hour"
    1st: "M", 2nd: "Y" => "There are no years in a month"
    1st: "s", 2nd: "h" => "There are no hours in a second"
    Assumptions:
    There are 30 days in a month */

    Scanner scanner = new Scanner(System.in);
    System.out.println("Please enter your 1st number");
    float num1 = scanner.nextFloat();
    System.out.println("Please enter your 2nd number");
    float num2 = scanner.nextFloat();

    float roundedNum1 = (float) (Math.round(num1 * (10^3)) / 1000.0);
    float roundedNum2 = (float) (Math.round(num2 * 1000.0) / 1000.0);

    if (roundedNum1 == roundedNum2) {
      System.out.println(
        String.format("Both numbers are %f after rounding", roundedNum1)
      );
    } else {
      String.format(
        "%f, and %f are different numbers",
        roundedNum1,
        roundedNum2
      );
    }

    // System.out.println("Please enter your 1st input");
    // String input1 = scanner.nextLine();
    // System.out.println("Please enter your 2nd input");
    // String input2 = scanner.nextLine();

  //  "s" => seconds
  //   "m" => minutes
  //   "h" => hours
  //   "D" => days
  //   "M" => months
  //   "Y" => years
    // int s = 1;
    // int m = 60 * s;
    // int h = 60 * m;
    // int

    // String output = "";

   
    scanner.close();
  }
}
/* 
    Challenge: What's the number of x in y?
    Scan user input twice
    Allowed inputs:
    "s" => seconds
    "m" => minutes
    "h" => hours
    "D" => days
    "M" => months
    "Y" => years
    Input => Output Examples:
    1st: "M", 2nd: "D" => "There are 30 days in a month"
    1st: "M", 2nd: "h" => "There are 720 hours in a month"
    1st: "h", 2nd: "s" => "There are 3600 seconds in an hour"
    1st: "M", 2nd: "Y" => "There are no years in a month"
    1st: "s", 2nd: "h" => "There are no hours in a second"
    Assumptions:
    There are 30 days in a month */
