package control_flow;

import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
	// if statements have the same syntax with the exception of not being able to
	// use truthy/falsy values
	
	byte age = 21;
	boolean isCitizen = true;
	if (age >= 18 && isCitizen) {
		System.out.println("You can vote");
	} else {
		System.out.println("No voting for you");
	}
	
	// else if
	String country = "au";
	
	if (age >= 21) {
		System.out.println("You can drink in America");
	} else if (age >= 18 && country.equals("au")) {
		System.out.println("You can drink in Australia");
		// java will pick up on compilation errors even if that code isn't going to run
	//				age = "twenty";
	} else {
		System.out.println("No alcohol for you");
	}
	
	// switch statements
	
	Scanner scan = new Scanner(System.in);
	
	boolean isRunning = true;
	while (isRunning) {
		System.out.println("Type c to continue, or 'e' or 'x' to exit");
		char command = scan.next().charAt(0);
		switch (command) {
		case 'c':
			System.out.println("Continue running");
			break;
		case 'e':
		case 'E':
		case 'x':
		case 'X':
			System.out.println("Exiting");
			isRunning = false;
			break;
		default:
			System.out.println("Command not recognised");
	
		}
	}
	
	scan.close();
	
	// for loops have the same functionality as js
	for (int i = 0; i <= 10; i += 2) {
		if (i == 2) {
			continue;
		}
		if (i == 8) {
			break;
		}
		System.out.println(i);
	}
	
  }
}
