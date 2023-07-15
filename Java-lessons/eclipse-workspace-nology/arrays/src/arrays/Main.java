package arrays;

import java.util.Arrays;

public class Main {

	public static void main(String[] args) {
		String[] names = { "Alice", "Bob", "Charlie" };
		System.out.println(names[0]);
		System.out.println(names[1]);
		System.out.println(names[2]);
		int[] numbers = new int[3];
		numbers[0] = 2;
		numbers[1] = 4;
		numbers[2] = 6;
		// numbers[3] = 8;
//		System.out.println(Arrays.toString(numbers));

		// we can copy arrays using the System.arrayCopy() method
		// this syntax is a bit gross;
		int[] newNumbers = new int[4];
		System.arraycopy(numbers, 0, newNumbers, 0, numbers.length);
		newNumbers[3] = 8;

		// A way nicer syntax is to use Arrays.copyOf()
		numbers = Arrays.copyOf(numbers, 4);
		numbers[3] = 8;

		// third - most manual way
		int[] numbersCopy = new int[numbers.length + 1];
		for (int i = 0; i < numbers.length; i++) {
			numbersCopy[i] = numbers[i];
		}

		char[] chars = new char[1];
		System.out.println(Arrays.toString(chars));
		System.out.println(chars[0]);

		System.out.println(Arrays.toString(numbersCopy));

		System.out.println(Arrays.toString(numbers));

		System.out.println(Arrays.toString(newNumbers));
//	
		System.out.println(Arrays.toString(names));

		
		// Multi dimensional arrays
		
		int[][] grid = {{1,2}, {3,4}};
		
		
		
		
	}

}
