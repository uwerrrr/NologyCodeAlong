

public class Main {

	public static void main(String[] args) {

		// comments are the same
		// output - more options than JS
		// to a new line
		System.out.println("Hello there");
		// print without linebreaks
		System.out.print("Hello \n");
		System.out.print("there \n");

		// byte -128 - 127
		byte myByte = 126;
		System.out.println(myByte);
		myByte++;
		System.out.println(myByte);
		// numbers will overflow if we try and increase past the limit. start counting
		// back from the lowest value
		myByte += 10;
		System.out.println(myByte);

		// range -32768 - 32767
		short myShort = 3252;
		short myShort2 = 13526;
		// with casting we also overflow - don't do this
		short myBigShort = (short) 32769;
		System.out.println(myBigShort);
		// we can represent bigger numbers. Can use underscore to seperate
		// -2,147,483,648 to 2,147,483,647
		int myInt = 12_345_135;
		int smallestInt = -2_147_483_648;

		// long
		// gotcha we need to put an L at the end to specify a long
		long reallyBigNumber = 312415112515L;
		// same gotcha with floats - put an F at the end
		float myFloat = 1.25252F;
		// double - java assumes we use double by default
		double myDouble = 1.24151561;

		// booleans - 1 bit
		boolean myBool = true;
		myBool = false;

		// char single character - takes up 2 bytes (16 bits)
		// represented with single quotes - IMPORTANT
		char myChar = 'A';
	}

}
