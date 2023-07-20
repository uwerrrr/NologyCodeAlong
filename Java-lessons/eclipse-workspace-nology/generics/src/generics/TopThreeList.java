package generics;

import java.util.ArrayList;

// generic class with 2 type parameters T & U
public class TopThreeList<T, U> {
	
	// instance variables that the TopThreeList class uses
	protected ArrayList<T> favSomething = new ArrayList(); 
		// ArrayList holds elements of type T
	protected U something;
		// variable of type U
	
	// constructor takes 4 parameters
	public TopThreeList(T first, T second, T third, U fourth) {
		favSomething.add(first);
		favSomething.add(second);
		favSomething.add(third);
		this.something = fourth;
	}
}
