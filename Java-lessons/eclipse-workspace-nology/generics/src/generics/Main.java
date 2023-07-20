package generics;

import java.util.ArrayList;

public class Main {

	public static void main(String[] args) {
		
		// Issue: When dealing with different data types, we currently need to create separate classes for each data type, resulting in code duplication and reduced reusability.
		TopThreeListOfBooks list = new TopThreeListOfBooks(
				new Book("Intro to js"), new Book("Harry Potter"),
				new Book("Sherlock Holmes"));
		
		TopThreeListOfStrings words = new TopThreeListOfStrings(
				"holidays", "weekend", "money");
		
		// With generic class, we can use same class to create different class instances, each holding different data types
		
		// create instances of the generic class TopThreeList
		TopThreeList<Book, String> bookList = new TopThreeList<>(new Book("Intro to js"), new Book("Harry Potter"),
				new Book("Sherlock Holmes"), "hello");
			// 4 params: 3 Books and 1 String
		
		TopThreeList<String, String> wordList = new TopThreeList<>("holidays", "weekend", "money", "abc");
		
		TopThreeList<Integer, String> numbersList = new TopThreeList<>(12, 15, 18, "abc");

		
		// we've seen this before
		ArrayList<String> strs = new ArrayList();
		strs.add("one");
		strs.add("two");
		
		ArrayList<Integer> ints;
		
		ArrayList<Book> booksArr;
		
		// using generic method printAnyArray
		String[] someStrings = { "flower", "bread"};
		
		PrintArray.printAnyArray(someStrings);
		
		Integer[] someInts = { 23, 24, 36 };
		Character[] someChars = { 'a', 'b', 'c' };
		
		PrintArray.printAnyArray(someInts);
		PrintArray.printAnyArray(someChars);
		
		Integer x = 10;
		Integer y = 15;
		
		Coordinates<Integer> coords = new Coordinates<>(x, y);
		
		Book book1 = new Book("some title");
		Book book2 = new Book("some other title");
		
		// Wouldn't make sense to add Book as coordinates
			// we have bounded type
		
		// Coordinates<Book> otherCoords = new Coordinates<>(book1, book2); 
	}

}
