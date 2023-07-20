package generics;

public class PrintArray {
	
	// using typed methods
	// any data type I want to support, I would need to add my own custom method
//	public static void printStringArray(String[] stringArr) {
//		for(String str : stringArr) {
//			System.out.println(str);
//		}
//	}
//	
//	public static void printIntArray(Integer[] intArr) {
//		for(Integer someInt : intArr) {
//			System.out.println(someInt);
//		}
//	}
//	
//	public static void printCharArray(char[] charArr) {
//		for(char someChar : charArr) {
//			System.out.println(someChar);
//		}
//	}
	
	
	// Create a generic method that will take in an array of any data type
	public static<T> void printAnyArray(T[] anyArr) { 
		// <T> : indicates that the method is generic and introduces the type parameter `T`
		// T[]: Array of any type
		
		for(T thing: anyArr) {
			System.out.println(thing);
		}
	}

}
