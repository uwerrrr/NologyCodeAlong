package testing;

import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

public class Utils {
	
	public static int sum(int a, int b) {
		return a + b ;
	}

	public static int divide(int a, int b) {
		if(b == 0) {
			throw new ArithmeticException("Cannot divide by 0");
			// ArithmeticException: throw error when arithmetic-related errors occur, such as division by zero.
		}
		return a / b ;
	}
	
	// method takes in an ArrayList -> returns unique values
	// e.g. [1,1,1,2,2,2,3,3,3] -> [1,2,3]
	public static ArrayList<Integer> findUniqueNum(ArrayList<Integer> numArr){
		
		ArrayList<Integer> uniqueList = numArr
				.stream()
				.distinct() // Returns a stream consisting of the distinct elements
				.collect(Collectors.toCollection(ArrayList::new));
				
		return uniqueList;
	}
}

