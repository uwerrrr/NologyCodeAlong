package testing;


import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertSame;
import static org.junit.Assert.assertThrows;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.Arrays;

import org.junit.jupiter.api.Test;

public class UtilsTest {
	///////
	/* Correct tests */
	///////
	@Test
	public void sum_TwoPostiveIntegers_ReturnCorrectSum() {
		int expectedResult = 4;
		int actualResult = Utils.sum(2, 2); // correct test
//		int actualResult = Utils.sum(1, 2); // fail test
		assertEquals(expectedResult, actualResult);
		// assertEquals(expected, actual) checks equal
	}
	
	@Test
	public void sum_TwoNegativeIntegers_ReturnCorrectSum() {
		int expectedResult = -4;
		int actualResult = Utils.sum(-2, -2); 
		assertEquals(expectedResult, actualResult);
	} 
	
	@Test
	public void findUnique_InputArrayHasDuplicates_ReturnShorterList() {
		ArrayList<Integer> input = new ArrayList<>(Arrays.asList(1,1,1,2,2,2,3,3,3));
		ArrayList<Integer> expected = new ArrayList<>(Arrays.asList(1,2,3));
		ArrayList<Integer> actual = Utils.findUniqueNum(input);
		assertTrue(actual.size() < input.size());
		assertTrue(actual.size() == expected.size());
			// assertTrue(boolean condition): check true
	}
	
	// for list with duplicates I want to check if actual is equal to expected
	@Test
	public void findUnique_InputArrayHasDuplicates_ReturnCorrectList() {
		ArrayList<Integer> input = new ArrayList<>(Arrays.asList(1,1,1,2,2,2,3,3,3));
		ArrayList<Integer> expected = new ArrayList<>(Arrays.asList(1,2,3));
		ArrayList<Integer> actual = Utils.findUniqueNum(input);
		assertEquals(expected, actual);
	}
	
	// for list with no duplicates, 
		// check if input is the same as return	
		// returns a list of the same size
	@Test
	public void findUnique_InputArrayHasNoDuplicates_ReturnSameList() {
		ArrayList<Integer> input = new ArrayList<>(Arrays.asList(1,2,3,4,5,6,7,8));
		ArrayList<Integer> expected = new ArrayList<>(Arrays.asList(1,2,3,4,5,6,7,8));
		ArrayList<Integer> actual = Utils.findUniqueNum(input);
		assertTrue(actual.size() == input.size());
		assertEquals(expected, actual);
	}
	
	
	
	///////
	/* Error tests */
	///////
	@Test
	public void devide_DivideByZero_ThrowArithmeticException() {
		assertThrows(ArithmeticException.class,() -> Utils.divide(-2, 0));
		// assertThrows(expected throw exception class, lambda func executing method tested that should throw an exception)
	} 
}
