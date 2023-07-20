package generics;

public class MathHelper {
	

	// I want to support multiple data types
	// but not all data types
	// because I want to make sure that that data type
	// will have certain methods
	
	
	public static <T extends Comparable> T max(T one, T two) {
		// <T extends Comparable> : 
			// indicates that the method is generic
			// introduces the type parameter `T`
			// ensure that type parameter `T` implements "Comparable" interface
		
		// max method
		// takes in parameters of type T : one, two
		// return type T
		
		T biggerThing = one;
		
		if(two.compareTo(one) > 0) {
			biggerThing = two;
		}
		
		return biggerThing;
	}
}
