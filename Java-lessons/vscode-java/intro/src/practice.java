package intro;
import java.util.Scanner;
public class practice {

	public static void main(String[] args) {
		
//		 Create a byte, integer and double using the scanner to take input

		Scanner s = new Scanner(System.in);
		System.out.println("Please enter your byte");
		Byte myByte = s.nextByte();
		
		System.out.print("Enter an integer value: ");
        int myInt = s.nextInt();

        System.out.print("Enter a double value: ");
        double myDouble = s.nextDouble();
	        
        System.out.println("Byte value: " + myByte);
        System.out.println("Integer value: " + myInt);
        System.out.println("Double value: " + myDouble);
        
		

	
//	 - Create an integer that is the result of dividing your byte by a number selected by the user
        
       System.out.print("Enter a devisor value: ");
       int divisor = s.nextInt();
       int resultInt = myByte / divisor;
       System.out.println("Dividing myByte to divisor: " + resultInt);
       
       
       
//   - Create a long by taking input from the user for a short and multiplying that by another short
       
       System.out.print("Enter 1st short value: ");
       short shortVal1 = s.nextShort();
       System.out.print("Enter 2nd short value: ");
       short shortVal2 = s.nextShort();
       long resultLong = (long) shortVal1 * shortVal2;
       
       System.out.println("Multiplying 2 short numbers : " + resultLong);
       
       s.close();

	}
}
