package testing;

public class Main {
	// Testing
	
	// Why should we test our code?
	
	// Make sure there is no bugs and everything works correctly
	// Safety when refactoring our code
	// Documentation - good tests tell us what the expected outcome is
	// Forces us to write better/more modular code
	// Looks good when applying for jobs
	
	
	// Unit testing
	// JUnit5 
	// JUnit4 examples are still very common online
	
	// Syntax
	
	// class MyClassTest {
	
	//	@Test
	//  public void testedMethodName_TestState_ExpectedOutcome() 
	      // 1. Setup/ Arranging data
		  // 2. Act - call the method that we are testing
		 //  3. Assert - make an assertion about the result 
    // }
	
	// How to add JUnit to a Java project
	// 1. Right click on the project and select Build Path ->Configure Build Path
	// 2. Select Libraries -> ClassPath
	// 3. When ClassPath is selected, click on Add Libraries
	// 4. Select JUnit -> JUnit5
	// 5. Apply and Close
	// 6. You should be able to see JUnit5 folder under JRE System Library
	
	public static void main(String[] args) {
//		System.out.println(Utils.divide(3, 0));
	}

}
