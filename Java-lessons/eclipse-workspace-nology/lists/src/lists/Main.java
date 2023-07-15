package lists;

import java.util.ArrayList;

public class Main {
	public static void main(String[] args) {
		
		DynamicArray myArray = new DynamicArray();
		myArray.add(1);
		myArray.add(2);
		myArray.add(3);
		myArray.add(4);
		myArray.add(5);
		System.out.println(myArray.size());
		System.out.println(myArray.get(0));
		myArray.viewContent();
		myArray.add(6);
		System.out.println(myArray.get(5));
		myArray.viewContent();
		
		// define array list
		ArrayList<String> names = new ArrayList<String>(); 
		System.out.println(names);
		names.add("Alice");
		names.add("Bob");
		System.out.println(names.size());
		System.out.println(names);
		System.out.println(names.get(0));
		
		ArrayList<Integer> numbers = new ArrayList<Integer>();
		// Integer is an Object wrapper around actual int
		
		// using wrapper Obj gives us a lot of options
		Integer myNumber = 1;
		numbers.add(myNumber);

		// we can do lists of any objects - but this is a code smell usually
		// the problem is we lose information about what type the data is
		// all we can safely use are object methods
		ArrayList<Object> anythingList = new ArrayList<Object>();
		anythingList.add("Hello");
		anythingList.add(myNumber);
		System.out.println(anythingList);

	}
}
