package intro;

import java.util.Scanner;

public class Input {
	public static void main(String[] args) {

		Scanner s = new Scanner(System.in);
		System.out.println("Please enter your name");
		String name = s.nextLine();
		System.out.println("Hello " + name);
		System.out.println("Input a number");
		int num = s.nextInt();
		System.out.println("You picked " + num);
		s.close();
	}

}